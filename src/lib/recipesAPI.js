export default async function postRecipe(recipe) {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
  const url = `${apiBaseUrl}/api/recipes`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "An error occurred");
    }

    const data = await response.json();
    console.log("Recipe added successfully:", data);
    return data;
  } catch (error) {
    console.error("Error posting recipe:", error.message);
    throw error;
  }
}
