import React from "react";
import RecipeCard from "../recipe-card";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

interface Recipe {
  id: string;
  name: string;
  image: string;
  likes: number;
  rating: number;
  description: string;
  cookingTime: string;
  calories: number;
  category: string;
}

interface CardsSwiperProps {
  category: string;
}

export default function CardsSwiper({ category }: CardsSwiperProps) {
  // TODO: Replace with API call
  const recipes: Recipe[] = [
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
    {
      id: "9",
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
      id: "10",
      name: "Eggplant Parmesan",
      image: "/recipe1.jpg",
      likes: 675,
      rating: 4.3,
      description: "Baked eggplant with marinara sauce and cheese.",
      cookingTime: "50 min",
      calories: 480,
      category: "Popular Recipes",
    },
    {
      id: "11",
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
      id: "12",
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

  // TODO: Replace with API call
  const filteredRecipes = category
    ? recipes.filter((recipe) => recipe.category === category)
    : recipes;

  return (
    <>
      <div className="1350px:hidden">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {filteredRecipes.map((recipe) => (
            <SwiperSlide key={recipe.id} style={{ width: "290px" }}>
              <RecipeCard recipe={recipe} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden 1350px:flex gap-6 justify-between">
        {filteredRecipes.slice(0, 4).map((recipe) => (
          <SwiperSlide key={recipe.id} style={{ width: "290px" }}>
            <RecipeCard recipe={recipe} />
          </SwiperSlide>
        ))}
      </div>
    </>
  );
}
