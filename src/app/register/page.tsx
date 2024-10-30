import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    //Screen height minus navbar height
    <div
      className="flex flex-col justify-center"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      {/* Wrapper with border */}
      <div className="border-0 md:border md:rounded-lg p-6 max-w-md w-full mx-auto">
        {/* Header Section */}
        <div className="max-w-sm w-full text-left mx-auto">
          <h1 className="text-3xl font-semibold">Register</h1>
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
            <Input
              id="confirm-password"
              type="password"
              placeholder="Confirm password"
              className="w-full mt-1.5 mt-4"
            />
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
              Already have an account?{" "}
            </span>
            <Link href={"/login"} className="">
              <Button variant={"link"} className="p-0 text-md">
                Login
              </Button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
