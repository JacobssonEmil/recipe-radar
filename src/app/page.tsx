import Header from "@/components/home/header";
import RecipeCard from "@/components/recipe-card";

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
      <div className="max-w-[1400px] mx-auto">
        <Header />
        <h1 className="text-2xl font-semibold">Popular Recipes</h1>
        <div className="flex flex-row justify-between gap-6 mt-12 ">
          <RecipeCard recipe={recipe1} />
          <RecipeCard recipe={recipe1} />
          <RecipeCard recipe={recipe1} />
          <RecipeCard recipe={recipe1} />
        </div>
      </div>
    </>
  );
}
