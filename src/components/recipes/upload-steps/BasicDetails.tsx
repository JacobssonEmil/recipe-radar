"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ImageUpload from "../ImageUpload";

export default function BasicDetails() {
  const { register } = useFormContext();

  return (
    <div className="space-y-6">
      <ImageUpload />

      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Recipe Title</Label>
          <Input
            id="title"
            placeholder="Enter recipe title"
            {...register("title")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Describe your recipe"
            {...register("description")}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="cookingTime">Cooking Time (minutes)</Label>
            <Input
              id="cookingTime"
              type="number"
              placeholder="45"
              {...register("cookingTime")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="servings">Servings</Label>
            <Input
              id="servings"
              type="number"
              placeholder="4"
              {...register("servings")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="difficulty">Difficulty</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
