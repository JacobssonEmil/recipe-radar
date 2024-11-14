"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

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
  const pathname = usePathname();

  // Helper function to determine if a link is active
  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    } else if (href.startsWith("/category/")) {
      return pathname.startsWith("/category/");
    } else {
      return pathname === href;
    }
  };

  return (
    <nav className="">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex gap-2">
            <h1 className="font-semibold">
              Recept <span className="text-green-600">Radar</span>
            </h1>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:block lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:flex lg:items-center lg:justify-center">
            <div className="flex items-baseline space-x-4">
              <Link
                href="/"
                className={`py-2 text-sm font-medium whitespace-nowrap hover:text-primary ${
                  isActiveLink("/") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Home
              </Link>
              <Link
                href="/recipes"
                className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap truncate hover:text-primary ${
                  isActiveLink("/recipes")
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                Recipes
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <a
                    className={`hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap truncate hover:text-primary ${
                      pathname.startsWith("/category/")
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    Categories
                  </a>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-screen left-0 mt-2">
                  <div className="grid grid-cols-4 lg:grid-cols-5 gap-4 p-4">
                    {categories.map((category) => {
                      const categoryHref = `/category/${category.toLowerCase()}`;
                      const isActive = pathname === categoryHref;
                      return (
                        <DropdownMenuItem key={category} asChild>
                          <Link
                            href={categoryHref}
                            className={`${
                              isActive
                                ? "text-primary"
                                : "text-muted-foreground"
                            }`}
                          >
                            {category}
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                href="/upload-recipe"
                className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap truncate hover:text-primary ${
                  isActiveLink("/upload-recipe")
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                Upload a Recipe
              </Link>
              <Link
                href="/my-recipes"
                className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap truncate hover:text-primary ${
                  isActiveLink("/my-recipes")
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                My Recipes
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
                <div className="flex flex-col h-full justify-between">
                  <nav className="flex flex-col gap-4">
                    <Link
                      href="/"
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        isActiveLink("/")
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/upload-recipe"
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        isActiveLink("/upload-recipe")
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      Upload
                    </Link>
                    <Link
                      href="/my-recipes"
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        isActiveLink("/my-recipes")
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      My Recipes
                    </Link>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <a
                          className={`hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium ${
                            pathname.startsWith("/category/")
                              ? "text-primary"
                              : "text-muted-foreground"
                          }`}
                        >
                          Categories
                        </a>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full">
                        {categories.map((category) => {
                          const categoryHref = `/category/${category.toLowerCase()}`;
                          const isActive = pathname === categoryHref;
                          return (
                            <DropdownMenuItem key={category} asChild>
                              <Link
                                href={categoryHref}
                                className={`${
                                  isActive
                                    ? "text-primary"
                                    : "text-muted-foreground"
                                }`}
                                onClick={() => setIsOpen(false)}
                              >
                                {category}
                              </Link>
                            </DropdownMenuItem>
                          );
                        })}
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Link
                      href="/browse"
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        isActiveLink("/browse")
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      Browse
                    </Link>
                  </nav>
                  <div className="flex flex-col gap-4">
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
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
