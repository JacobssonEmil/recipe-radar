const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

// Utility function to handle API responses
async function handleResponse(response: Response) {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "An error occurred");
  }
  return response.json();
}

// Utility function to add Authorization header
function authHeader(token: string) {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function getRecipes() {
  const response = await fetch(`${API_BASE_URL}/recipes`);
  return handleResponse(response);
}

export async function getRecipeById(recipeId: string) {
  const response = await fetch(`${API_BASE_URL}/recipes/${recipeId}`);
  return handleResponse(response);
}

export async function searchRecipes(keyword: string) {
  const response = await fetch(
    `${API_BASE_URL}/recipes/search?keyword=${encodeURIComponent(keyword)}`
  );
  return handleResponse(response);
}

export async function uploadRecipe(recipeData: any, token: string) {
  const response = await fetch(`${API_BASE_URL}/recipes`, {
    method: "POST",
    headers: authHeader(token),
    body: JSON.stringify(recipeData),
  });
  return handleResponse(response);
}

export async function getRecipesByCategory(categoryId: string) {
  const response = await fetch(
    `${API_BASE_URL}/recipes/category/${categoryId}`
  );
  return handleResponse(response);
}
