import { supabase } from "../../../../../lib/supabaseClient";

export async function GET(request, { params }) {
  const { id } = params;
  const { data, error } = await supabase
    .from("ingredients")
    .select("*")
    .eq("recipe_id", id);
  if (error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  return new Response(JSON.stringify(data), { status: 200 });
}

export async function POST(request, { params }) {
  const { id } = params;
  const ingredient = await request.json();
  ingredient.recipe_id = id;
  const { data, error } = await supabase
    .from("ingredients")
    .insert([ingredient]);
  if (error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  return new Response(JSON.stringify(data), { status: 201 });
}
