"use client";
import Image from "next/image";
import Link from "next/link";
import { Heart, Clock, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface RecipeCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  cookTime: string;
  category: string;
  author: string;
  difficulty: string;
  calories: number;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

export function RecipeCard({
  id,
  title,
  description,
  image,
  cookTime,
  category,
  author,
  difficulty,
  calories,
  isFavorite,
  onToggleFavorite,
}: RecipeCardProps) {
  return (
    <Card key={id} className="overflow-hidden">
      <div className="relative h-48">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onToggleFavorite(id)}
          >
            <Heart
              className={`h-5 w-5 ${
                isFavorite ? "fill-current text-red-500" : ""
              }`}
            />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{cookTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Utensils className="h-4 w-4" />
            <span>{category}</span>
          </div>
        </div>
        <div className="mt-2 flex gap-2">
          <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
            {difficulty}
          </span>
          <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
            {calories} kcal
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">by {author}</span>
        <Button variant="outline" asChild>
          <Link href={`/recipes/${id}`}>View Recipe</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
