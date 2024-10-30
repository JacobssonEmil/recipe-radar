"use client";

import { useState } from "react";
import { Plus, Minus, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export default function UploadRecipe() {
  const [ingredients, setIngredients] = useState([
    { name: "", amount: "", measurement: "" },
  ]);
  const [steps, setSteps] = useState([""]);

  const addIngredient = () => {
    setIngredients([...ingredients, { name: "", amount: "", measurement: "" }]);
  };

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const updateIngredient = (
    index: number,
    field: "name" | "amount" | "measurement",
    value: string
  ) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    setIngredients(newIngredients);
  };

  const addStep = () => {
    setSteps([...steps, ""]);
  };

  const removeStep = (index: number) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  const updateStep = (index: number, value: string) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with API call
    console.log("Form submitted");
  };

  return (
    <main className="flex-grow mt-12 md:mt-12">
      <div className="max-w-4xl mx-auto py-8 px-0 sm:px-6 lg:px-8">
        <Card className="border-none shadow-none md:border-solid">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Upload a New Recipe
            </CardTitle>
            <CardDescription className="text-center">
              Share your culinary creations with the world
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Basic Information</h3>
                <div>
                  <Label htmlFor="name">Recipe Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter recipe name"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Recipe Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your recipe"
                    required
                    className="mt-1"
                  />
                </div>

                <div className="flex space-x-4">
                  <div className="flex-1">
                    <Label htmlFor="cookTime">Cooking Time</Label>
                    <Input
                      id="cookTime"
                      type="number"
                      placeholder="e.g. 30"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="calories">Calories</Label>
                    <Input
                      id="calories"
                      type="number"
                      placeholder="e.g. 500"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Ingredients</h3>
                {ingredients.map((ingredient, index) => (
                  <div key={index} className="flex space-x-2">
                    <Input
                      placeholder="Ingredient name"
                      value={ingredient.name}
                      onChange={(e) =>
                        updateIngredient(index, "name", e.target.value)
                      }
                      required
                      className="flex-grow"
                    />
                    <Input
                      placeholder="Amount"
                      value={ingredient.amount}
                      onChange={(e) =>
                        updateIngredient(index, "amount", e.target.value)
                      }
                      required
                      className="w-20"
                    />
                    <Select
                      value={ingredient.measurement}
                      onValueChange={(value) =>
                        updateIngredient(index, "measurement", value)
                      }
                    >
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="g">grams</SelectItem>
                        <SelectItem value="kg">kilograms</SelectItem>
                        <SelectItem value="ml">milliliters</SelectItem>
                        <SelectItem value="l">liters</SelectItem>
                        <SelectItem value="tsp">teaspoon</SelectItem>
                        <SelectItem value="tbsp">tablespoon</SelectItem>
                        <SelectItem value="cup">cup</SelectItem>
                        <SelectItem value="piece">piece</SelectItem>
                        <SelectItem value="unit">unit</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeIngredient(index)}
                    >
                      <Minus className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={addIngredient}
                >
                  <Plus className="h-4 w-4 mr-2" /> Add Ingredient
                </Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Instructions</h3>
                {steps.map((step, index) => (
                  <div key={index} className="flex space-x-2">
                    <Textarea
                      placeholder={`Step ${index + 1}`}
                      value={step}
                      onChange={(e) => updateStep(index, e.target.value)}
                      required
                      className="flex-grow"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeStep(index)}
                    >
                      <Minus className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={addStep}
                >
                  <Plus className="h-4 w-4 mr-2" /> Add Step
                </Button>
              </div>

              <Button type="submit" className="w-full">
                <Upload className="h-4 w-4 mr-2" /> Upload Recipe
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
