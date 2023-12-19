import React, { useState } from "react";
import Slider from "react-slick";
import "../css/MenuPage.css";

export const categories = [
  {
    id: 2,
    name: "ЗАВТРАКИ",
    img: "card-4.png",
    link: "/menu",
  },
  {
    id: 3,
    name: "САЛАТЫ",
    img: "card-1.jpg",
    link: "/salad",
  },
  {
    id: 4,
    name: "ПЛЭТТЕРЫ",
    img: "Сырная тарелка.jpg",
    link: "/plat",
  },
  {
    id: 5,
    name: "БАГЕТЫ",
    img: "baget/1.jpg",
    link: "/baget",
  },
  {
    id: 6,
    name: "РОЛЛЫ / БАГЕТ / БУТЕРБРОДЫ",
    img: "card-1.jpg",
    link: "/dinner",
  },
  {
    id: 7,
    name: "ГОРЯЧИЕ БЛЮДА",
    img: "1.jpg",
    link: "/hot",
  },
  {
    id: 8,
    name: "СУПЫ",
    img: "1.jpg",
    link: "/soap",
  },
  {
    id: 9,
    name: "ПИЦЦА",
    img: "1.jpg",
    link: "/pizza",
  },
  {
    id: 10,
    name: "ПОКЕ-БОУЛ",
    img: "1.jpg",
    link: "/boul",
  },
  {
    id: 11,
    name: "ГАРНИРЫ",
    img: "1.jpg",
    link: "/gar",
  },
  {
    id: 12,
    name: "ДЕТСКОЕ МЕНЮ",
    img: "1.jpg",
    link: "/child",
  },
  {
    id: 13,
    name: "КОФЕ",
    img: "image-1.png",
    link: "/coffe",
    link: "/coffe",
  },
  {
    id: 14,
    name: "ЧАЙ",
    img: "tea.png",
    link: "/*",
  },
  {
    id: 15,
    name: "СМУЗИ-ПАЗЛ",
    img: "smuzi.png",
    link: "/*",
  },
  {
    id: 16,
    name: "БАР",
    img: "bar.png",
    link: "/*",
  },
  {
    id: 17,
    name: "ВИННАЯ КАРТА",
    img: "wine.png",
    link: "/*",
  },
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
