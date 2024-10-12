import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col justify-center min-h-screen p-4">
      {/* Header Section */}
      <header className="text-center">
        <h1 className="text-3xl font-semibold">Welcome back to Recipe Radar</h1>
        <p className="text-muted-foreground mt-2 text-md">
          Enter your email and password to continue.
        </p>
      </header>

      {/* Form Section */}
      <div className="flex flex-col items-center max-w-sm w-full mx-auto mt-12">
        {/* Email Input */}
        <div className="w-full">
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            className="w-full mt-2"
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
            className="w-full mt-2"
          />
        </div>

        {/* Remember Me and Forgot Password */}
        <div className="flex items-center justify-between w-full mt-1">
          <div className="flex items-center">
            <Checkbox className="mr-2" id="remember" />
            <label className="text-sm text-muted-foreground" htmlFor="remember">
              Remember me
            </label>
          </div>
          {/* Forgot password aligned right */}
          <Button variant="link" className="text-sm ml-auto text-end">
            Forgot password
          </Button>
        </div>

        {/* Sign In Button */}
        <Button className="w-full mt-4">Sign in</Button>

        {/* Divider */}
        <p className="text-muted-foreground text-sm text-center w-full mt-4">
          Or Login with
        </p>

        {/* Social Login Section */}
        <div className="flex items-center justify-between w-full gap-4 mt-4">
          <Button
            variant="outline"
            className="w-1/2 flex items-center justify-center gap-2"
          >
            <Image src="/google.png" alt="Google logo" width={20} height={20} />
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
        <p className="mt-8">
          <span className="text-muted-foreground">Don't have an account? </span>
          <Link href={"/register"} className="font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
