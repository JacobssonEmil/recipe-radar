import { supabase } from "../../../../lib/supabaseClient";

export async function GET(request, { params }) {
  const { id } = params;
  const { data, error } = await supabase
    .from("recipes")
    .select(
      `
      *,
      users (
        email
      )
    `
    )
    .eq("id", id)
    .single();
  if (error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 404,
    });
  return new Response(JSON.stringify(data), { status: 200 });
}

export async function PUT(request, { params }) {
  const { id } = params;
  const updates = await request.json();
  const { data, error } = await supabase
    .from("recipes")
    .update(updates)
    .eq("id", id);
  if (error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  return new Response(JSON.stringify(data), { status: 200 });
}

// TODO: Fix issue regarding violating foreign key constraints.
export async function DELETE(request, { params }) {
  const { id } = params;
  const { error } = await supabase.from("recipes").delete().eq("id", id);
  if (error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  return new Response(JSON.stringify({ message: "Recipe deleted" }), {
    status: 200,
  });
}
