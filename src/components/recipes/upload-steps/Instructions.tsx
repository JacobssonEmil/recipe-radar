"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Minus } from "lucide-react";

export default function Instructions() {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "instructions",
  });

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.id} className="flex gap-4">
          <div className="flex-grow">
            <div className="flex items-center gap-4 mb-2">
              <span className="font-medium">Step {index + 1}</span>
            </div>
            <Textarea
              placeholder="Describe this step..."
              {...register(`instructions.${index}.step`)}
            />
          </div>
          <Button
            type="button"
            variant="outline"
            size="icon"
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
        onClick={() => append({ step: "" })}
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Step
      </Button>
    </div>
  );
}