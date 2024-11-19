"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Clock, Utensils, ChefHat, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    <Card className="overflow-hidden flex flex-col h-full transition-all hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white"
          onClick={() => onToggleFavorite(id)}
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-500"
            }`}
          />
        </Button>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl line-clamp-1">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow pb-2">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {cookTime}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>Cook Time</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Utensils className="h-3 w-3" />
                  {category}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>Category</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <ChefHat className="h-3 w-3" />
                  {difficulty}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>Difficulty</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Flame className="h-3 w-3" />
                  {calories} kcal
                </Badge>
              </TooltipTrigger>
              <TooltipContent>Calories</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-2  mt-auto">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage
              src={`path/to/author/image/${author}.jpg`}
              alt={author}
            />
            <AvatarFallback>{author.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">by {author}</span>
        </div>
        <Button variant="secondary" asChild>
          <Link href={`/recipes/${id}`}>View Recipe</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
