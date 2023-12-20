import React, { useState } from "react";
import Slider from "react-slick";
import "../css/MenuPage.css";
import { useNavigate } from "react-router-dom";

export const categories = [
  {
    id: 2,
    name: "ЗАВТРАКИ",
    img: "zavtrak",
    link: "/menu",
  },
  {
    id: 3,
    name: "САЛАТЫ",
    img: "salads",
    link: "/salad",
  },
  {
    id: 4,
    name: "ПЛЭТТЕРЫ",
    img: "platters",
    link: "/plat",
  },
  {
    id: 5,
    name: "БАГЕТЫ",
    img: "bagets",
    link: "/baget",
  },
  {
    id: 6,
    name: "РОЛЛЫ / БУТЕРБРОДЫ",
    img: "rolls",
    link: "/dinner",
  },
  {
    id: 7,
    name: "ГОРЯЧИЕ БЛЮДА",
    img: "gor",
    link: "/hot",
  },
  {
    id: 8,
    name: "СУПЫ",
    img: "soups",
    link: "/soap",
  },
  {
    id: 9,
    name: "ПИЦЦА",
    img: "pizza",
    link: "/pizza",
  },
  {
    id: 10,
    name: "ПОКЕ БОУЛ",
    img: "poke",
    link: "/boul",
  },
  {
    id: 11,
    name: "ГАРНИРЫ",
    img: "garnier",
    link: "/gar",
  },
  {
    id: 12,
    name: "ДЕТСКОЕ МЕНЮ",
    img: "Мак энд ЧИЗ",
    link: "/child",
  },
  {
    id: 13,
    name: "КОФЕ",
    img: "coffee",
    link: "/coffe",
  },
  {
    id: 14,
    name: "ЧАЙ",
    img: "tea",
    link: "/tea",
  },
  {
    id: 15,
    name: "НАПИТКИ",
    img: "napitki",
    link: "/drinks",
  },
  {
    id: 16,
    name: "БАР",
    img: "bar",
    link: "/*",
  },
  {
    id: 17,
    name: "СМУЗИ-ПАЗЛ",
    img: "smuzi",
    link: "/*",
  },
  {
    id: 18,
    name: "ВИННАЯ КАРТА",
    img: "wine",
    link: "/wine",
  },
  {
    id: 19,
    name: "НОВОГОДНЕЕ МЕНЮ",
    img: "new",
    link: "/new",
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

  const navigate = useNavigate();

  const handleSelect = (category) => {
    onSelectCategory(category);
    navigate(category.link);
  }

  console.log(selectedCategory)

  return (
    <div>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div
            key={category.id}
            className={`slider-items ${
              selectedCategory.id === category.id ? "bold-text" : ""
            }`}
            onClick={() => handleSelect(category)}
          >
            <h3>{category.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}
