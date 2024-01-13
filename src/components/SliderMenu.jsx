import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../css/MenuPage.css";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../functions/languageContext";
import { generateL } from "./categories_list";

export let categories = [];

const selectedL = localStorage.getItem("selectedLanguage");

if (selectedL) {
  categories = generateL(selectedL);
}

export default function SliderMenu({ onSelectCategory, categoryI }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const { selectedLanguage } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      const selectedL = localStorage.getItem("selectedLanguage");

      if (selectedL) {
        categories = generateL(selectedL);
      }

      // Assuming categoryI is a valid category id
      setSelectedCategory(
        categories.find((category) => category.id === categoryI)
      );
      setLoading(false); // Update loading state
    };

    fetchData();
  }, [categoryI]);

  const settings = {
    centerMode: true,
    infinite: true,
    initialSlide: selectedCategory
      ? categories.findIndex((cat) => cat.id === selectedCategory.id)
      : 0,
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Slider {...settings}>
        {categories.map((categoryM, index) => (
          <div
            key={categoryM.id}
            className={`slider-items ${
              selectedCategory && selectedCategory.id === categoryM.id
                ? "bold-text"
                : ""
            }`}
            onClick={() => handleSelect(categoryM)}
          >
            <h3>
              {selectedLanguage === "Русский"
                ? categoryM.title
                : selectedLanguage === "English"
                ? categoryM.title
                : selectedLanguage === "Кыргызча"
                ? categoryM.title
                : selectedLanguage === "Türkçe"
                ? categoryM.title
                : null}
            </h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}
