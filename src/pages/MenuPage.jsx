import React, { useState } from "react";
import "../css/MenuPage.css";
import logo from "../images/Michelle Vector.svg";
import burger from "../images/Group 115.svg";
import arrowleft from "../images/Group 118.svg";
import arrowright from "../images/Group 117.svg";
import SliderMenu, { categories } from "../components/SliderMenu";
import FullscreenMenu from "../components/FullscreenMenu";
import { useNavigate } from "react-router-dom";

function MenuPage() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [categoryChange, setCategoryChange] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCategoryChange(true);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const navigate = useNavigate();

  return (
    <div className={`block-breakfast`}>
      <div className="white-block-up"></div>
      <img
        className={`breakfast-img ${categoryChange ? "fade-animation" : ""}`}
        src={require(`../images/${
          selectedCategory.img ? selectedCategory.img : "zavtrak"
        }.png`)}
      />
      <div className="body-breakfast">
        <h1
          className={`breakfast-title ${
            categoryChange ? "fade-animation" : ""
          } `}
        >
          {selectedCategory.name}
        </h1>
        <div className="breakfast-category">
          КЛАССИЧЕСКИЕ <span className="breakfast-text">НА НОВЫЙ ЛАД</span>
        </div>
        <img src={logo} className="logo-br" />
      </div>
      <div className="menu-burger" onClick={handleOpenMenu}>
        <img src={arrowleft} className="arrow-l" />
        <img src={burger} className="menu-br" />
        <img src={arrowright} className="arrow-r" />
      </div>
      <div className="slider">
        <SliderMenu onSelectCategory={handleSelectCategory} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <button className="btn-more" onClick={() => navigate("/menu")}>

          ПОДРОБНЕЕ
        </button>
      </div>
      <div className="white-block-down"></div>
      {isMenuOpen && (
        <FullscreenMenu
          onCloseMenu={handleCloseMenu}
          onSelectCategory={handleSelectCategory}
          selectedCategory={selectedCategory}
        />
      )}
    </div>
  );
}

export default MenuPage;
