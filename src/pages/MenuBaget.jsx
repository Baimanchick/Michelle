import React, { useState } from "react";
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
import img1 from "../images/baget/Хумус с Багетом на закваске.jpg";
import img2 from "../images/baget/Куриный паштет с Багетом на закваске.jpg";

import CardSalad from "../components/CardSalad";

function MenuBaget() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [categoryChange, setCategoryChange] = useState(false);
  const [notF, setNotF] = useState(false);

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
          />
        </div>
      </div>
    </>
  );
}

export default MenuBaget;
