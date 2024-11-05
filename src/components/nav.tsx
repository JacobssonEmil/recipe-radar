"use client";

import * as React from "react";
import Link from "next/link";
import { Utensils, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { ModeToggle } from "./ui/toggle-mode";

const categories = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Desserts",
  "Vegetarian",
  "Vegan",
  "Gluten-Free",
  "Quick & Easy",
  "Appetizers",
  "Snacks",
  "Soups",
  "Salads",
  "Main Dishes",
  "Side Dishes",
  "Pasta",
  "Pizza",
  "Sandwiches",
  "Burgers",
  "Wraps",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="border-b">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Utensils />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:block lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center">
            <div className="flex items-baseline space-x-4">
              <Link
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/upload-recipe"
                className="px-3 py-2 rounded-md text-sm font-medium"
              >
                Upload
              </Link>
              <Link
                href="/my-recipes"
                className="px-3 py-2 rounded-md text-sm font-medium"
              >
                My Recipes
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <a className="hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium">
                    Categories
                  </a>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-screen left-0 mt-2">
                  <div className="grid grid-cols-4 lg:grid-cols-5 gap-4 p-4">
                    {categories.map((category) => (
                      <DropdownMenuItem key={category} asChild>
                        <Link href={`/category/${category.toLowerCase()}`}>
                          {category}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                href="/browse"
                className="px-3 py-2 rounded-md text-sm font-medium"
              >
                Browse
              </Link>
            </div>
          </div>

          {/* Sign-in Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Button variant="outline" size="sm">
              Sign in
            </Button>
            <Button size="sm">Get Started</Button>
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  <Link
                    href="/"
                    className="px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/upload-recipe"
                    className="px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Upload
                  </Link>
                  <Link
                    href="/my-recipes"
                    className="px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    My Recipes
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <a className="hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium">
                        Categories
                      </a>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full">
                      {categories.map((category) => (
                        <DropdownMenuItem key={category} asChild>
                          <Link
                            href={`/category/${category.toLowerCase()}`}
                            onClick={() => setIsOpen(false)}
                          >
                            {category}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Link
                    href="/browse"
                    className="px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Browse
                  </Link>
                  <Button
                    variant="outline"
                    className="justify-start"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign in
                  </Button>
                  <Button
                    className="justify-start"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
