"use client";

import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

export function RecipeFilters() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        <Separator className="mb-4" />

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="category">
            <AccordionTrigger>Category</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {["Breakfast", "Lunch", "Dinner", "Desserts", "Snacks"].map(
                  (category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={category} />
                      <Label htmlFor={category}>{category}</Label>
                    </div>
                  )
                )}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="dietary">
            <AccordionTrigger>Dietary Preferences</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free"].map(
                  (diet) => (
                    <div key={diet} className="flex items-center space-x-2">
                      <Checkbox id={diet} />
                      <Label htmlFor={diet}>{diet}</Label>
                    </div>
                  )
                )}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="difficulty">
            <AccordionTrigger>Difficulty Level</AccordionTrigger>
            <AccordionContent>
              <RadioGroup defaultValue="all">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="all" />
                  <Label htmlFor="all">All Levels</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="easy" id="easy" />
                  <Label htmlFor="easy">Easy</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="medium" />
                  <Label htmlFor="medium">Medium</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="hard" id="hard" />
                  <Label htmlFor="hard">Hard</Label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="time">
            <AccordionTrigger>Cooking Time</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <Label>Maximum cooking time (minutes)</Label>
                <Slider
                  defaultValue={[60]}
                  max={180}
                  step={15}
                  className="w-full"
                />
                <div className="text-sm text-muted-foreground">
                  Up to 60 minutes
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="calories">
            <AccordionTrigger>Calories</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <Label>Maximum calories per serving</Label>
                <Slider
                  defaultValue={[500]}
                  max={1000}
                  step={50}
                  className="w-full"
                />
                <div className="text-sm text-muted-foreground">
                  Up to 500 kcal
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
