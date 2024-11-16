"use client";

import { useState } from "react";
import { CameraIcon } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function ImageUpload() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="relative aspect-[16/9] overflow-hidden">
      {preview ? (
        <Image
          src={preview}
          alt="Recipe preview"
          fill
          className="object-cover"
        />
      ) : (
        <label
          htmlFor="image-upload"
          className="flex flex-col items-center justify-center w-full h-full bg-muted cursor-pointer"
        >
          <CameraIcon className="h-12 w-12 text-muted-foreground mb-2" />
          <span className="text-muted-foreground">Upload Recipe Image</span>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
      )}
    </Card>
  );
}