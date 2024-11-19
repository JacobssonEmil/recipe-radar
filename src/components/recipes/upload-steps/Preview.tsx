"use client";

import { useFormContext } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { Clock, Users, ChefHat } from "lucide-react";
interface Ingredient {
  amount: number | string;
  unit: string;
  item: string;
}

interface Instruction {
  step: string;
}

interface Nutrition {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

interface FormData {
  title: string;
  description: string;
  cookingTime: number;
  servings: number;
  difficulty: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
  nutrition: Nutrition;
}

export default function Preview() {
  const { watch } = useFormContext<FormData>();
  const formData = watch();

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">{formData.title}</h2>
        <p className="text-muted-foreground mb-6">{formData.description}</p>

        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <span>{formData.cookingTime} mins</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-muted-foreground" />
            <span>{formData.servings} servings</span>
          </div>
          <div className="flex items-center gap-2">
            <ChefHat className="h-5 w-5 text-muted-foreground" />
            <span>{formData.difficulty}</span>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Ingredients</h3>
            <ul className="space-y-2">
              {formData.ingredients.map((ing, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-24">
                    {ing.amount} {ing.unit}
                  </span>
                  <span>{ing.item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Instructions</h3>
            <ol className="space-y-4 list-decimal list-inside">
              {formData.instructions.map((inst, index) => (
                <li key={index} className="pl-2">
                  {inst.step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Card>
    </div>
  );
}
