"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NutritionInfo() {
  const { register } = useFormContext();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="space-y-2">
        <Label htmlFor="calories">Calories</Label>
        <Input
          id="calories"
          type="number"
          placeholder="286"
          {...register("nutrition.calories")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="protein">Protein (g)</Label>
        <Input
          id="protein"
          type="number"
          placeholder="12"
          {...register("nutrition.protein")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="carbs">Carbs (g)</Label>
        <Input
          id="carbs"
          type="number"
          placeholder="42"
          {...register("nutrition.carbs")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="fat">Fat (g)</Label>
        <Input
          id="fat"
          type="number"
          placeholder="8"
          {...register("nutrition.fat")}
        />
      </div>
    </div>
  );
}
