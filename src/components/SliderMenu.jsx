import React, { useState } from "react";
import Slider from "react-slick";
import "../css/MenuPage.css";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../functions/languageContext";

export const categories = [
  {
    id: 1,
    name: "НОВОГОДНЕЕ МЕНЮ",
    namekg: "ЖАНЫ ЖЫЛДЫК МЕНЮ",
    nameng: "NEW-YEAR MENU",
    nametk: "Yılbaşı menüsü",
    img: "new",
    link: "/new",
  },
  {
    id: 2,
    name: "ЗАВТРАКИ",
    namekg: "ЭРТЕ ТАМАК",
    nameng: "BREAKFAST",
    nametk: "KAHVALTI",
    img: "zavtrak",
    link: "/menu",
  },
  {
    id: 3,
    name: "САЛАТЫ",
    namekg: "САЛАТ",
    nameng: "SALADS",
    nametk: "SALATA",
    img: "salads",
    link: "/salad",
  },
  {
    id: 4,
    name: "ПЛЭТТЕРЫ",
    namekg: "ПЛЭТТЕР",
    nameng: "PLATTERS",
    nametk: "SERVİS TABAĞI",
    img: "platters",
    link: "/plat",
  },
  {
    id: 5,
    name: "БАГЕТЫ",
    namekg: "БАГЕТ",
    nameng: "BAGETS",
    nametk: "BAGET",
    img: "bagets",
    link: "/baget",
  },
  {
    id: 6,
    name: "РОЛЛЫ / БУТЕРБРОДЫ",
    namekg: "РОЛЛ / БУТЕРБРОД",
    nameng: "ROLLS / SANDWICH",
    nametk: "RULO / SANDVİÇ",
    img: "rolls",
    link: "/dinner",
  },
  {
    id: 7,
    name: "ГОРЯЧИЕ БЛЮДА",
    namekg: "ЫСЫК ТАМАК",
    nameng: "HOT MEAL",
    nametk: "SICAK YEMEKLER",
    img: "gor",
    link: "/hot",
  },
  {
    id: 8,
    name: "СУПЫ",
    namekg: "ШОРПОЛОР",
    nameng: "SOUPS",
    nametk: "ÇORBALAR",
    img: "soups",
    link: "/soap",
  },
  {
    id: 9,
    name: "ПИЦЦА",
    namekg: "ПИЦЦА",
    nameng: "PIZZA",
    nametk: "Pizza",
    img: "pizza",
    link: "/pizza",
  },
  {
    id: 10,
    name: "ПОКЕ БОУЛ",
    namekg: "ПОКЕ БОУЛ",
    nameng: "POKE-BOWL",
    nametk: "DÜRBÜN KASE",
    img: "poke",
    link: "/boul",
  },
  {
    id: 11,
    name: "ГАРНИРЫ",
    namekg: "ГАРНИРЛЕР",
    nameng: "SIDE DISHES",
    nametk: "GARNİTÜRLER",
    img: "garnier",
    link: "/gar",
  },
  {
    id: 12,
    name: "ДЕТСКОЕ МЕНЮ",
    namekg: "БАЛДАР МЕНЮСУ",
    nameng: "CHILDS MENU",
    nametk: "ÇOCUK MENÜSÜ",
    img: "Мак энд ЧИЗ",
    link: "/child",
  },
  {
    id: 13,
    name: "КОФЕ",
    namekg: "КОФЕ",
    nameng: "COFFEE",
    nametk: "KAHVE",
    img: "coffee",
    link: "/coffe",
  },
  {
    id: 14,
    name: "ЧАЙ",
    namekg: "ЧАЙ",
    nameng: "TEA",
    nametk: "ÇAY",
    img: "tea",
    link: "/tea",
  },
  {
    id: 15,
    name: "НАПИТКИ",
    namekg: "СУУЛАР",
    nameng: "BEVERAGES",
    nametk: "İÇECEKLER",
    img: "napitki",
    link: "/drinks",
  },
  {
    id: 16,
    name: "БАР",
    namekg: "БАР",
    nameng: "BAR",
    nametk: "BAR",
    img: "bar",
    link: "/bar",
  },
  {
    id: 17,
    name: "СМУЗИ-ПАЗЛ",
    namekg: "СМУЗИ-ПАЗЛ",
    nameng: "SMOOTHIE PUZZLE",
    nametk: "SMOOTHIE BULMACA",
    img: "smuzi",
    link: "/smuzi",
  },
  {
    id: 18,
    name: "ВИННАЯ КАРТА",
    namekg: "ВИНО КАРТАСЫ",
    nameng: "WINE MAP",
    nametk: "ŞARAP HARİTASI",
    img: "wine",
    link: "/wine",
  },
];

export default function SliderMenu({ onSelectCategory, categoryI }) {
  const [selectedCategory, setSelectedCategory] = useState(categories[categoryI - 1]);
  const { selectedLanguage } = useLanguage();

  const settings = {
    centerMode: true,
    infinite: true,
    initialSlide: categories.findIndex(cat => cat.id === selectedCategory.id),
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
  };

  return (
    <div>
      <Slider {...settings}>
        {categories.map((categoryM, index) => (
          <div
            key={categoryM.id}
            className={`slider-items ${
              selectedCategory.id === categoryM.id ? "bold-text" : ""
            }`}
            onClick={() => handleSelect(categoryM)}
          >
            <h3>{ selectedLanguage === "Русский"
              ? categoryM.name
              : selectedLanguage === "English"
              ? categoryM.nameng
              : selectedLanguage === "Кыргызча"
              ? categoryM.namekg
              : selectedLanguage === "Turkce"
              ? categoryM.nametk
              : null }</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}
