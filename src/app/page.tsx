"use client";
import Header from "@/components/home/header";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import CardsSwiper from "@/components/home/cards-swiper";
import React, { useState, useEffect } from "react";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

// Define the type for a recipe
interface Recipe {
  id: number;
  name: string;
  description: string;
}

export default function Home() {
  return (
    <>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-16 sm:mt-12 mt-0">
        <Header />
      </div>
    </>
  );
}
