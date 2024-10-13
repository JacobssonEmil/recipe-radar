"use client"; // This marks the component as a client-side component

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default function Login() {
  return (
    <div className="flex flex-col justify-center min-h-screen p-4">
      {/* Wrapper with border */}
      <div className="border-0 md:border md:rounded-lg p-6 max-w-md w-full mx-auto">
        {/* Header Section */}
        <div className="max-w-sm w-full text-left mx-auto">
          <h1 className="text-3xl font-semibold">Login</h1>
          <p className="text-muted-foreground mt-4 text-md">
            Please enter your email and password.
          </p>
        </div>

        {/* Form Section */}
        <div className="flex flex-col items-center max-w-sm w-full mx-auto mt-8">
          {/* Email Input */}
          <div className="w-full">
            <label className="text-md" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full mt-1.5"
            />
          </div>

          {/* Password Input */}
          <div className="w-full mt-4">
            <label className="text-md" htmlFor="password">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1.5"
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between w-full mt-1">
            <div className="flex items-center">
              <Checkbox className="mr-2" id="remember" />
              <label
                className="text-sm text-muted-foreground"
                htmlFor="remember"
              >
                Remember me
              </label>
            </div>
            <Button variant="link" className="text-sm ml-auto text-end p-0">
              Forgot password
            </Button>
          </div>

          {/* Sign In Button */}
          <Link href="/" className="w-full mt-4">
            <Button className="w-full">Sign in</Button>
          </Link>

          {/* Divider */}
          <p className="text-muted-foreground text-sm text-center w-full mt-4">
            or continue with
          </p>

          {/* Social Login Section */}
          <div className="flex items-center justify-between w-full gap-4 mt-4">
            <Button
              variant="outline"
              className="w-1/2 flex items-center justify-center gap-2"
            >
              <Image
                src="/google.png"
                alt="Google logo"
                width={20}
                height={20}
              />
              Google
            </Button>
            <Button
              variant="outline"
              className="w-1/2 flex items-center justify-center gap-2"
            >
              <Image
                src="/facebook.png"
                alt="Facebook logo"
                width={20}
                height={20}
              />
              Facebook
            </Button>
          </div>

          {/* Register Link */}
          <p className="mt-8 text-md">
            <span className="text-muted-foreground">
              Don't have an account?{" "}
            </span>
            <Link href={"/register"} className="">
              <Button variant={"link"} className="p-0 text-md">
                Register
              </Button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
