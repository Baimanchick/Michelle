import React, { useEffect, useState } from "react";
import "../css/soap.scss";
import SliderMenu, { categories } from "../components/SliderMenu";
import { useNavigate } from "react-router-dom";
import CardSalad from "../components/CardSalad";
import icon1 from "../images/svgs/Пшеница.svg";
import icon2 from "../images/svgs/Листок.svg";
import icon3 from "../images/svgs/Лук.svg";
import icon4 from "../images/svgs/Повар.svg";
import icon5 from "../images/svgs/докрашенный листок.svg";
import icon6 from "../images/svgs/бицепс.svg";
import icon7 from "../images/svgs/без молока.svg";
import icon8 from "../images/svgs/авакадо.svg";
import icon9 from "../images/svgs/старбакс.svg";
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCategoryChange(true);
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

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
            <SliderMenu onSelectCategory={handleSelectCategory} />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></div>
          </div>
          <header className="soap-header">
            <div className="soap-title-container">
              <h3>ДЕТСКОЕ МЕНЮ</h3>
            </div>
          </header>
          <div className="main-card-break"></div>
          <div style={{ paddingBottom: "200px" }}>
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
          </div>
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

export default MenuChild;
