"use client";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./ui/toggle-mode";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b border-gray-200 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div>
          <Link href="/">RecipeRadar</Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:block">
            <Input
              type="text"
              placeholder="Search for recipes..."
              className="w-64"
            />
          </div>

          <ModeToggle />

          <Avatar>
            <AvatarImage src="/" alt="Avatar" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
}
