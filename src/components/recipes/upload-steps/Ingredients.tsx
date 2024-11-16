"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Minus } from "lucide-react";

export default function Ingredients() {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-12 gap-4 mb-2">
        <Label className="col-span-3">Amount</Label>
        <Label className="col-span-3">Unit</Label>
        <Label className="col-span-6">Ingredient</Label>
      </div>

      {fields.map((field, index) => (
        <div key={field.id} className="grid grid-cols-12 gap-4 items-start">
          <Input
            className="col-span-3"
            placeholder="1"
            {...register(`ingredients.${index}.amount`)}
          />
          <Select>
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder="Unit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cup">Cup</SelectItem>
              <SelectItem value="tbsp">Tablespoon</SelectItem>
              <SelectItem value="tsp">Teaspoon</SelectItem>
              <SelectItem value="g">Grams</SelectItem>
              <SelectItem value="oz">Ounces</SelectItem>
            </SelectContent>
          </Select>
          <div className="col-span-5">
            <Input
              placeholder="Ingredient name"
              {...register(`ingredients.${index}.item`)}
            />
          </div>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="col-span-1"
            onClick={() => remove(index)}
          >
            <Minus className="h-4 w-4" />
          </Button>
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={() => append({ amount: "", unit: "", item: "" })}
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Ingredient
      </Button>
    </div>
  );
}