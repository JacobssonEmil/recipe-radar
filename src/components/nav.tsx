"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogIn, Menu, UserPlus } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/category/")) return pathname.startsWith("/category/");
    return pathname === href;
  };

  // Scroll behavior for hiding/showing navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`absolute top-0 left-0 w-full z-50 hidden lg:block  ${
          pathname === "/" ? "absolute dark" : "shadow-md shadow-secondary"
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-12">
          <div className="relative flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex gap-2">
              <h1 className="font-semibold text-primary">
                Recept <span className="text-green-600">Radar</span>
              </h1>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-baseline space-x-8">
                <Button variant={"link"} className="text-sm">
                  <Link
                    href="/"
                    className={`py-2  font-medium whitespace-nowrap  ${
                      isActiveLink("/")
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    Home
                  </Link>
                </Button>
                <Button variant={"link"} className="text-sm">
                  <Link
                    href="/recipes"
                    className={`py-2 font-medium whitespace-nowrap  ${
                      isActiveLink("/recipes")
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    Browse Recipes
                  </Link>
                </Button>

                <Button variant={"link"} className="text-sm">
                  <Link
                    href="/recipes/my-recipes"
                    className={`py-2 font-medium whitespace-nowrap  ${
                      isActiveLink("/recipes/my-recipes")
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    My Recipes
                  </Link>
                </Button>
                <Button variant={"link"} className="text-sm">
                  <Link
                    href="/recipes/upload"
                    className={`py-2 font-medium whitespace-nowrap  ${
                      isActiveLink("/recipes/upload")
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    Upload a Recipe
                  </Link>
                </Button>
              </div>
            </div>

            {/* Desktop Sign-in Buttons */}
            <SignedOut>
              <div className="flex items-center gap-2 text-primary ">
                <Button variant="link" size="sm">
                  <LogIn
                    className="mr-2
                
                
                "
                    size={18}
                  />
                  Sign in
                </Button>
                <Button variant={"link"} size="sm">
                  <UserPlus className="mr-2" size={18} />
                  Get Started
                </Button>
              </div>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 lg:hidden transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${pathname === "/" ? "dark" : ""}`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-12">
          <div className="relative flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex gap-2">
              <h1 className="font-semibold text-primary">
                Recept <span className="text-green-600">Radar</span>
              </h1>
            </Link>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="text-primary" size="icon">
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
                      href="/recipes"
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        isActiveLink("/recipes")
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      Recipes
                    </Link>

                    <Link
                      href="/recipes/upload"
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        isActiveLink("/recipes/upload")
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      Upload a Recipe
                    </Link>
                    <Link
                      href="/recipes/my-recipes"
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        isActiveLink("/recipes/my-recipes")
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      My Recipes
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
      </nav>
    </>
  );
}
