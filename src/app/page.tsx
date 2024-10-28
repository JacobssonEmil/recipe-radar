"use client";
import Header from "@/components/home/header";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import CardsSwiper from "@/components/home/cards-swiper";
import React, { useState, useEffect } from "react";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

// Define the type for a recipe
interface Recipe {
  id: number;
  name: string;
  description: string;
}

export default function Home() {
  // Use the Recipe type for the recipes state
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("/api/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

  return (
    <>
      <div>
        {recipes.map((recipe, index) => (
          <li key={index} className="p-4 border rounded-md shadow-sm">
            <Link href={`/recipe/${recipe.id}`}>
              <span className="text-lg font-semibold">{recipe.name}</span>
            </Link>
            <p className="text-sm text-gray-600">{recipe.description}</p>
          </li>
        ))}
      </div>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="flex flex-col gap-12 mt-12 md:mt-24">
          {/** Popular Recipes */}
          <div>
            <div className="flex flex-row justify-between items-center mb-4">
              <h1 className="text-xl md:text-2xl font-semibold">
                Popular Recipes
              </h1>
              <Link href="/" className="flex flex-row ">
                <p className="cursor-pointer relative inline-block before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
                  View More
                </p>{" "}
                <ChevronRight className="ml-1 h-4 w-4 mt-1" />
              </Link>
            </div>
            <CardsSwiper category={"Popular Recipes"} />
          </div>

          {/** Quick & Easy Dinner */}
          <div>
            <div className="flex flex-row justify-between items-center mb-4">
              <h1 className="text-xl md:text-2xl font-semibold">
                Quick & Easy Dinner
              </h1>
              <Link href="/" className="flex flex-row ">
                <p className="cursor-pointer relative inline-block before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
                  View More
                </p>{" "}
                <ChevronRight className="ml-1 h-4 w-4 mt-1" />
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <CardsSwiper category={"Quick & Easy Dinner"} />
        </div>
      </div>
    </>
  );
}
