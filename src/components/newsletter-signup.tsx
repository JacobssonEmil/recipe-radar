"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Submitted email:", email);
    toast({
      title: "You're Subscribed to Our Recipe Newsletter!",
      description:
        "You’re all set! Get ready for delicious recipes, cooking tips, and kitchen inspiration delivered right to your inbox.",
    });
  };

  return (
    <div className="max-w-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center space-x-2">
          <Mail className="w-5 h-5 text-green-600" />
          <p className="text-sm text-muted-foreground">
            Get delicious recipes delivered to your inbox weekly
          </p>
        </div>
        <div className="flex space-x-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow"
          />
          <Button type="submit" variant={"default"} className="">
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  );
}
