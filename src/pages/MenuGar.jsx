import React, { useState } from "react";
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
import img1 from "../images/gar/1.jpg";
import img2 from "../images/gar/2.jpg";
import img3 from "../images/gar/3.jpg";
import img4 from "../images/gar/4.jpg";
import img5 from "../images/gar/5.jpg";
import img6 from "../images/gar/6.jpg";
import img7 from "../images/gar/7.jpg";
import img8 from "../images/gar/8.jpg";
import img9 from "../images/gar/9.jpg";
import img10 from "../images/gar/1.jpg";
import img11 from "../images/gar/2.jpg";
import img12 from "../images/gar/3.jpg";
import img13 from "../images/gar/4.jpg";
import img14 from "../images/gar/5.jpg";
import Advice from "../components/Advice";

function MenuGar() {
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
        <header className="soap-header">
          <div className="soap-title-container">
            <h3>ГАРНИРЫ</h3>
          </div>
        </header>
        <div className="main-card-break">
          <CardSalad
            img={img1}
            title={"Рис"}
            text={""}
            price={"100 С"}
            weight={"150 г"}
            // icon1={icon1} // пщеница
            icon2={icon2} // листок
            //   icon3={icon3}// лук
            //   icon4={icon4}// повар
            icon5={icon5} // докрашенный листок
            // icon6={icon6} // бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9}  //старбакс
          />
          <CardSalad
            img={img2}
            title={"Припущенные овощи"}
            text={""}
            price={"230 с"}
            weight={"150 г"}
            // icon1={icon1} // пщеница
            icon2={icon2} // листок
            //   icon3={icon3}// лук
            //   icon4={icon4}// повар
            icon5={icon5} // докрашенный листок
            icon6={icon6} // бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9}  //старбакс
          />
          <CardSalad
            img={img3}
            title={"Оладьи кабачково-овсяные"}
            text={""}
            price={"240 с"}
            weight={"150 г"}
            // icon1={icon1} // пщеница
            // icon2={icon2} // листок
            //   icon3={icon3}// лук
            //   icon4={icon4}// повар
            // icon5={icon5} // докрашенный листок
            icon6={icon6} // бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9}  //старбакс
          />
          <CardSalad
            img={img4}
            title={"Картофель по-деревенски"}
            text={""}
            price={"120 с"}
            weight={"150 г"}
            // icon1={icon1} // пщеница
            icon2={icon2} // листок
            //   icon3={icon3}// лук
            //   icon4={icon4}// повар
            icon5={icon5} // докрашенный листок
            icon6={icon6} // бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9}  //старбакс
          />
          <CardSalad
            img={img5}
            title={"Картофельное пюре"}
            text={""}
            price={"100 с"}
            weight={"150 г"}
            // icon1={icon1} // пщеница
            // icon2={icon2} // листок
            //   icon3={icon3}// лук
            //   icon4={icon4}// повар
            // icon5={icon5} // докрашенный листок
            // icon6={icon6} // бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9}  //старбакс
          />
          <CardSalad
            img={img6}
            title={"Гречка"}
            text={""}
            price={"100 с"}
            weight={"150 г"}
            // icon1={icon1} // пщеница
            icon2={icon2} // листок
            //   icon3={icon3}// лук
            //   icon4={icon4}// повар
            icon5={icon5} // докрашенный листок
            icon6={icon6} // бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9}  //старбакс
          />
          <CardSalad
            img={img7}
            title={"Киноа"}
            text={""}
            price={"140 с"}
            weight={"150 г"}
            // icon1={icon1} // пщеница
            icon2={icon2} // листок
            //   icon3={icon3}// лук
            //   icon4={icon4}// повар
            icon5={icon5} // докрашенный листок
            icon6={icon6} // бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9}  //старбакс
          />
          <CardSalad
            img={img8}
            title={"Цветная капуста"}
            text={""}
            price={"130 с"}
            weight={"150 г"}
            // icon1={icon1} // пщеница
            icon2={icon2} // листок
            //   icon3={icon3}// лук
            //   icon4={icon4}// повар
            icon5={icon5} // докрашенный листок
            icon6={icon6} // бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9}  //старбакс
          />
          <CardSalad
            img={img9}
            title={"Фри"}
            text={""}
            price={"200 с"}
            weight={"150 г"}
            // icon1={icon1} // пщеница
            icon2={icon2} // листок
            //   icon3={icon3}// лук
            //   icon4={icon4}// повар
            icon5={icon5} // докрашенный листок
            // icon6={icon6} // бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9}  //старбакс
          />
          <CardSalad
            img={img10}
            title={"ПП Фри"}
            text={""}
            price={"200 с"}
            weight={"150 г"}
            // icon1={icon1} // пщеница
            icon2={icon2} // листок
            // icon3={icon3} // лук
            //   icon4={icon4}// повар
            icon5={icon5} // докрашенный листок
            // icon6={icon6} // бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9}  //старбакс
          />
          <CardSalad
            img={img11}
            title={"Брокколи"}
            text={""}
            price={"130 с"}
            weight={"150 г"}
            // icon1={icon1} // пщеница
            icon2={icon2} // листок
            //   icon3={icon3}// лук
            //   icon4={icon4}// повар
            icon5={icon5} // докрашенный листок
            icon6={icon6} // бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9}  //старбакс
          />
          <CardSalad
            img={img12}
            title={"Шампиньоны"}
            text={""}
            price={"160 с"}
            weight={"150 г"}
            // icon1={icon1} // пщеница
            icon2={icon2} // листок
            icon3={icon3} // лук
            //   icon4={icon4}// повар
            icon5={icon5} // докрашенный листок
            // icon6={icon6} // бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9}  //старбакс
          />
          <CardSalad
            img={img13}
            title={"Багет на закваске"}
            text={""}
            price={"110 С"}
            weight={""}
            // icon1={icon1} // пщеница
            // icon2={icon2} // листок
            //   icon3={icon3}// лук
            //   icon4={icon4}// повар
            // icon5={icon5} // докрашенный листок
            // icon6={icon6} // бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9}  //старбакс
          />
          <CardSalad
            img={img14}
            title={"Тостерный хлеб"}
            text={""}
            price={"30 с"}
            weight={""}
            // icon1={icon1} // пщеница
            // icon2={icon2} // листок
            //   icon3={icon3}// лук
            //   icon4={icon4}// повар
            // icon5={icon5} // докрашенный листок
            // icon6={icon6} // бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9}  //старбакс
          />
          <CardSalad
            img={img14}
            title={"Чёрный хлеб"}
            text={""}
            price={"80 с"}
            weight={""}
            // icon1={icon1} // пщеница
            // icon2={icon2} // листок
            //   icon3={icon3}// лук
            //   icon4={icon4}// повар
            // icon5={icon5} // докрашенный листок
            // icon6={icon6} // бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9}  //старбакс
          />
        </div>
        <div style={{ paddingBottom: "200px" }}></div>
      </div>
    </>
  );
}

export default MenuGar;
