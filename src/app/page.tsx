import { Button } from "@/components/ui/button";
import { ChefHat, Search, Utensils, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-40 px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative container mx-auto text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Discover & Share <br /> Delicious Recipes
          </h1>
          <p className="text-lg sm:text-xl md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Join our community of food enthusiasts. Browse thousands of recipes,
            share your culinary creations, and find your next favorite dish.
          </p>
          <div className="hidden sm:flex gap-4 justify-center">
            <Link href={"/recipes"}>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100"
              >
                Browse Recipes
              </Button>
            </Link>
            <Link href={"/upload"}>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100"
              >
                Share Recipe
              </Button>
            </Link>
          </div>

          <div className="flex sm:hidden gap-4 justify-center">
            <Button size="sm" className="bg-white text-black hover:bg-gray-100">
              Browse Recipes
            </Button>
            <Button size="sm" className="bg-white text-black hover:bg-gray-100">
              Share Recipe
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-md sm:text-lg font-semibold mb-2">
                Easy to Find
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Search by ingredients, cuisine, or dietary preferences
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ChefHat className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-md sm:text-lg font-semibold mb-2">
                Expert Recipes
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Curated by professional chefs and home cooks
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-md sm:text-lg font-semibold mb-2">
                Save Favorites
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Build your personal cookbook with favorite recipes
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Utensils className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-md sm:text-lg font-semibold mb-2">
                Share & Connect
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Join a community of food enthusiasts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
            Popular Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Breakfast", image: "/breakfast.jpg" },
              { name: "Lunch", image: "/lunch.jpg" },
              { name: "Dinner", image: "/dinner.jpg" },
              { name: "Desserts", image: "/dessert.jpg" },
              { name: "Vegetarian", image: "/vegetarian.jpg" },
              { name: "Quick & Easy", image: "/quick-and-easy.jpg" },
            ].map((category) => (
              <div
                key={category.name}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10" />
                <Image
                  src={category.image}
                  alt={category.name}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <h3 className="text-white font-semibold text-md sm:text-lg">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 bg-muted/50 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Featured Recipes</h2>
            <Link href={"/recipes"}>
              {" "}
              <Button variant="outline">View All Recipes</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Classic Eggs Benedict",
                image: "/recipe1.jpg",
                author: "Chef Maria",
                time: "30 mins",
                difficulty: "Medium",
              },
              {
                title: "Mediterranean Quinoa Bowl",
                image: "/recipe6.jpg",
                author: "Chef Alex",
                time: "20 mins",
                difficulty: "Easy",
              },
              {
                title: "Grilled Salmon",
                image: "/recipe4.jpg",
                author: "Chef John",
                time: "25 mins",
                difficulty: "Medium",
              },
            ].map((recipe) => (
              <div key={recipe.title} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    layout="fill"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-md sm:text-lg mb-2">
                  {recipe.title}
                </h3>
                <div className="flex items-center gap-4 text-sm sm:text-base text-muted-foreground">
                  <span>{recipe.author}</span>
                  <span>•</span>
                  <span>{recipe.time}</span>
                  <span>•</span>
                  <span>{recipe.difficulty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground dark:bg-secondary dark:text-secondary-foreground px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Cooking?
          </h2>
          <p className="text-md sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of food enthusiasts who are already sharing and
            discovering amazing recipes.
          </p>
          <Link href={"/sign-up"}>
            <Button
              size="lg"
              variant="default"
              className="bg-white text-black hover:bg-gray-100"
            >
              Create Account
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
