import React, { useState } from "react";
import { RecipeCard } from "../recipe-card";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function CardsSwiper() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };
  // TODO: Replace with API call
  const recipes = [
    {
      id: 1,
      title: "Classic Eggs Benedict",
      description: "Perfect brunch recipe with hollandaise sauce",
      image: "/recipe1.jpg",
      cookTime: "30 mins",
      category: "Breakfast",
      author: "Chef Maria",
      difficulty: "Medium",
      calories: 450,
    },
    {
      id: 2,
      title: "Mediterranean Quinoa Bowl",
      description: "Healthy and filling vegetarian bowl",
      image: "/recipe2.jpg",
      cookTime: "20 mins",
      category: "Lunch",
      author: "Chef Alex",
      difficulty: "Easy",
      calories: 380,
    },
    {
      id: 3,
      title: "Grilled Salmon",
      description: "With lemon herb butter sauce ",
      image: "/recipe3.jpg",
      cookTime: "25 mins",
      category: "Dinner",
      author: "Chef John",
      difficulty: "Medium",
      calories: 520,
    },
    {
      id: 4,
      title: "Vegan Buddha Bowl",
      description: "Nutritious bowl with roasted vegetables",
      image: "/recipe4.jpg",
      cookTime: "25 mins",
      category: "Lunch",
      author: "Chef Sarah",
      difficulty: "Easy",
      calories: 340,
    },
    {
      id: 5,
      title: "Chocolate Lava Cake",
      description: "Decadent dessert with molten center",
      image: "/recipe5.jpg",
      cookTime: "20 mins",
      category: "Desserts",
      author: "Chef Michael",
      difficulty: "Hard",
      calories: 580,
    },
    {
      id: 6,
      title: "Asian Stir-Fry Noodles",
      description: "Quick and flavorful vegetarian noodles",
      image: "/recipe6.jpg",
      cookTime: "15 mins",
      category: "Dinner",
      author: "Chef Lisa",
      difficulty: "Easy",
      calories: 420,
    },
    {
      id: 7,
      title: "Asian Stir-Fry Noodles",
      description: "Quick and flavorful vegetarian noodles",
      image: "/recipe6.jpg",
      cookTime: "15 mins",
      category: "Dinner",
      author: "Chef Lisa",
      difficulty: "Easy",
      calories: 420,
    },
    {
      id: 8,
      title: "Asian Stir-Fry Noodles",
      description: "Quick and flavorful vegetarian noodles",
      image: "/recipe6.jpg",
      cookTime: "15 mins",
      category: "Dinner",
      author: "Chef Lisa",
      difficulty: "Easy",
      calories: 420,
    },
    {
      id: 9,
      title: "Asian Stir-Fry Noodles",
      description: "Quick and flavorful vegetarian noodles",
      image: "/recipe6.jpg",
      cookTime: "15 mins",
      category: "Dinner",
      author: "Chef Lisa",
      difficulty: "Easy",
      calories: 420,
    },
  ];

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
          {recipes.map((recipe) => (
            <SwiperSlide key={recipe.id} style={{ width: "290px" }}>
              <RecipeCard
                key={recipe.id}
                {...recipe}
                isFavorite={favorites.includes(recipe.id)}
                onToggleFavorite={toggleFavorite}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden 1350px:flex gap-6 justify-between">
        {recipes.slice(0, 4).map((recipe) => (
          <SwiperSlide key={recipe.id} style={{ width: "290px" }}>
            <RecipeCard
              key={recipe.id}
              {...recipe}
              isFavorite={favorites.includes(recipe.id)}
              onToggleFavorite={toggleFavorite}
            />
          </SwiperSlide>
        ))}
      </div>
    </>
  );
}
