import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";

import RecipeCard from "../recipe-card";

export default function CardsSwiper() {
  const recipes = [
    {
      id: "1",
      name: "Baked Ravioli Casserole",
      image: "/recipe1.jpg",
      likes: 1234,
      rating: 4.5,
      description: "Delicious baked ravioli with a creamy sauce.",
      cookingTime: "45 min",
      calories: 450,
      category: "Popular Recipes",
    },
    {
      id: "2",
      name: "Avocado Toast",
      image: "/recipe2.jpg",
      likes: 985,
      rating: 4.8,
      description: "Creamy avocado on crispy sourdough bread.",
      cookingTime: "10 min",
      calories: 280,
      category: "Quick & Easy Dinner",
    },
    {
      id: "3",
      name: "Grilled Chicken Salad",
      image: "/recipe3.jpg",
      likes: 1120,
      rating: 4.7,
      description: "Healthy grilled chicken with fresh salad.",
      cookingTime: "20 min",
      calories: 350,
      category: "Quick & Easy Dinner",
    },
    {
      id: "4",
      name: "Vegetarian Lasagna",
      image: "/recipe3.jpg",
      likes: 567,
      rating: 4.2,
      description: "Layered lasagna with veggies and cheese.",
      cookingTime: "60 min",
      calories: 600,
      category: "Popular Recipes",
    },
    {
      id: "5",
      name: "Classic Caesar Salad",
      image: "/recipe1.jpg",
      likes: 420,
      rating: 4.6,
      description: "Crispy romaine with Caesar dressing and croutons.",
      cookingTime: "15 min",
      calories: 320,
      category: "Quick & Easy Dinner",
    },
    {
      id: "6",
      name: "Spaghetti Bolognese",
      image: "/recipe2.jpg",
      likes: 899,
      rating: 4.4,
      description: "Classic Italian pasta with meat sauce.",
      cookingTime: "30 min",
      calories: 550,
      category: "Popular Recipes",
    },
    {
      id: "7",
      name: "Quinoa Salad",
      image: "/recipe2.jpg",
      likes: 345,
      rating: 4.1,
      description: "Healthy quinoa mixed with fresh vegetables.",
      cookingTime: "25 min",
      calories: 250,
      category: "Quick & Easy Dinner",
    },
    {
      id: "8",
      name: "Eggplant Parmesan",
      image: "/recipe1.jpg",
      likes: 675,
      rating: 4.3,
      description: "Baked eggplant with marinara sauce and cheese.",
      cookingTime: "50 min",
      calories: 480,
      category: "Popular Recipes",
    },
  ];

  // Filter recipes by category
  const popularRecipes = recipes.filter(
    (recipe) => recipe.category === "Popular Recipes"
  );
  const quickAndEasyRecipes = recipes.filter(
    (recipe) => recipe.category === "Quick & Easy Dinner"
  );

  return (
    <>
      {/* Swiper for Quick & Easy Dinner */}

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {popularRecipes.map((recipe) => (
          <SwiperSlide key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
/** */
