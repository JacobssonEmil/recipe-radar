import { supabase } from "../../../lib/supabaseClient";
import { currentUser } from "@clerk/nextjs/server";

export async function OPTIONS() {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET, POST, PUT");
  headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  return new Response(null, { headers, status: 204 });
}

export async function GET() {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");

  try {
    const { data, error } = await supabase.from("recipes").select(`
        *,
        users (
          email
        )
      `);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers,
      });
    }

    return new Response(JSON.stringify(data), { status: 200, headers });
  } catch (err) {
    console.error("Error handling GET request:", err);
    return new Response(
      JSON.stringify({ error: `Internal Server Error: ${err.message}` }),
      {
        status: 500,
        headers,
      }
    );
  }
}

export async function POST(request) {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");

  try {
    const user = await currentUser();

    if (!user || !user.id) {
      return new Response(JSON.stringify({ error: "User not authenticated" }), {
        status: 401,
        headers,
      });
    }

    const recipe = await request.json();

    const recipeWithUser = {
      ...recipe,
      user_id: user.id,
    };

    const { data, error } = await supabase
      .from("recipes")
      .insert([recipeWithUser]);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers,
      });
    }

    return new Response(JSON.stringify(data), { status: 201, headers });
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
