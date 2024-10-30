"use client";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { JSX, SVGProps, useEffect, useState } from "react";
import { ChefHat, Moon, Sun } from "lucide-react";

export default function Component() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 border-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link
            href="#"
            className="flex items-center gap-2 mb-6"
            prefetch={false}
          >
            <ChefHat className="h-6 w-6" />
            <span className="font-semibold">Recipe Radar</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Browse Recipes
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Categories
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Favorites
            </Link>
            <Link
              href="/upload-recipe"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Upload Recipe
            </Link>
            <div className="border-t pt-4 mt-4">
              <Link href="#" prefetch={false}>
                <Button className="w-full mb-2">Sign In</Button>
              </Link>
              <Link href="#" prefetch={false}>
                <Button variant="outline" className="w-full">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <Link
        href="#"
        className="mr-6 hidden lg:flex items-center gap-2"
        prefetch={false}
      >
        <ChefHat className="h-6 w-6" />
        <span className="font-semibold">Recipe Radar</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        <Link
          href="#"
          className="group inline-flex h-9 items-center px-4 text-sm font-medium"
          prefetch={false}
        >
          <p className="cursor-pointer relative inline-block before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
            Browse Recipes
          </p>
        </Link>
        <Link
          href="#"
          className="group inline-flex h-9 items-center px-4 text-sm font-medium"
          prefetch={false}
        >
          <p className="cursor-pointer relative inline-block before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
            Categories
          </p>
        </Link>
        <Link
          href="#"
          className="group inline-flex h-9 items-center px-4 text-sm font-medium"
          prefetch={false}
        >
          <p className="cursor-pointer relative inline-block before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
            Favorites
          </p>
        </Link>
        <Link
          href="/upload-recipe"
          className="group inline-flex h-9 items-center px-4 text-sm font-medium"
          prefetch={false}
        >
          <p className="cursor-pointer relative inline-block before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
            Upload Recipe
          </p>
        </Link>
        <div className="flex items-center gap-2 ml-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="mr-2"
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle dark mode</span>
          </Button>
          <Link href="#" prefetch={false}>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href="#" prefetch={false}>
            <Button size="sm">Register</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
