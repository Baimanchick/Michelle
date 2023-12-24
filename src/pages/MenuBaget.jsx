import React, { useEffect, useState } from "react";
import "../css/menu.scss";
import SliderMenu, { categories } from "../components/SliderMenu";
import { useNavigate } from "react-router-dom";
import icon1 from "../images/svgs/Пшеница.svg";
import icon2 from "../images/svgs/Листок.svg";
import icon3 from "../images/svgs/Лук.svg";
import icon4 from "../images/svgs/Повар.svg";
import icon5 from "../images/svgs/докрашенный листок.svg";
import icon6 from "../images/svgs/бицепс.svg";
import icon7 from "../images/svgs/без молока.svg";
import icon8 from "../images/svgs/авакадо.svg";
import icon9 from "../images/svgs/старбакс.svg";
import img1 from "../images/baget/1.jpg";
import img2 from "../images/baget/2.jpg";

import CardSalad from "../components/CardSalad";
import Advice from "../components/Advice";

function MenuBaget() {
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
              <div>БАГЕТЫ</div>
              <p>НА ЗАКВАСКЕ</p>
            </div>
          </header>
          <div className="main-card-break">
            <CardSalad
              img={img1}
              title={"Хумус с багетом на закваске"}
              text={"Состав: хумус, багет на закваске, паприка"}
              price={"160 С"}
              weight={"150 г"}
              // icon1={icon1} // пщеница
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
              title={"Куриный паштет с багетом на закваске"}
              text={
                "Состав: куриный паштет, багет на закваске, семена подсолнуха "
              }
              price={"160 С"}
              weight={"150 г"}
              // icon1={icon1} // пщеница
              // icon2={icon2} // листок
              //   icon3={icon3} // лук
              //   icon4={icon4} повар
              // icon5={icon5} // докрашенный листок
              // icon6={icon6} // бицепс
              // icon7={icon7} // без молока
              //   icon8={icon8} // авакадо
              //   icon9={icon9} старбакс
              style={{ top: "119px" }}
            />
          </div>
          <Advice
            text={
              "Мы готовим паштет из нежного мяса курицы с добавлением ароматных трав"
            }
          />
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

export default MenuBaget;
