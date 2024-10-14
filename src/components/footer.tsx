import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaTwitter,
} from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary-foreground dark:bg-background mt-24 dark:border-t dark:border-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-12 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-start md:justify-items-center">
          {/* Newsletter Column */}
          <div className="space-y-4 text-left md:text-left">
            <h3 className="text-lg font-semibold text-background dark:text-foreground">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-sm text-muted-foreground ">
              Stay updated with our latest recipes and cooking tips!
            </p>
            <form className="flex space-x-2 justify-start md:justify-center ">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-56 dark:bg-foreground"
              />
              <Button
                type="submit"
                variant="secondary"
                className="bg-background text-foreground dark:bg-foreground dark:text-background"
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4 text-left md:text-left ">
            <h3 className="text-lg font-semibold text-background dark:text-foreground">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-4 text-background dark:text-foreground">
              <li>
                <Link href="/">
                  <p className="cursor-pointer relative inline-block before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
                    About Us
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p className="cursor-pointer relative inline-block before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
                    Contact
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p className="cursor-pointer relative inline-block before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
                    Privacy Policy
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p className="cursor-pointer relative inline-block before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
                    Terms of Service
                  </p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect with Us Column */}
          <div className="space-y-4 text-left md:text-left text-background dark:text-foreground">
            <h3 className="text-lg font-semibold">Connect with Us</h3>
            <div className="flex flex-col gap-4">
              <Link
                target="_blank"
                href="https://www.facebook.com/"
                className="flex flex-row justify-start "
              >
                <FaSquareFacebook className="w-6 h-6" />
                <p className="ml-2 cursor-pointer relative inline-block before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
                  Facebook
                </p>
              </Link>

              <Link
                target="_blank"
                href="https://www.instagram.com/"
                className="flex flex-row justify-start "
              >
                <FaSquareInstagram className="w-6 h-6" />
                <p className="ml-2 cursor-pointer relative inline-block before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
                  Instagram
                </p>
              </Link>

              <Link
                target="_blank"
                href="https://x.com/?lang=sv"
                className="flex flex-row justify-start"
              >
                <FaTwitter className="w-6 h-6" />
                <p className="ml-2 cursor-pointer relative inline-block before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
                  X
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 md:mt-12 md:pt-12 border-t border-muted-foreground text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} RecipeRover. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
