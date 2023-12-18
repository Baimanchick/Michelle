import React, { useState } from "react";
import "../css/menu.scss";
import SliderMenu, { categories } from "./SliderMenu";
import { useNavigate } from "react-router-dom";
import FullscreenMenu from "./FullscreenMenu";
import img1 from "../images/salat/card-1.jpg";
import img2 from "../images/salat/card-2.jpg";
import img3 from "../images/salat/card-3.jpg";
import img4 from "../images/salat/card-4.jpg";
import img5 from "../images/salat/card-5.jpg";
import img6 from "../images/salat/card-6.jpg";
import img7 from "../images/salat/card-7.jpg";
import img8 from "../images/salat/card-8.jpg";
import img9 from "../images/salat/card-9.jpg";
import img10 from "../images/salat/card-10.jpg";
import img11 from "../images/salat/card-11.jpg";
import img12 from "../images/salat/card-12.jpg";
import img13 from "../images/salat/card-13.jpg";
import img14 from "../images/salat/card-14.jpg";
import CardSalad from "./CardSalad";

import icon1 from "../images/iconSalad/card-icon-1.svg";
import icon2 from "../images/iconSalad/card-icon-2.svg";
import icon3 from "../images/iconSalad/icon 5.svg";
import icon4 from "../images/iconSalad/icon-13.svg";
import icon5 from "../images/iconSalad/icon-14.svg";
import icon6 from "../images/iconSalad/icon-4.svg";
import icon7 from "../images/iconSalad/icon-7.svg";
import icon8 from "../images/iconSalad/icon-8.svg";
import icon9 from "../images/iconSalad/icon-9.svg";

function CardMenuSalad() {
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
      <div className="main-card-break">
        <CardSalad
          img={img1}
          title={"Греческий салат"}
          text={
            "Состав: сыр Фетакса, томаты, огурцы, маслины, микс салатов, кунжут, соус"
          }
          price={"340 С"}
          weight={"300 г"}
          icon1={icon1} // пщеница
          icon2={icon2} // листок
          //   icon3={icon3} лук
          //   icon4={icon4} повар
          icon5={icon5} // докрашенный листок
          //   icon6={icon6} бицепс
          icon7={icon7} // без молока
          icon8={icon8} // авакадо
          //   icon9={icon9} старбакс
        />
        <CardSalad
          img={img2}
          title={"Пастуший салат"}
          text={
            "Состав: томаты, огурцы, болгарский перец, фиолетовый лук, зелень"
          }
          price={"260 С"}
          weight={"250 г"}
          icon1={icon1} // пщеница
          icon2={icon2} // листок
          //   icon3={icon3} // лук
          //   icon4={icon4} повар
          icon5={icon5} // докрашенный листок
          icon6={icon6}
          бицепс
          //   icon7={icon7} // без молока
          //   icon8={icon8} // авакадо
          //   icon9={icon9} старбакс
        />
        <CardSalad
          img={img3}
          title={"Цезарь с креветками "}
          text={
            "Состав: тигровые креветки, сыр Пармезан, томаты черри, салат Айсберг, сухари, соус Цезарь"
          }
          price={"795 С"}
          weight={"300 г"}
        />
        <CardSalad
          img={img4}
          title={"Цезарь с курицей"}
          text={
            "Состав: куриная грудка, сыр Пармезан, томаты черри, салат Айсберг, сухари, соус Цезарь"
          }
          price={"505 С"}
          weight={"300 г"}
        />
        <CardSalad
          img={img5}
          title={"Фитнес"}
          text={
            "Состав: сыр Брынза, томаты, огурцы, морковь, редис, гранат, микс салатов, соус"
          }
          price={"230 С"}
          weight={"300 г"}
          icon1={icon1} // пщеница
          icon2={icon2} // листок
          //   icon3={icon3} лук
          //   icon4={icon4} повар
          icon5={icon5} // докрашенный листок
          //   icon6={icon6} бицепс
          icon7={icon7} // без молока
          //   icon8={icon8} // авакадо
          //   icon9={icon9} старбакс
        />
        <CardSalad
          img={img6}
          title={"Хумус с томатами"}
          text={
            "Состав: нут, хумус, томаты, болгарский перец, руккола, кунжут, багет на закваске"
          }
          price={"360 с"}
          weight={"300 г"}
          icon1={icon1} // пщеница
          icon2={icon2} // листок
          //   icon3={icon3} // лук
          icon4={icon4} // повар
          icon5={icon5} // докрашенный листок
          //   icon6={icon6}  // бицепс
          //   icon7={icon7} // без молока
          //   icon8={icon8} // авакадо
          //   icon9={icon9} старбакс
        />
        <CardSalad
          img={img7}
          title={"Со шпинатом и тофу"}
          text={
            "Состав: пшеничная мука, гречневая мука, яйцо, молоко, творог, сметана"
          }
          price={"300 с"}
          weight={"300 г"}
          icon1={icon1} // пщеница
          icon2={icon2} // листок
          //   icon3={icon3} // лук
          //   icon4={icon4} // повар
          icon5={icon5} // докрашенный листок
          //   icon6={icon6}  // бицепс
          icon7={icon7} // без молока
          //   icon8={icon8} // авакадо
          //   icon9={icon9} старбакс
        />
        <CardSalad
          img={img8}
          title={"Нисуаз"}
          text={
            "Состав: тунец, перепелиное яйцо, картофель, стручковая фасоль, томаты, фиолетовый лук, шпинат, соус"
          }
          price={"435 с"}
          weight={"300 г"}
          icon1={icon1} // пщеница
          //   icon2={icon2} // листок
          //   icon3={icon3} // лук
          //   icon4={icon4} // повар
          //   icon5={icon5} // докрашенный листок
          //   icon6={icon6}  // бицепс
          icon7={icon7} // без молока
          //   icon8={icon8} // авакадо
          icon9={icon9}
          старбакс
        />
        <CardSalad
          img={img9}
          title={"Зелёный салат Мишель"}
          text={
            "Состав: сыр Пармезан, перепелиное яйцо, авокадо, брокколи, кабачки , огурцы, зеленый горошек, микс салатов, кунжут, соус"
          }
          price={"485 с"}
          weight={"350 г"}
        />
        <CardSalad
          img={img10}
          title={"Тёплый салат с телятиной"}
          text={
            "Состав: телятина, сыр Брынза, томаты, шпинат, гранат, арахис, соус"
          }
          price={"495 с"}
          weight={"300 г"}
          //   icon1={icon1} // пщеница
          //   icon2={icon2} // листок
          //   icon3={icon3} // лук
          icon4={icon4} // повар
          //   icon5={icon5} // докрашенный листок
          //   icon6={icon6}  // бицепс
          icon7={icon7} // без молока
          //   icon8={icon8} // авакадо
          //   icon9={icon9} старбакс
        />
        <CardSalad
          img={img11}
          title={"С рукколой и креветками"}
          text={
            "Состав: тигровые креветки, сыр Пармезан, томаты, руккола, салат Айсберг, кедровый орех, бальзамический крем-соус  "
          }
          price={"605 с"}
          weight={"300 г"}
          //   icon1={icon1} // пщеница
          //   icon2={icon2} // листок
          //   icon3={icon3} // лук
          //   icon4={icon4} // повар
          //   icon5={icon5} // докрашенный листок
          icon6={icon6} // бицепс
          //   icon7={icon7} // без молока
          //   icon8={icon8} // авакадо
          //   icon9={icon9} старбакс
        />
        <CardSalad
          img={img12}
          title={"Салат с халуми"}
          text={
            "Состав: сыр Халуми, сыр Пармезан, томаты черри, огурцы, шпинат, арахис, соус"
          }
          price={"435 с"}
          weight={"300 г"}
          icon1={icon1} // пщеница
          icon2={icon2} // листок
          //   icon3={icon3} // лук
          //   icon4={icon4} // повар
          //   icon5={icon5} // докрашенный листок
          //   icon6={icon6}  // бицепс
          //   icon7={icon7} // без молока
          //   icon8={icon8} // авакадо
          //   icon9={icon9} старбакс
        />
        <CardSalad
          img={img13}
          title={"Салат с клубникой и моцареллой"}
          text={
            "Состав: сыр Моцарелла, клубника, базилик, шпинат, кедровый орех, бальзамический крем-соус  "
          }
          price={"605 с"}
          weight={"300 г"}
          icon1={icon1} // пщеница
          icon2={icon2} // листок
          //   icon3={icon3} // лук
          //   icon4={icon4} // повар
          //   icon5={icon5} // докрашенный листок
          //   icon6={icon6}  // бицепс
          //   icon7={icon7} // без молока
          //   icon8={icon8} // авакадо
          //   icon9={icon9} старбакс
        />
        <CardSalad
          img={img14}
          title={"Тартар из форели"}
          text={"Состав: форель, авокадо, каперсы, фиолетовый лук, лимон "}
          price={"865 с"}
          weight={"250 г"}
          icon1={icon1} // пщеница
          //   icon2={icon2} // листок
          //   icon3={icon3} // лук
          //   icon4={icon4} // повар
          //   icon5={icon5} // докрашенный листок
          icon6={icon6} // бицепс
          //   icon7={icon7} // без молока
          icon8={icon8} // авакадо
          //   icon9={icon9} старбакс
        />
      </div>
      {notF && (
        <div className="notf">
          <h1>УПС) Скоро все добавим : - )</h1>
        </div>
      )}
      <div style={{ marginBottom: "180px" }}></div>
    </>
  );
}

export default CardMenuSalad;
