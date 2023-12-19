import React, { useEffect, useState } from "react";
import "../css/soap.scss";
import SliderMenu, { categories } from "../components/SliderMenu";
import { useNavigate } from "react-router-dom";
import CardSalad from "../components/CardSalad";
import icon1 from "../images/iconSalad/card-icon-1.svg";
import icon2 from "../images/iconSalad/card-icon-2.svg";
import icon3 from "../images/iconSalad/icon 5.svg";
import icon4 from "../images/iconSalad/icon-13.svg";
import icon5 from "../images/iconSalad/icon-14.svg";
import icon6 from "../images/iconSalad/icon-4.svg";
import icon7 from "../images/iconSalad/icon-7.svg";
import icon8 from "../images/iconSalad/icon-8.svg";
import icon9 from "../images/iconSalad/icon-9.svg";
import img1 from "../images/child/1.jpg";
import img2 from "../images/child/2.jpg";
import img3 from "../images/child/3.jpg";
import img4 from "../images/child/4.jpg";
import img5 from "../images/child/5.jpg";
import img6 from "../images/child/6.jpg";
import img7 from "../images/child/7.jpg";
import img8 from "../images/child/8.jpg";
import Advice from "../components/Advice";

function MenuChild() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [categoryChange, setCategoryChange] = useState(false);
  const [notF, setNotF] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCategoryChange(true);
  };

  const handleNotF = (category) => {
    if (category.name !== "ЗАВТРАКИ") {
      setNotF(true);
      navigate("/notf");
    } else {
      setNotF(false);
    }
  };
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <div className="menu-main-content">
        <div className="menu-stick">
          <SliderMenu onSelectCategory={handleNotF} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{ marginTop: "10px" }}
              className="btn-more"
              onClick={() => navigate("/categories")}
            >
              ВЕРНУТЬСЯ
            </button>
          </div>
        </div>
        <header className="soap-header">
          <div className="soap-title-container">
            <h3>ДЕТСКОЕ МЕНЮ</h3>
          </div>
        </header>
        <div className="main-card-break"></div>
        <div style={{ paddingBottom: "200px" }}>
          {isLoading ? (
            <div className="loading-indicator">
              <div class="container">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
            </div>
          ) : (
            <>
              <div className="child-img-container">
                <img
                  style={{ borderRadius: "15px", objectFit: "cover" }}
                  src={img1}
                  alt=""
                />
                <img
                  style={{ borderRadius: "15px", objectFit: "cover" }}
                  src={img2}
                  alt=""
                />
                <img
                  style={{ borderRadius: "15px", objectFit: "cover" }}
                  src={img3}
                  alt=""
                />
                <img
                  style={{ borderRadius: "15px", objectFit: "cover" }}
                  src={img4}
                  alt=""
                />
                <img
                  style={{ borderRadius: "15px", objectFit: "cover" }}
                  src={img5}
                  alt=""
                />
                <img
                  style={{ borderRadius: "15px", objectFit: "cover" }}
                  src={img6}
                  alt=""
                />
                <img
                  style={{ borderRadius: "15px", objectFit: "cover" }}
                  src={img7}
                  alt=""
                />
                <img
                  style={{ borderRadius: "15px", objectFit: "cover" }}
                  src={img8}
                  alt=""
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default MenuChild;
