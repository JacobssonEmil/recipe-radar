import { supabase } from "../../../../lib/supabaseClient";

export async function PUT(request, { params }) {
  const { id } = params;
  const updates = await request.json();
  const { data, error } = await supabase
    .from("ingredients")
    .update(updates)
    .eq("id", id);
  if (error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  return new Response(JSON.stringify(data), { status: 200 });
}

export async function DELETE(request, { params }) {
  const { id } = params;
  const { error } = await supabase.from("ingredients").delete().eq("id", id);
  if (error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  return new Response(JSON.stringify({ message: "Ingredient deleted" }), {
    status: 200,
  });
}
