import React, { useEffect, useState } from "react";
import "../css/drinks.scss";
import { useNavigate } from "react-router-dom";
import SliderMenu, { categories } from "../components/SliderMenu";
import TeaSquare from "../components/TeaSquare";
import img1 from "../images/else/Новогоднее меню.jpg";
import img2 from "../images/else/New Years MENU.jpg";
import img3 from "../images/else/Жаны Жылдык менюсу.jpg";
import img4 from "../images/else/Yilbasi Menusu.jpg";

import SmuziSquaer from "../components/SmuziSquaer";
import WineSquare from "../components/WineSquare";
import { useLanguage } from "../functions/languageContext";

function WinePage() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  let getCategory = localStorage.getItem("category");

  const [selectedCategory, setSelectedCategory] = useState(categories[Number(getCategory)]);
  const [categoryChange, setCategoryChange] = useState(false);
  const [notF, setNotF] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    getCategory = category.id
    localStorage.setItem("category", category.id)
    setCategoryChange(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth <= 1000 ? (
        <div className="menu-main-content">
          <div className="menu-stick">
            <SliderMenu onSelectCategory={handleSelectCategory} categoryI={Number(getCategory)} />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></div>
          </div>
          <div className="drinks-main">
            <header
              style={{ margin: "30px 0px 30px 0px" }}
              className="tea-header"
            >
              <div className="tea-header-title">
                <h2 style={{ fontSize: "19px" }}>
                  {selectedLanguage === "Русский" ||
                  selectedLanguage === "Кыргызча"
                    ? "ЖАНЫ ЖЫЛДЫК ТАМАК"
                    : selectedLanguage === "English" ||
                      selectedLanguage === "Türkçe"
                    ? "NEW YEAR DISH"
                    : null}
                </h2>
              </div>
            </header>
            <>
              {selectedLanguage === "Русский" ? (
                <img className="new-year-img" src={img1} alt="" />
              ) : selectedLanguage === "English" ? (
                <img className="new-year-img" src={img2} alt="" />
              ) : selectedLanguage === "Türkçe" ? (
                <img className="new-year-img" src={img4} alt="" />
              ) : selectedLanguage === "Кыргзча" ? (
                <img className="new-year-img" src={img3} alt="" />
              ) : null}

            </>
          </div>
          <div style={{ paddingBottom: "200px" }}></div>
        </div>
      ) : (
        <>
          <div className="thousand-px">
            <h2>
              Данный сайт не потдерживает экраны больше 1000 px, пожалуйста
              уменьшите ваш экран, либо зайдите через мобильное устройство
            </h2>
          </div>
        </>
      )}
    </>
  );
}

export default WinePage;
