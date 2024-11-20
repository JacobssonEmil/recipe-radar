"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import BasicDetails from "./upload-steps/BasicDetails";
import Ingredients from "./upload-steps/Ingredients";
import Instructions from "./upload-steps/Instructions";
import Preview from "./upload-steps/Preview";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  cookingTime: z.string().optional(),
  servings: z.string().optional(),
  difficulty: z.string().optional(),
  categories: z.array(z.string()).optional(),
  ingredients: z.array(
    z.object({
      amount: z.string().optional(),
      unit: z.string().optional(),
      item: z.string().min(1, "Ingredient item is required"),
    })
  ),
  instructions: z.array(
    z.object({
      step: z.string().min(1, "Step description is required"),
    })
  ),
  nutrition: z
    .object({
      calories: z.string().optional(),
      protein: z.string().optional(),
      carbs: z.string().optional(),
      fat: z.string().optional(),
    })
    .optional(),
});

const steps = [
  { id: "basic", title: "Basic Details" },
  { id: "ingredients", title: "Ingredients" },
  { id: "instructions", title: "Instructions" },
  { id: "preview", title: "Preview" },
];

export default function UploadForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      cookingTime: "",
      servings: "",
      difficulty: "",
      categories: [],
      ingredients: [{ amount: "", unit: "", item: "" }],
      instructions: [{ step: "" }],
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <div className="space-y-8">
      <nav aria-label="Progress">
        <ol
          role="list"
          className="flex items-center justify-center space-x-5 mb-8"
        >
          {steps.map((step, index) => (
            <li key={step.id} className="flex items-center">
              <button
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  index <= currentStep
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
                onClick={() => setCurrentStep(index)}
              >
                {index + 1}
              </button>
              {index < steps.length - 1 && (
                <div className="ml-5 h-0.5 w-16 bg-muted" />
              )}
            </li>
          ))}
        </ol>
      </nav>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {currentStep === 0 && <BasicDetails />}
          {currentStep === 1 && <Ingredients />}
          {currentStep === 2 && <Instructions />}
          {currentStep === 3 && <Preview />}

          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
              disabled={currentStep === 0}
            >
              Previous
            </Button>

            {currentStep === steps.length - 1 ? (
              <Button type="submit">Publish Recipe</Button>
            ) : (
              <Button
                type="button"
                onClick={() =>
                  setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))
                }
              >
                Next
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
