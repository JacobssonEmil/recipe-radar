import { RecipeGrid } from "@/components/recipe-grid";
import { RecipeFilters } from "@/components/recipe-filters";

export default function RecipesPage() {
  return (
    <div className="container mx-auto py-20 lg:py-40 px-4 ">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Browse Recipes</h1>
          <p className="text-muted-foreground">
            Discover delicious recipes from our community
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-20">
        <RecipeFilters />
        <RecipeGrid />
      </div>
    </div>
  );
}
