import { supabase } from "../../../lib/supabaseClient";
import { currentUser } from "@clerk/nextjs/server";

export async function GET() {
  const { data, error } = await supabase.from("recipes").select(`
      *,
      users (
        email
      )
    `);
  if (error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  return new Response(JSON.stringify(data), { status: 200 });
}

export async function POST(request) {
  try {
    // Step 1: Get the current user
    const user = await currentUser();

    if (!user || !user.id) {
      return new Response(JSON.stringify({ error: "User not authenticated" }), {
        status: 401,
      });
    }

    // Step 2: Get the recipe data from the request body
    const recipe = await request.json();

    // Step 3: Add the user ID to the recipe data
    const recipeWithUser = {
      ...recipe,
      user_id: user.id, // Attach the user ID
    };

    // Step 4: Insert the recipe into the `recipes` table
    const { data, error } = await supabase
      .from("recipes")
      .insert([recipeWithUser]);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
      });
    }

    return new Response(JSON.stringify(data), { status: 201 });
  } catch (err) {
    console.error("Error handling POST request:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
