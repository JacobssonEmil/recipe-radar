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
                        <Clock className="mr-1 md:mr-2" />
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

      <div className="sm:hidden flex flex-col md:flex-row items-center bg-muted sm:p-8 p-2 rounded-3xl ">
        <div className="md:w-1/2 p-4">
          <Badge variant={"default"} className="py-1">
            <FaFireAlt color="orange" className="mr-1" />
            Hot Recipes
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mt-4">
            {recipes[0].title}
          </h1>
          <p className="text-muted-foreground mt-2">{recipes[0].description}</p>
          <div className="flex items-center mt-4 space-x-2">
            <div className="flex items-center text-muted-foreground">
              <Clock className="mr-2" />
              <span>{recipes[0].time}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <span>•</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <span>{recipes[0].calories}</span>
            </div>
          </div>
          <div className="md:flex items-center mt-12">
            <div className="flex flex-row">
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
                <span className="text-muted-foreground text-sm">
                  {recipes[0].author}
                </span>
                <span className="text-muted-foreground text-sm">
                  {recipes[0].date}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
