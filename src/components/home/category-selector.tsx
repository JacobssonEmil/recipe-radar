import { Button } from "@/components/ui/button";
import {
  Utensils,
  Salad,
  Carrot,
  Drumstick,
  Fish,
  Wheat,
  Apple,
  Scale,
  Heart,
  Leaf,
  Coffee,
  Pizza,
  Sandwich,
  IceCream,
} from "lucide-react";
import { useRouter } from "next/navigation";

const categories = [
  { name: "Dinner", icon: Utensils },
  { name: "Lunch", icon: Sandwich },
  { name: "Breakfast", icon: Coffee },
  { name: "Snacks", icon: Apple },
  { name: "Desserts", icon: IceCream },
  { name: "Max 500 cal", icon: Scale },
  { name: "Vegetarian", icon: Carrot },
  { name: "Vegan", icon: Leaf },
  { name: "Gluten-Free", icon: Wheat },
  { name: "Low-Carb", icon: Pizza },
  { name: "High-Protein", icon: Drumstick },
  { name: "Heart-Healthy", icon: Heart },
  { name: "Chicken", icon: Drumstick },
  { name: "Fish", icon: Fish },
];

export default function Component() {
  const router = useRouter();

  return (
    <div className="w-full mx-auto ">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
        {categories.map((category) => (
          <Button
            key={category.name}
            variant="outline"
            className="flex flex-col items-center justify-center h-24 p-2 bg-background hover:bg-muted"
            onClick={() => {
              alert(`Selected category: ${category.name}`);
              router.push("/");
            }}
          >
            <category.icon className="h-6 w-6 mb-2" />
            <span className="text-xs font-medium text-center">
              {category.name}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
}
