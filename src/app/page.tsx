import { Button } from "@/components/ui/button";

import { Heart, Share2, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <header className="w-full mt-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Discover, Save, and Share{" "}
          <span className="text-primary">Delicious Recipes</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore a world of culinary delights, save your favorites, and share
          your own creations with our community of food lovers.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search recipes or ingredients"
              className="pl-8"
            />
          </div>
          <Button>Start Cooking</Button>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center space-x-8 sm:space-x-16 text-center">
          <div className="flex flex-col items-center">
            <Search className="h-6 w-6 mb-2 text-primary" />
            <h2 className="text-sm font-medium">Discover Recipes</h2>
          </div>
          <div className="flex flex-col items-center">
            <Heart className="h-6 w-6 mb-2 text-primary" />
            <h2 className="text-sm font-medium">Save Favorites</h2>
          </div>
          <div className="flex flex-col items-center">
            <Share2 className="h-6 w-6 mb-2 text-primary" />
            <h2 className="text-sm font-medium">Share Your Creations</h2>
          </div>
        </div>
      </div>
    </header>
  );
}
