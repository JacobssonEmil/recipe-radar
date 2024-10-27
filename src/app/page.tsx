"use client";
import Header from "@/components/home/header";
import RecipeCard from "@/components/recipe-card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import CardsSwiper from "@/components/home/cards-swiper";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

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

export default function Home() {
  return (
    <>
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
