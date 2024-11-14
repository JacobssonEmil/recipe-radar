// components/RecipeGrid.tsx
"use client";

import { useState } from "react";
import { RecipeCard } from "./recipe-card";

const recipes = [
  {
    id: 1,
    title: "Classic Eggs Benedict",
    description: "Perfect brunch recipe with hollandaise sauce",
    image: "/recipe1.jpg",
    cookTime: "30 mins",
    category: "Breakfast",
    author: "Chef Maria",
    difficulty: "Medium",
    calories: 450,
  },
  {
    id: 2,
    title: "Mediterranean Quinoa Bowl",
    description: "Healthy and filling vegetarian bowl",
    image: "/recipe2.jpg",
    cookTime: "20 mins",
    category: "Lunch",
    author: "Chef Alex",
    difficulty: "Easy",
    calories: 380,
  },
  {
    id: 3,
    title: "Grilled Salmon",
    description: "With lemon herb butter sauce ",
    image: "/recipe3.jpg",
    cookTime: "25 mins",
    category: "Dinner",
    author: "Chef John",
    difficulty: "Medium",
    calories: 520,
  },
  {
    id: 4,
    title: "Vegan Buddha Bowl",
    description: "Nutritious bowl with roasted vegetables",
    image: "/recipe4.jpg",
    cookTime: "25 mins",
    category: "Lunch",
    author: "Chef Sarah",
    difficulty: "Easy",
    calories: 340,
  },
  {
    id: 5,
    title: "Chocolate Lava Cake",
    description: "Decadent dessert with molten center",
    image: "/recipe5.jpg",
    cookTime: "20 mins",
    category: "Desserts",
    author: "Chef Michael",
    difficulty: "Hard",
    calories: 580,
  },
  {
    id: 6,
    title: "Asian Stir-Fry Noodles",
    description: "Quick and flavorful vegetarian noodles",
    image: "/recipe6.jpg",
    cookTime: "15 mins",
    category: "Dinner",
    author: "Chef Lisa",
    difficulty: "Easy",
    calories: 420,
  },
];

export function RecipeGrid() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          {...recipe}
          isFavorite={favorites.includes(recipe.id)}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}
