"use client";

import { useState, useEffect, useRef } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaRegUser } from "react-icons/fa";
import { ModeToggle } from "./ui/toggle-mode";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const catMenu = useRef(null);
  const categories = [
    "Popular Recipes",
    "Quick & Easy Dinner",
    "Family Favorites",
    "Low-Calorie Meals",
    "Vegetarian",
    "Vegan Delights",
    "Gluten-Free Options",
    "One-Pot Meals",
    "Breakfast Favorites",
    "Comfort Food Classics",
    "Healthy Snacks",
    "Desserts & Sweets",
    "Grilled Specialties",
    "International Cuisine",
    "Holiday Recipes",
  ];

  return (
    <nav ref={catMenu} className="absolute top-0 left-0 w-full z-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">Recipe Radar</Link>
          </div>

          {/* Large Screen */}
          <div className="hidden sm:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <p className="cursor-pointer relative inline-block before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
                Home
              </p>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <p className="relative flex items-center space-x-1 cursor-pointer before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
                  Categories{" "}
                </p>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-primary-foreground">
                <DropdownMenuLabel>Select a category</DropdownMenuLabel>
                <ScrollArea className="h-80 w-80">
                  <div className="p-4">
                    {categories.map((category, index) => (
                      <div key={index}>
                        <div
                          className="text-sm cursor-pointer relative inline-block before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full"
                          onClick={() => alert(`Clicked on ${category}`)}
                        >
                          {category}
                        </div>
                        {index < categories.length - 1 && (
                          <Separator className="my-2" />
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/">
              <p className="cursor-pointer relative inline-block before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
                My Recipes
              </p>
            </Link>
          </div>

          {/* Sign in and Toggle */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href={"/login"}
              className="flex cursor-pointer relative before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full"
            >
              <FaRegUser className="mt-1 mr-1" />
              Sign In
            </Link>

            <ModeToggle />
          </div>

          {/* Hamburger Icon */}
          <div className="-mr-2 flex sm:hidden items-center">
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden px-4 bg-background border-b-4 pb-4">
          <div className="flex flex-col space-y-4">
            <Link href="/">
              <p className="relative flex items-center cursor-pointer">Home</p>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <p className="relative flex items-center cursor-pointer">
                  Categories{" "}
                </p>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="border">
                <ScrollArea className="h-80 w-80">
                  <div className="p-4">
                    {categories.map((category, index) => (
                      <div key={index}>
                        <div
                          className="text-sm cursor-pointer relative inline-block before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent the outside click handler
                            alert(`Clicked on ${category}`);
                          }}
                        >
                          {category}
                        </div>

                        {index < categories.length - 1 && (
                          <Separator className="my-2" />
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/">
              <p className="relative flex items-center space-x-2 cursor-pointer">
                My Recipes
              </p>
            </Link>
            {/* Sign In and Mode Toggle*/}
            <Link
              href="/login"
              className="relative flex items-center space-x-2 cursor-pointer"
            >
              <FaRegUser className="mr-2" />
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
