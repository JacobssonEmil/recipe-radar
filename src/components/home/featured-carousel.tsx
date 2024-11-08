import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "../ui/badge";
import { Clock, Utensils } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const recipes = [
  {
    title: "Spicy Delicious Chicken Wings",
    id: "0",
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
    id: "1",
    description:
      "Enjoy this refreshing salad with a mix of avocado, lime, and fresh herbs for a zesty, healthy option.",
    time: "15 Minutes",
    calories: "200 Calories",
    author: "Jane Doe",
    date: "10 April 2024",
    image: "/recipe2.jpg",
  },
];

export default function FeaturedCarousel() {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
        className=""
      >
        <CarouselContent>
          {recipes.map((recipe) => (
            <CarouselItem key={recipe.id}>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  layout="fill"
                  objectFit="cover"
                  quality={80}
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <Badge className="mb-2 bg-green-500">Hot Recipe</Badge>
                  <h3 className="text-2xl font-bold mb-2">{recipe.title}</h3>
                  <p className="mb-4">{recipe.description}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center">
                      <Clock className="mr-1" size={16} /> {recipe.time}
                    </span>
                    <span className="flex items-center">
                      <Utensils className="mr-1" size={16} /> {recipe.calories}
                    </span>
                  </div>
                  <div className="flex items-center mt-4">
                    <Avatar className="mr-2">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>
                        {recipe.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{recipe.author}</p>
                      <p className="text-xs">{recipe.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
