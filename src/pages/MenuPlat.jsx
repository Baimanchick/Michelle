import React, { useEffect, useState } from "react";
import "../css/menu.scss";
import SliderMenu, { categories } from "../components/SliderMenu";
import { useNavigate } from "react-router-dom";
import icon1 from "../images/iconSalad/card-icon-1.svg";
import icon2 from "../images/iconSalad/card-icon-2.svg";
import icon3 from "../images/iconSalad/icon 5.svg";
import icon4 from "../images/iconSalad/icon-13.svg";
import icon5 from "../images/iconSalad/icon-14.svg";
import icon6 from "../images/iconSalad/icon-4.svg";
import icon7 from "../images/iconSalad/icon-7.svg";
import icon8 from "../images/iconSalad/icon-8.svg";
import icon9 from "../images/iconSalad/icon-9.svg";
import img1 from "../images/plat/Сырная тарелка.jpg";
import img2 from "../images/plat/Фруктовая нарезка.jpg";

import CardSalad from "../components/CardSalad";

function MenuPlat() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [categoryChange, setCategoryChange] = useState(false);
  const [notF, setNotF] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCategoryChange(true);
    // navigate(selectedCategory.link)
  };

  const navigate = useNavigate();
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
          <header className="menu-salad-header">
            <div className="menu-salad-title-container">
              <div>ПЛЭТТЕРЫ</div>
            </div>
          </header>
          <div className="main-card-break">
            <CardSalad
              img={img1}
              title={"Сырная тарелка"}
              text={
                "Состав: Сыр Дор блю, Пармезан, Тильзитский, Чеддер, груша, ягоды, грецкий орех, фисташки, мёд"
              }
              price={"705 С"}
              weight={"150 г"}
              icon1={icon1} // пщеница
              icon2={icon2} // листок
              //   icon3={icon3} лук
              //   icon4={icon4} повар
              // icon5={icon5} // докрашенный листок
              //   icon6={icon6} бицепс
              // icon7={icon7} // без молока
              // icon8={icon8} // авакадо
              //   icon9={icon9} старбакс
            />
            <CardSalad
              img={img2}
              title={"Фруктовая нарезка"}
              text={"Состав: апельсин, банан, яблоко, киви, виноград"}
              price={"390 С"}
              weight={"350 г"}
              icon1={icon1} // пщеница
              // icon2={icon2} // листок
              //   icon3={icon3} // лук
              //   icon4={icon4} повар
              // icon5={icon5} // докрашенный листок
              icon6={icon6} // бицепс
              icon7={icon7} // без молока
              //   icon8={icon8} // авакадо
              //   icon9={icon9} старбакс
            />
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

export default MenuPlat;
