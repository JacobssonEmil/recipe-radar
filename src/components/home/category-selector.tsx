import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Component() {
  const categories = [
    "Dinner",
    "Vegetarian",
    "Under 500 Cal",
    "Chicken",
    "Italian",
    "Healthy",
    "Seafood",
    "Desserts",
    "Breakfast",
    "Lunch",
  ];

  const handleCategoryClick = (category: string) => {
    alert(`Selected category: ${category}`);
  };

  return (
    <div className="w-full mx-auto ">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            className="flex-grow sm:flex-grow-0 py-6 px-8 text-md"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </Button>
        ))}
        <Button
          variant="default"
          className="flex-grow sm:flex-grow-0 text-md py-6 px-8"
          onClick={() => alert("View All Categories")}
        >
          <span>View All Categories</span>
          <ChevronRight className="ml-2 h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
