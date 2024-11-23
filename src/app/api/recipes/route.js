import { supabase } from "../../../lib/supabaseClient";
import { currentUser } from "@clerk/nextjs/server";

export async function OPTIONS() {
  const headers = new Headers();
  headers.set(
    "Access-Control-Allow-Origin",
    "https://recipe-radar-pi.vercel.app"
  );
  headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  headers.set("Access-Control-Allow-Credentials", "true");

  return new Response(null, { headers, status: 204 });
}

export async function POST(request) {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Credentials", "true");

  try {
    const user = await currentUser();

    if (!user || !user.id) {
      return new Response(JSON.stringify({ error: "User not authenticated" }), {
        status: 401,
        headers,
      });
    }

    const recipeData = await request.json();

    const {
      title,
      description,
      cookingTime,
      servings,
      difficulty,
      ingredients,
      instructions,
      categories,
    } = recipeData;

    // Step 1: Insert recipe into the "recipes" table
    const { data: recipe, error: recipeError } = await supabase
      .from("recipes")
      .insert([
        {
          title,
          description,
          cooking_time: cookingTime ? parseInt(cookingTime) : null,
          servings: servings ? parseInt(servings) : null,
          difficulty,
          user_id: user.id,
        },
      ])
      .select();

    if (recipeError) {
      console.error("Error inserting recipe:", recipeError);
      return new Response(JSON.stringify({ error: recipeError.message }), {
        status: 400,
        headers,
      });
    }

    const newRecipe = recipe[0];
    const recipeId = newRecipe.id;

    // Step 2: Insert instructions into the "instructions" table
    const instructionRows = instructions.map((instruction, index) => ({
      recipe_id: recipeId,
      step_number: index + 1,
      description: instruction.step,
    }));

    const { error: instructionError } = await supabase
      .from("instructions")
      .insert(instructionRows);

    if (instructionError) {
      console.error("Error inserting instructions:", instructionError);
      return new Response(JSON.stringify({ error: instructionError.message }), {
        status: 400,
        headers,
      });
    }

    // Step 3: Insert ingredients into the "ingredients" table
    const ingredientRows = ingredients.map((ingredient) => ({
      recipe_id: recipeId,
      name: ingredient.item,
      quantity: `${ingredient.amount || ""} ${ingredient.unit || ""}`.trim(),
    }));

    const { error: ingredientError } = await supabase
      .from("ingredients")
      .insert(ingredientRows);

    if (ingredientError) {
      console.error("Error inserting ingredients:", ingredientError);
      return new Response(JSON.stringify({ error: ingredientError.message }), {
        status: 400,
        headers,
      });
    }

    // Step 4: Handle categories
    if (Array.isArray(categories) && categories.length > 0) {
      console.log("Processing categories:", categories);

      for (const categoryName of categories) {
        if (typeof categoryName !== "string") continue; // Ensure valid category name

        // Check if the category already exists
        let { data: existingCategory, error: categoryError } = await supabase
          .from("categories")
          .select("id")
          .eq("name", categoryName)
          .limit(1)
          .single();

        if (categoryError && categoryError.code !== "PGRST116") {
          console.error("Error fetching category:", categoryError);
          return new Response(
            JSON.stringify({ error: categoryError.message }),
            { status: 400, headers }
          );
        }

        let categoryId;
        if (!existingCategory) {
          // Insert new category if it doesn't exist
          const { data: newCategory, error: insertCategoryError } =
            await supabase
              .from("categories")
              .insert({ name: categoryName })
              .select()
              .single();

          if (insertCategoryError) {
            console.error("Error inserting category:", insertCategoryError);
            return new Response(
              JSON.stringify({ error: insertCategoryError.message }),
              { status: 400, headers }
            );
          }

          categoryId = newCategory.id;
        } else {
          categoryId = existingCategory.id;
        }

        // Insert into "recipe_categories" table
        const { error: recipeCategoryError } = await supabase
          .from("recipe_categories")
          .insert({ recipe_id: recipeId, category_id: categoryId });

        if (recipeCategoryError) {
          console.error(
            "Error inserting recipe-category relationship:",
            recipeCategoryError
          );
          return new Response(
            JSON.stringify({ error: recipeCategoryError.message }),
            { status: 400, headers }
          );
        }
      }
    }

    return new Response(
      JSON.stringify({
        id: recipeId,
        message: "Recipe created successfully",
      }),
      { status: 201, headers }
    );
  } catch (err) {
    console.error("Error handling POST request:", err);
    return new Response(
      JSON.stringify({ error: `Internal Server Error: ${err.message}` }),
      {
        status: 500,
        headers,
      }
    );
  }
}
