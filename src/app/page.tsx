import Header from "@/components/home/header";
import RecipeCard from "@/components/recipe-card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface Recipe {
  id: string;
  name: string;
  image: string;
  likes: number;
  rating: number;
  description: string;
  cookingTime: string;
  calories: number;
  category: string;
}

async function getRecipes(): Promise<Recipe[]> {
  /**
   * TODO: Replace with with API call.
   * ? Recipes on this page can be hardcoded as they are not fetched based on user action?
   */
  return [
    {
      id: "1",
      name: "Baked Ravioli Casserole",
      image: "/recipe1.jpg",
      likes: 1234,
      rating: 4.5,
      description: "Delicious baked ravioli with a creamy sauce.",
      cookingTime: "45 min",
      calories: 450,
      category: "Popular Recipes",
    },
    {
      id: "2",
      name: "Avocado Toast",
      image: "/recipe2.jpg",
      likes: 985,
      rating: 4.8,
      description: "Creamy avocado on crispy sourdough bread.",
      cookingTime: "10 min",
      calories: 280,
      category: "Quick & Easy Dinner",
    },
    {
      id: "3",
      name: "Grilled Chicken Salad",
      image: "/recipe3.jpg",
      likes: 1120,
      rating: 4.7,
      description: "Healthy grilled chicken with fresh salad.",
      cookingTime: "20 min",
      calories: 350,
      category: "Quick & Easy Dinner",
    },
    {
      id: "4",
      name: "Vegetarian Lasagna",
      image: "/recipe3.jpg",
      likes: 567,
      rating: 4.2,
      description: "Layered lasagna with veggies and cheese.",
      cookingTime: "60 min",
      calories: 600,
      category: "Popular Recipes",
    },
    {
      id: "5",
      name: "Classic Caesar Salad",
      image: "/recipe1.jpg",
      likes: 420,
      rating: 4.6,
      description: "Crispy romaine with Caesar dressing and croutons.",
      cookingTime: "15 min",
      calories: 320,
      category: "Quick & Easy Dinner",
    },
    {
      id: "6",
      name: "Spaghetti Bolognese",
      image: "/recipe2.jpg",
      likes: 899,
      rating: 4.4,
      description: "Classic Italian pasta with meat sauce.",
      cookingTime: "30 min",
      calories: 550,
      category: "Popular Recipes",
    },
    {
      id: "7",
      name: "Quinoa Salad",
      image: "/recipe2.jpg",
      likes: 345,
      rating: 4.1,
      description: "Healthy quinoa mixed with fresh vegetables.",
      cookingTime: "25 min",
      calories: 250,
      category: "Quick & Easy Dinner",
    },
    {
      id: "8",
      name: "Eggplant Parmesan",
      image: "/recipe1.jpg",
      likes: 675,
      rating: 4.3,
      description: "Baked eggplant with marinara sauce and cheese.",
      cookingTime: "50 min",
      calories: 480,
      category: "Popular Recipes",
    },
  ];
}

export default async function Home() {
  const recipes = await getRecipes();

  // Filter recipes by category
  const popularRecipes = recipes.filter(
    (recipe) => recipe.category === "Popular Recipes"
  );
  const quickAndEasyDinner = recipes.filter(
    (recipe) => recipe.category === "Quick & Easy Dinner"
  );

  return (
    <>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="flex flex-col gap-12 mt-12 md:mt-24">
          {/** Popular Recipes */}
          <div>
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-xl md:text-2xl font-semibold">
                Popular Recipes
              </h1>
              <Link href="/" className="flex flex-row">
                <p className="cursor-pointer relative inline-block before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
                  View More
                </p>{" "}
                <ChevronRight className="ml-1 h-4 w-4 mt-1" />
              </Link>
            </div>

            <div className="flex flex-row justify-between gap-6 mt-6">
              {popularRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </div>

          {/** Quick & Easy Dinner */}
          <div>
            <div className="flex flex-row justify-between items-center">
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
            <div className="flex flex-row justify-between gap-6 mt-6">
              {quickAndEasyDinner.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
