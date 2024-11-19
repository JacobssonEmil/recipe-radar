"use client";

import UploadForm from "@/components/recipes/UploadForm";

export default function UploadRecipe() {
  return (
    <div className="">
      <main className="container mx-auto px-4 py-20 lg:py-40 max-w-4xl ">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Upload Recipe</h1>
            <p className="text-muted-foreground mt-2">
              Share your culinary masterpiece with the world
            </p>
          </div>

          <UploadForm />
        </div>
      </main>
    </div>
  );
}
