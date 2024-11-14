"use client";
import FeaturedCarousel from "@/components/home/featured-carousel";
import React from "react";
import { register } from "swiper/element/bundle";
import CategorySelector from "@/components/home/category-selector";
import NewsletterSignup from "@/components/newsletter-signup";

register();

export default function Home() {
  return (
    <>
      {/* Featured Recipes Section */}
      <div className="w-full py-12">
        <div className="max-w-[1400px] mx-auto px-4 ">
          <section className="mb-6 sm:mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Featured Recipes
            </h2>
            <div className="mt-2 w-16 h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 rounded-full"></div>
          </section>
          <FeaturedCarousel />
        </div>
      </div>

      {/* Browse by Category Section */}
      <div className="w-full  py-12">
        <div className="max-w-[1400px] mx-auto px-4">
          <section className="mb-6 sm:mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Browse by Category
            </h2>
            <div className="mt-2 w-16 h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 rounded-full"></div>
          </section>
          <CategorySelector />
        </div>
      </div>

      {/* Newsletter Signup Section */}
      <div className="w-full py-12">
        <div className="max-w-[1400px] mx-auto px-4 ">
          <section className="mb-6 sm:mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Get Weekly Recipe Inspiration
            </h2>
            <div className="mt-2 w-16 h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 rounded-full"></div>
          </section>
          <NewsletterSignup />
        </div>
      </div>
    </>
  );
}
