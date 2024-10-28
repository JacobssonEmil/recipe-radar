import { supabase } from "../../../lib/supabaseClient";

export async function GET() {
  const { data, error } = await supabase.from("users").select("*");
  if (error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  return new Response(JSON.stringify(data), { status: 200 });
}

export async function POST(request) {
  const { email, name } = await request.json();
  const { data, error } = await supabase
    .from("users")
    .insert([{ email, name }]);
  if (error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  return new Response(JSON.stringify(data), { status: 201 });
}
