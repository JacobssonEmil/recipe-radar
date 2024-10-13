import Header from "@/components/home/header";
import RecipeCard from "@/components/recipe-card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const recipe1 = {
  name: "Baked Ravioli Casserole",
  image: "/recipe1.jpg",
  likes: 1234,
  rating: 4.5,
  description: "Creamy avocado on crispy sourdough bread.",
  cookingTime: "10 min",
  calories: 280,
};

export default function Home() {
  return (
    <>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="flex flex-col gap-12 mt-12 md:mt-24">
          {/** Popular Recipes */}
          <div>
            <div className=" flex flex-row justify-between items-center">
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

            <div className="flex flex-row justify-between gap-6 mt-6 ">
              <RecipeCard recipe={recipe1} />
              <RecipeCard recipe={recipe1} />
              <RecipeCard recipe={recipe1} />
              <RecipeCard recipe={recipe1} />
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
            <div className="flex flex-row justify-between gap-6 mt-6 ">
              <RecipeCard recipe={recipe1} />
              <RecipeCard recipe={recipe1} />
              <RecipeCard recipe={recipe1} />
              <RecipeCard recipe={recipe1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
