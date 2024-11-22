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
import { MultiSelect } from "@/components/ui/multi-select";
import ImageUpload from "../ImageUpload";

const frameworksList = [
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "ember", label: "Ember" },
];

export default function BasicDetails() {
  const { register, setValue, watch } = useFormContext();
  const difficulty = watch("difficulty");

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
        <div className="space-y-2 ">
          <Label htmlFor="categories">Categories</Label>
          <MultiSelect
            options={frameworksList}
            onValueChange={(values) => setValue("categories", values)}
            value={watch("categories")}
            placeholder="Select categories"
            variant="inverted"
            maxCount={3}
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
            <Select
              onValueChange={(value) => setValue("difficulty", value)}
              value={difficulty}
            >
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
