import {
  Clock,
  Users,
  ChefHat,
  Printer,
  Share2,
  BookmarkPlus,
  Star,
} from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RecipeDetails() {
  return (
    <main className="container mx-auto px-4 py-20 lg:py-52 max-w-7xl">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
          <Image
            src="/recipe7.jpg"
            alt="Homemade Classic Margherita Pizza"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <div className="flex flex-col items-start mb-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                Homemade Classic Margherita Pizza
              </h1>
            </div>

            <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-6">
              A classic Italian pizza with fresh mozzarella, tomatoes, and basil
              on a perfectly crispy crust.
            </p>

            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm md:text-base">45 mins</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm md:text-base">4 servings</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm md:text-base">Intermediate</span>
              </div>
            </div>

            <div className="flex gap-2 mb-6">
              <Badge className="text-xs md:text-sm">Italian</Badge>
              <Badge className="text-xs md:text-sm">Pizza</Badge>
              <Badge className="text-xs md:text-sm">Vegetarian</Badge>
            </div>
            <div className="flex gap-2 mb-6">
              <Button variant="ghost" size="icon">
                <Printer className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <BookmarkPlus className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < 4
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm md:text-base text-muted-foreground">
                (128 reviews)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80" />
              <AvatarFallback>MR</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-base md:text-lg font-medium">Maria Rossi</p>
              <p className="text-sm md:text-base text-muted-foreground">
                Professional Chef
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Recipe Content */}
      <Tabs defaultValue="ingredients" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
          <TabsTrigger value="instructions">Instructions</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
        </TabsList>

        <TabsContent value="ingredients">
          <Card className="p-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Ingredients
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">
                  For the Pizza Dough:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-24 text-sm md:text-base">3½ cups</span>
                    <span className="text-sm md:text-base">
                      00 flour or bread flour
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-24 text-sm md:text-base">1 tsp</span>
                    <span className="text-sm md:text-base">sugar</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-24 text-sm md:text-base">2 tsp</span>
                    <span className="text-sm md:text-base">salt</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-24 text-sm md:text-base">1 tsp</span>
                    <span className="text-sm md:text-base">
                      active dry yeast
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-24 text-sm md:text-base">1½ cups</span>
                    <span className="text-sm md:text-base">warm water</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">
                  For the Toppings:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-24 text-sm md:text-base">1 can</span>
                    <span className="text-sm md:text-base">
                      San Marzano tomatoes
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-24 text-sm md:text-base">16 oz</span>
                    <span className="text-sm md:text-base">
                      fresh mozzarella
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-24 text-sm md:text-base">1 bunch</span>
                    <span className="text-sm md:text-base">
                      fresh basil leaves
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-24 text-sm md:text-base">2 tbsp</span>
                    <span className="text-sm md:text-base">
                      extra virgin olive oil
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-24 text-sm md:text-base">to taste</span>
                    <span className="text-sm md:text-base">
                      salt and pepper
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="instructions">
          <Card className="p-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Instructions
            </h2>
            <ol className="space-y-4 list-decimal list-inside">
              <li className="pl-2 text-sm md:text-base">
                In a large bowl, combine flour, sugar, salt, and yeast.
              </li>
              <li className="pl-2 text-sm md:text-base">
                Add warm water and mix until a shaggy dough forms.
              </li>
              <li className="pl-2 text-sm md:text-base">
                Knead the dough for 10-15 minutes until smooth and elastic.
              </li>
              <li className="pl-2 text-sm md:text-base">
                Place in a greased bowl, cover, and let rise for 1-2 hours.
              </li>
              <li className="pl-2 text-sm md:text-base">
                Preheat your oven to 500°F (260°C) with a pizza stone inside.
              </li>
              <li className="pl-2 text-sm md:text-base">
                Divide dough into 2 balls and shape into 12-inch circles.
              </li>
              <li className="pl-2 text-sm md:text-base">
                Top with crushed tomatoes, torn mozzarella, and olive oil.
              </li>
              <li className="pl-2 text-sm md:text-base">
                Bake for 12-15 minutes until crust is golden and cheese is
                bubbly.
              </li>
              <li className="pl-2 text-sm md:text-base">
                Remove from oven, top with fresh basil leaves.
              </li>
              <li className="pl-2 text-sm md:text-base">
                Let cool slightly before slicing and serving.
              </li>
            </ol>
          </Card>
        </TabsContent>

        <TabsContent value="nutrition">
          <Card className="p-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Nutrition Information
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-muted rounded-lg text-center">
                <p className="text-xl md:text-2xl font-bold">286</p>
                <p className="text-sm md:text-base text-muted-foreground">
                  Calories
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg text-center">
                <p className="text-xl md:text-2xl font-bold">12g</p>
                <p className="text-sm md:text-base text-muted-foreground">
                  Protein
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg text-center">
                <p className="text-xl md:text-2xl font-bold">8g</p>
                <p className="text-sm md:text-base text-muted-foreground">
                  Fat
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg text-center">
                <p className="text-xl md:text-2xl font-bold">42g</p>
                <p className="text-sm md:text-base text-muted-foreground">
                  Carbs
                </p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
