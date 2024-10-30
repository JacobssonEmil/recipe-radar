import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "../ui/badge";
import { FaFireAlt } from "react-icons/fa";
import { Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import Link from "next/link";

const recipes = [
  {
    title: "Spicy Delicious Chicken Wings",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum hic enim recusandae, aliquid cupiditate quia ut quibusdam, id eius soluta fugiat.",
    time: "30 Minutes",
    calories: "450 Calories",
    author: "John Smith",
    date: "15 March 2024",
    image: "/recipe3.jpg",
  },
  {
    title: "Fresh Avocado Salad",
    description:
      "Enjoy this refreshing salad with a mix of avocado, lime, and fresh herbs for a zesty, healthy option.",
    time: "15 Minutes",
    calories: "200 Calories",
    author: "Jane Doe",
    date: "10 April 2024",
    image: "/recipe2.jpg",
  },
];

export default function Header() {
  return (
    <>
      {/** SM AND ABOVE VIEW */}
      <Carousel className="hidden sm:block">
        <CarouselContent>
          {recipes.map((recipe, index) => (
            <CarouselItem key={index}>
              <div
                className="flex flex-row items-center rounded-3xl h-full justify-between backdrop-blur-lg bg-cover bg-center relative "
                style={{
                  backgroundImage: `url('${recipe.image}')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/5 to-transparent bg-opacity-40 rounded-2xl"></div>
                <div className="md:w-1/2 w-full p-6 md:p-8 h-full flex flex-col justify-between relative z-10">
                  <div>
                    <Badge className="py-1 text-white bg-green-700 bg-opacity-90 border">
                      <FaFireAlt color="orange" className="mr-1" />
                      Hot Recipes
                    </Badge>
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-6 md:mt-8 text-white drop-shadow-md">
                      {recipe.title}
                    </h1>
                    <p className="text-white mt-6 md:mt-8 text-sm md:text-base lg:text-lg drop-shadow-md">
                      {recipe.description}
                    </p>
                    <div className="flex items-center mt-6 md:mt-8 space-x-2 text-xs md:text-sm lg:text-base text-white drop-shadow-md">
                      <div className="flex items-center">
                        <Clock className="mr-1 md:mr-2" size={18} />
                        {recipe.time}
                      </div>
                      <div className="flex items-center">
                        <span>•</span>
                      </div>
                      <div className="flex items-center">{recipe.calories}</div>
                    </div>
                  </div>
                  <div className="flex items-center mt-12 md:mt-16">
                    <div className="flex flex-row items-center">
                      <Avatar className="mr-2">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>
                          {recipe.author
                            .split(" ")
                            .map((word) => word[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-white text-xs md:text-sm drop-shadow-md">
                          {recipe.author}
                        </span>
                        <span className="text-white text-xs md:text-sm drop-shadow-md">
                          {recipe.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="z-20 ml-auto mr-4 mt-auto mb-4 text-white bg-black hover:bg-black border border-white">
                  View Recipe
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/** MOBILE VIEW */}
      <Link href="/">
        <div
          className="sm:hidden flex flex-col items-center text-white rounded-3xl backdrop-blur-lg relative cursor-pointer"
          style={{
            backgroundImage: `url('${recipes[0].image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent bg-opacity-40 rounded-2xl"></div>

          <div className="p-4 rounded-3xl w-full flex flex-col items-start relative z-10">
            <Badge className="py-1 text-white bg-green-700 bg-opacity-90 border  mb-4">
              <FaFireAlt color="orange" className="mr-1" />
              Hot Recipes
            </Badge>
            <h1 className="text-3xl font-bold mb-2 drop-shadow-md">
              {recipes[0].title}
            </h1>
            <p className="text-sm mb-4 drop-shadow-md">
              {recipes[0].description}
            </p>
            <div className="flex items-center space-x-2 mb-4 text-xs drop-shadow-md">
              <div className="flex items-center">
                <Clock className="mr-1" />
                <span>{recipes[0].time}</span>
              </div>
              <span>•</span>
              <div className="flex items-center">
                <span>{recipes[0].calories}</span>
              </div>
            </div>
            <div className="flex items-center">
              <Avatar className="mr-2">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>
                  {recipes[0].author
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-xs drop-shadow-md">
                  {recipes[0].author}
                </span>
                <span className="text-xs drop-shadow-md">
                  {recipes[0].date}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
