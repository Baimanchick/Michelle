import React, { useState } from "react";
import "../css/MenuPage.css";
import logo from "../images/else/Michelle Vector.svg";
import burger from "../images/else/Group 115.svg";
import arrowleft from "../images/else/Group 118.svg";
import arrowright from "../images/else/Group 117.svg";
import SliderMenu, { categories } from "../components/SliderMenu";
import FullscreenMenu from "../components/FullscreenMenu";
import { useNavigate } from "react-router-dom";
import CardMenu from "../components/CardMenu";

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
    <>
      <div style={{ fontSize: "38px", textAlign: "center", marginTop: "50px" }}>
        МЕНЮ
      </div>
      <div className="block-nav-menu">
        {categories.map((category) => (
          <div
            className="menu-card-main"
            onClick={() => navigate(category.link)}
          >
            <div className="menu-card-container">
              <div className="menu-card">
                <div className="menu-card-img">
                  <img src={category.img} alt="" />
                  <div className="white-block"></div>

                  <div className="menu-card-absolute">
                    <div className="menu-card-title">
                      <div>{category.name}</div>
                    </div>
                    <div className="menu-card-utils"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MenuPage;
