import { Button } from "@/components/ui/button";

import { ChefHat, Search, Utensils, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative container mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Discover & Share <br /> Delicious Recipes
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Join our community of food enthusiasts. Browse thousands of recipes,
            share your culinary creations, and find your next favorite dish.
          </p>
          {/** Larger Buttons Visible on SM and Above */}
          <div className="hidden sm:flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Browse Recipes
            </Button>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Share Recipe
            </Button>
          </div>

          {/** Smaller Buttons Visible on SM and Below */}
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
              <h3 className="text-lg font-semibold mb-2">Easy to Find</h3>
              <p className="text-muted-foreground">
                Search by ingredients, cuisine, or dietary preferences
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ChefHat className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Recipes</h3>
              <p className="text-muted-foreground">
                Curated by professional chefs and home cooks
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Save Favorites</h3>
              <p className="text-muted-foreground">
                Build your personal cookbook with favorite recipes
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Utensils className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Share & Connect</h3>
              <p className="text-muted-foreground">
                Join a community of food enthusiasts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              {
                name: "Breakfast",
                image:
                  "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&auto=format&fit=crop&q=60",
              },
              {
                name: "Lunch",
                image:
                  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop&q=60",
              },
              {
                name: "Dinner",
                image:
                  "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&auto=format&fit=crop&q=60",
              },
              {
                name: "Desserts",
                image:
                  "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&auto=format&fit=crop&q=60",
              },
              {
                name: "Vegetarian",
                image:
                  "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop&q=60",
              },
              {
                name: "Quick & Easy",
                image:
                  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&auto=format&fit=crop&q=60",
              },
            ].map((category) => (
              <div
                key={category.name}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10" />
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <h3 className="text-white font-semibold text-lg">
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
            <h2 className="text-3xl font-bold">Featured Recipes</h2>
            <Button variant="outline">View All Recipes</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Classic Eggs Benedict",
                image:
                  "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&auto=format&fit=crop&q=60",
                author: "Chef Maria",
                time: "30 mins",
                difficulty: "Medium",
              },
              {
                title: "Mediterranean Quinoa Bowl",
                image:
                  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=60",
                author: "Chef Alex",
                time: "20 mins",
                difficulty: "Easy",
              },
              {
                title: "Grilled Salmon",
                image:
                  "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop&q=60",
                author: "Chef John",
                time: "25 mins",
                difficulty: "Medium",
              },
            ].map((recipe) => (
              <div key={recipe.title} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">{recipe.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Cooking?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of food enthusiasts who are already sharing and
            discovering amazing recipes.
          </p>
          <Button size="lg" variant="secondary">
            Create Account
          </Button>
        </div>
      </section>
    </div>
  );
}
