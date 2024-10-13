import { Card, CardContent } from "@/components/ui/card";
import { Clock, Heart, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Recipe = {
  name: string;
  image: string;
  likes: number;
  rating: number;
  description: string;
  cookingTime: string;
  calories: number;
};

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card
      key={recipe.name}
      className="overflow-hidden shadow-lg rounded-lg max-w-80"
    >
      <Link href={`/recipes/${recipe.name.toLowerCase().replace(/\s+/g, "-")}`}>
        <div className="relative w-full h-48">
          <Image
            src={recipe.image}
            alt={recipe.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <Link
          href={`/recipes/${recipe.name.toLowerCase().replace(/\s+/g, "-")}`}
        >
          <h4 className="font-semibold text-xl">{recipe.name}</h4>
        </Link>
        <p className="text-sm line-clamp-2 my-2">{recipe.description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {recipe.cookingTime}
          </div>
          <div>{recipe.calories} cal</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span>{recipe.rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center">
            <Heart className="w-4 h-4 text-red-500 mr-1" />
            <span>{recipe.likes}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
