"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Users,
  ChefHat,
  Plus,
  Search,
  Heart,
  BookmarkCheck,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { RecipeGrid } from "@/components/recipe-grid";
import { RecipeCard } from "@/components/recipe-card";

export default function MyRecipes() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="container mx-auto px-4 py-20 lg:py-40 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">My Recipes</h1>
          <p className="text-muted-foreground mt-1">
            Manage and organize your recipe collection
          </p>
        </div>

        <Link href="/recipes/upload">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Recipe
          </Button>
        </Link>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search your recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <Tabs defaultValue="my-recipes" className="space-y-6">
        <TabsList>
          <TabsTrigger value="my-recipes" className="flex items-center gap-2">
            <ChefHat className="h-4 w-4" />
            My Recipes
          </TabsTrigger>
          <TabsTrigger value="favorites" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            Favorites
          </TabsTrigger>
        </TabsList>

        <TabsContent value="my-recipes">
          <RecipeGrid></RecipeGrid>
        </TabsContent>

        <TabsContent value="favorites">
          <RecipeGrid></RecipeGrid>
        </TabsContent>
      </Tabs>
    </main>
  );
}

// Sample data
const myRecipes = [
  {
    id: 1,
    title: "Homemade Margherita Pizza",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
    cookingTime: 45,
    servings: 4,
    difficulty: "Intermediate",
    rating: 4.5,
    reviews: 128,
    categories: ["Italian", "Pizza"],
  },
  {
    id: 2,
    title: "Classic Beef Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    cookingTime: 30,
    servings: 4,
    difficulty: "Easy",
    rating: 4.8,
    reviews: 95,
    categories: ["American", "Burger"],
  },
  {
    id: 3,
    title: "Chocolate Chip Cookies",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    cookingTime: 25,
    servings: 24,
    difficulty: "Easy",
    rating: 4.9,
    reviews: 156,
    categories: ["Dessert", "Baking"],
  },
];

const favoriteRecipes = [
  {
    id: 4,
    title: "Spaghetti Carbonara",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3",
    cookingTime: 20,
    servings: 2,
    difficulty: "Intermediate",
    rating: 4.7,
    reviews: 89,
    categories: ["Italian", "Pasta"],
  },
];

const savedRecipes = [
  {
    id: 5,
    title: "Greek Salad",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999",
    cookingTime: 15,
    servings: 4,
    difficulty: "Easy",
    rating: 4.3,
    reviews: 42,
    categories: ["Greek", "Salad"],
  },
];
