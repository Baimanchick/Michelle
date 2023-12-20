import React, { useEffect, useState } from "react";
import "../css/drinks.scss";
import { useNavigate } from "react-router-dom";
import SliderMenu, { categories } from "../components/SliderMenu";
import TeaSquare from "../components/TeaSquare";
import img1 from "../images/else/new.png";
import SmuziSquaer from "../components/SmuziSquaer";
import WineSquare from "../components/WineSquare";

function WinePage() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [categoryChange, setCategoryChange] = useState(false);
  const [notF, setNotF] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCategoryChange(true);
  };

  return (
    <>
      <div className="menu-main-content">
        <div className="menu-stick">
          <SliderMenu onSelectCategory={handleSelectCategory} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          </div>
        </div>
        <div className="drinks-main">
          <header
            style={{ margin: "30px 0px 30px 0px" }}
            className="tea-header"
          >
            <div className="tea-header-title">
              <h2 style={{ fontSize: '19px' }}>НОВОГОДНЕЕ МЕНЮ</h2>
            </div>
          </header>
          <img src={img1} className="new-img" alt="" />
        </div>
        <div style={{ paddingBottom: "200px" }}></div>
      </div>
    </>
  );
}

export default WinePage;
