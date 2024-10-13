"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./ui/toggle-mode";
import Link from "next/link";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { Button } from "./ui/button";

export default function Nav() {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch() {
    if (searchQuery.trim()) {
      alert(`You searched for: ${searchQuery}`);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <nav className="py-4 shadow-md dark:shadow-none dark:border-bottom dark:border">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div>
          <Link href="/">RecipeRadar</Link>
        </div>

        <div className="flex items-center space-x-6">
          <div className="hidden sm:block relative">
            <FaSearch
              onClick={handleSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground cursor-pointer"
            />
            <Input
              type="text"
              placeholder="Search recipes..."
              className="w-56"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <p className="cursor-pointer relative inline-block before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
            Home
          </p>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <p className="relative inline-block flex items-center space-x-1 cursor-pointer before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
                Categories{" "}
                <span className="ml-1 text-muted-foreground">
                  <FaChevronDown />
                </span>
              </p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Browse Categories</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                Popular Recipes
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Quick & Easy Dinner
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Family favorites
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Low-Calorie Meals
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Vegetarian
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <p className="cursor-pointer relative inline-block before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
            My Recipes
          </p>

          <ModeToggle />

          <Link
            href={"/login"}
            className="cursor-pointer relative inline-block before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
