import React, { useState } from "react";
import Slider from "react-slick";
import "../css/MenuPage.css";

export const categories = [
  { id: 2, name: "ЗАВТРАКИ", img: "zavtrak" },
  { id: 3, name: "САЛАТЫ", img: "salads" },
  { id: 4, name: "ПЛЭТТЕРЫ", img: "platters" },
  { id: 5, name: "БАГЕТЫ", img: "bagets" },
  { id: 6, name: "РОЛЛЫ / БАГЕТ / БУТЕРБРОДЫ", img: "rolls" },
  { id: 7, name: "ГОРЯЧИЕ БЛЮДА", img: "gor" },
  { id: 8, name: "ПИЦЦА", img: "pizza" },
  { id: 9, name: "ПОКЕ-БОУЛ", img: "poke" },
  { id: 10, name: "ГАРНИРЫ" },
  { id: 11, name: "ДЕТСКОЕ МЕНЮ" },
  { id: 12, name: "КОФЕ", img: "coffee" },
  { id: 13, name: "ЧАЙ", img: "tea" },
  { id: 14, name: "СМУЗИ-ПАЗЛ", img: "smuzi" },
  { id: 15, name: "БАР", img: "bar" },
  { id: 16, name: "ВИННАЯ КАРТА", img: "wine" },
  { id: 17, name: "СУПЫ", img: "soups" },
];

export default function SliderMenu({ onSelectCategory }) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    arrows: false,
    speed: 500,
    beforeChange: (current, next) => {
      const category = categories[next];
      setSelectedCategory(category);
      onSelectCategory(category);
    },
  };

  return (
    <div>
      <Slider {...settings}>
        {categories.map((category) => (
          <div
            key={category.id}
            className={`slider-items ${
              selectedCategory.id === category.id ? "bold-text" : ""
            }`}
            onClick={() => onSelectCategory(category)}
          >
            <h3>{category.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}
