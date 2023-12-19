import React, { useState } from "react";
import Slider from "react-slick";
import "../css/MenuPage.css";

export const categories = [
  {
    id: 2,
    name: "ЗАВТРАКИ",
    img: "http://localhost:3000/static/media/card-1.8eae972c4d03d0f55216.png",
    link: "/menu",
  },
  {
    id: 3,
    name: "САЛАТЫ",
    img: "http://localhost:3000/static/media/card-1.4c0253f083d1568b4602.jpg",
    link: "/salad",
  },
  {
    id: 4,
    name: "ПЛЭТТЕРЫ",
    img: "http://localhost:3000/static/media/%D0%A4%D1%80%D1%83%D0%BA%D1%82%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BD%D0%B0%D1%80%D0%B5%D0%B7%D0%BA%D0%B0.d3346089f7d84a3cc5a6.jpg",
    link: "/plat",
  },
  {
    id: 5,
    name: "БАГЕТЫ",
    img: "http://localhost:3000/static/media/1.9fb03a0482c407149f19.jpg",
    link: "/baget",
  },
  {
    id: 6,
    name: "РОЛЛЫ / БАГЕТ / БУТЕРБРОДЫ",
    img: "http://localhost:3000/static/media/card-1.e9b6a11e5f1f3e0c1359.jpg",
    link: "/dinner",
  },
  {
    id: 7,
    name: "ГОРЯЧИЕ БЛЮДА",
    img: "http://localhost:3000/static/media/1.b41a2e78058655ac6c75.jpg",
    link: "/hot",
  },
  {
    id: 8,
    name: "СУПЫ",
    img: "http://localhost:3000/static/media/4.041976e40dcc348fa680.jpg",
    link: "/soap",
  },
  {
    id: 9,
    name: "ПИЦЦА",
    img: "http://localhost:3000/static/media/3.25d619fe40730f9d6d7e.jpg",
    link: "/pizza",
  },
  {
    id: 10,
    name: "ПОКЕ-БОУЛ",
    img: "http://localhost:3000/static/media/1.97c27772576b9eb2aeb7.jpg",
    link: "/boul",
  },
  {
    id: 11,
    name: "ГАРНИРЫ",
    img: "http://localhost:3000/static/media/4.2dea4e79d394a169ff50.jpg",
    link: "/gar",
  },
  {
    id: 12,
    name: "ДЕТСКОЕ МЕНЮ",
    img: "https://www.jvlife.ru/system/images/contents/000/001/824/medium/Fotolia_104629565_Subscription_XXL.jpg?1553274795",
    link: "/child",
  },
  {
    id: 13,
    name: "КОФЕ",
    img: "http://localhost:3000/static/media/COFEE.7cf47ceea2f855043e82.jpg",
    link: "/coffe",
    link: "/coffe",
  },
  {
    id: 14,
    name: "ЧАЙ",
    img: "http://localhost:3000/static/media/tea.248d0ed36923958b1f85.png",
    link: "/*",
  },
  {
    id: 15,
    name: "СМУЗИ-ПАЗЛ",
    img: "http://localhost:3000/static/media/smuzi.af4d857f3569f010dfb9.png",
    link: "/*",
  },
  {
    id: 16,
    name: "БАР",
    img: "http://localhost:3000/static/media/bar.e59b46a8093a2202c990.png",
    link: "/*",
  },
  {
    id: 17,
    name: "ВИННАЯ КАРТА",
    img: "http://localhost:3000/static/media/wine.38731765e8050dcc6f99.png",
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
