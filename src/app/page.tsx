"use client";
import FeaturedCarousel from "@/components/home/featured-carousel";

import React from "react";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import CategorySelector from "@/components/home/category-selector";
import NewsletterSignup from "@/components/newsletter-signup";
import CardsSwiper from "@/components/home/cards-swiper";
// register Swiper custom elements
register();

export default function Home() {
  return (
    <>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-16 mt-4 sm:mt-12">
        {/* Featured Recipes Intro Section */}
        <section className="mt-8 sm:mt-12 mb-6 sm:mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Featured Recipes
          </h2>
          <div className="mt-2 w-16 h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 rounded-full"></div>
        </section>

        {/* Carousel Header */}
        <FeaturedCarousel />

        {/* Browse by Category Intro Section */}
        <section className="mt-24 sm:mt-36 mb-6 sm:mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Browse by Category
          </h2>
          <div className="mt-2 w-16 h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 rounded-full"></div>
        </section>
        <CategorySelector />

        {/*CardsSwiper Intro Section */}
        <section className="mt-24 sm:mt-36 mb-6 sm:mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            October Recipes
          </h2>
          <div className="mt-2 w-16 h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 rounded-full"></div>
        </section>
        <CardsSwiper category={"Popular Recipes"} />
        {/* Newsletter Intro Section */}
        <section className="mt-24 sm:mt-36 mb-6 sm:mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Get Weekly Recipe Inspiration
          </h2>
          <div className="mt-2 w-16 h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 rounded-full"></div>
        </section>
        <NewsletterSignup />
      </div>
    </>
  );
}
