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
      <Carousel className="hidden sm:block">
        <CarouselContent>
          {recipes.map((recipe, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-row items-center rounded-3xl h-full bg-muted justify-between">
                {/* Left side with content */}
                <div className="md:w-1/2 w-full p-6 md:p-8 h-full flex flex-col justify-between">
                  <div>
                    <Badge variant={"default"} className="py-1">
                      <FaFireAlt color="orange" className="mr-1" />
                      Hot Recipes
                    </Badge>
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-6 md:mt-8">
                      {recipe.title}
                    </h1>
                    <p className="text-muted-foreground mt-6 md:mt-8 text-sm md:text-base lg:text-lg">
                      {recipe.description}
                    </p>
                    <div className="flex items-center mt-6 md:mt-8 space-x-2 text-xs md:text-sm lg:text-base">
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="mr-1 md:mr-2" size={18} />
                        {recipe.time}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <span>•</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        {recipe.calories}
                      </div>
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
                        <span className="text-muted-foreground text-xs md:text-sm">
                          {recipe.author}
                        </span>
                        <span className="text-muted-foreground text-xs md:text-sm">
                          {recipe.date}
                        </span>
                      </div>
                    </div>
                    <Button className="ml-auto text-xs md:text-sm lg:text-base">
                      View Recipe
                    </Button>
                  </div>
                </div>

                {/* Right side with background image */}
                <div
                  className="md:w-2/4 w-full h-full rounded-r-3xl"
                  style={{
                    backgroundImage: `url('${recipe.image}')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    minHeight: "inherit",
                  }}
                ></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div
        className="sm:hidden flex flex-col items-center text-white rounded-3xl backdrop-blur-lg"
        style={{
          backgroundImage: `url('${recipes[0].image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black bg-opacity-50 p-4 rounded-3xl w-full flex flex-col items-start">
          <Badge variant={"default"} className="py-1 mb-4">
            <FaFireAlt color="orange" className="mr-1" />
            Hot Recipes
          </Badge>
          <h1 className="text-3xl font-bold mb-2">{recipes[0].title}</h1>
          <p className="text-sm mb-4">{recipes[0].description}</p>
          <div className="flex items-center space-x-2 mb-4 text-xs">
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
              <span className="text-xs">{recipes[0].author}</span>
              <span className="text-xs">{recipes[0].date}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
