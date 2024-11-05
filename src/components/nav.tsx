"use client";

import * as React from "react";
import Link from "next/link";
import { Utensils, Search, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  return (
    <nav className="bg-background border-b">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Utensils className="h-8 w-8 text-primary" />
            </Link>
            <div className="hidden lg:block ml-10 items-baseline space-x-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/upload-recipe"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Upload
              </Link>
              <Link
                href="/my-recipes"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                My Recipes
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <a className="hover:cursor-pointer text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                    Categories
                  </a>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-screen left-0 mt-2 ">
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
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Browse
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="ml-4 flex items-center lg:ml-6">
              <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search recipes</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Search Recipes</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Input
                        id="search"
                        placeholder="Search recipes..."
                        className="col-span-4"
                      />
                    </div>
                  </div>
                  <Button type="submit">Search</Button>
                </DialogContent>
              </Dialog>
              <Button variant="outline" className="ml-4" size={"sm"}>
                Sign in
              </Button>
              <Button className="ml-4" size={"sm"}>
                Sign up
              </Button>
            </div>
          </div>
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
                    className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/upload-recipe"
                    className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Upload
                  </Link>
                  <Link
                    href="/my-recipes"
                    className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    My Recipes
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <a className="hover:cursor-pointer text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
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
                    className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Browse
                  </Link>
                  <Button
                    variant="ghost"
                    className="justify-start px-3 py-2 text-sm font-medium"
                    onClick={() => {
                      setIsOpen(false);
                      setIsSearchOpen(true);
                    }}
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Search
                  </Button>
                  <Button
                    variant="outline"
                    className="justify-start"
                    onClick={() => setIsOpen(false)}
                    size={"sm"}
                  >
                    Sign in
                  </Button>
                  <Button
                    className="justify-start"
                    onClick={() => setIsOpen(false)}
                    size={"sm"}
                  >
                    Sign up
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
