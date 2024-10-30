"use client";
import Header from "@/components/home/header";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import CardsSwiper from "@/components/home/cards-swiper";
import React, { useState, useEffect } from "react";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import CategorySelector from "@/components/home/category-selector";
// register Swiper custom elements
register();

export default function Home() {
  return (
    <>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-16 sm:mt-12 mt-0">
        {/* Featured Recipes Intro Section */}
        <section className="mt-12 mb-8">
          <h2 className="text-2xl font-semibold  sm:text-2xl tracking-tight">
            Featured Recipes
          </h2>
          <div className="mt-2 w-16 h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 rounded-full"></div>
        </section>

        {/* Carousel Header */}
        <Header />

        {/* Browse by Category Intro Section */}
        <section className="mt-24 mb-8">
          <h2 className="text-2xl font-semibold sm:text-2xl tracking-tight">
            Browse by Category
          </h2>
          <div className="mt-2 w-16 h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 rounded-full"></div>
        </section>
        <CategorySelector />
      </div>
    </>
  );
}
