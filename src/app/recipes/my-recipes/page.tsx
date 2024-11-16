"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChefHat, Plus, Search, Heart } from "lucide-react";
import Link from "next/link";
import { RecipeGrid } from "@/components/recipe-grid";

export default function MyRecipes() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="container mx-auto px-4 py-20 lg:py-40 max-w-7xl">
      {/* Header */}
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

      {/* Search */}
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

      {/* Tabs with RecipeGrid */}
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
          <RecipeGrid />
        </TabsContent>

        <TabsContent value="favorites">
          <RecipeGrid />
        </TabsContent>
      </Tabs>
    </main>
  );
}
