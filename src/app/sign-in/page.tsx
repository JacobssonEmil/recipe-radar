import { SignIn, SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center py-20 lg:py-40 px-4">
      <SignIn />
    </div>
  );
}
