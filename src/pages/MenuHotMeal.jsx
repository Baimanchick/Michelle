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
import img1 from "../images/hot/1.jpg";
import img2 from "../images/hot/2.jpg";
import img3 from "../images/hot/3.jpg";
import img4 from "../images/hot/4.jpg";
import img5 from "../images/hot/5.jpg";
import img6 from "../images/hot/6.jpg";
import img7 from "../images/hot/7.jpg";
import img8 from "../images/hot/8.jpg";
import img9 from "../images/hot/9.jpg";
import img10 from "../images/hot/10.svg";
import img11 from "../images/hot/11.jpg";
import img12 from "../images/hot/12.jpg";
import img13 from "../images/hot/13.jpg";
import img14 from "../images/hot/14.jpg";
import img15 from "../images/hot/15.jpg";
import img16 from "../images/hot/16.jpg";
import img17 from "../images/hot/17.jpg";
import img18 from "../images/hot/18.jpg";

import CardSalad from "../components/CardSalad";
import Advice from "../components/Advice";

function MenuHotMeal() {
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
            <div>ГОРЯЧИЕ БЛЮДА</div>
            <p>ИЗЫСКАННЫЕ</p>
          </div>
        </header>
        <div className="main-card-break">
          <CardSalad
            img={img1}
            title={"Фитнес курица с салатом"}
            text={"Состав: телятина, нут, картофель, соус Демиглас, зелень"}
            price={"1005 С"}
            weight={"550 г"}
            // icon1={icon1} // пщеница
            // icon2={icon2} // листок
            //   icon3={icon3} //лук
            icon4={icon4} //повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img2}
            title={"Медальоны из телятины с овощами хара"}
            text={
              "Состав: телятина, картофель , болгарский перец, лук, зелень, соус Демиглас"
            }
            price={"905 С"}
            weight={"400 г"}
            icon1={icon1} // пщеница
            // icon2={icon2} // листок
            icon3={icon3}
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img3}
            title={"Разбитый картофель с телятиной и грибами"}
            text={"Состав: телятина, картофель, грибы вёшенки, сливочный соус "}
            price={"435 С"}
            weight={"420 г"}
            icon1={icon1} // пщеница
            // icon2={icon2} // листок
            icon3={icon3}
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img4}
            title={"Медальоны из телятины под сливочным соусом и рисом"}
            text={"Состав: телятина, рис, зелень, сливочный соус  "}
            price={"1005 с"}
            weight={"350 г"}
            // icon1={icon1} // пщеница
            // icon2={icon2} // листок
            //   icon3={icon3} лук
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img5}
            title={"Судак с муссом из сельдерея"}
            text={
              "Состав: филе судака, сливки, томаты черри, сельдерей, кабачки, красный лук"
            }
            price={"605 с"}
            weight={"450 г"}
            icon1={icon1} // пщеница
            // icon2={icon2} // листок
            icon3={icon3}
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img6}
            title={"Креветки соте"}
            text={
              "Состав: тигровые креветки, шампиньоны, томаты черри, чеснок, лимон"
            }
            price={"765 с"}
            weight={"300 г"}
            icon1={icon1} // пщеница
            // icon2={icon2} // листок
            //   icon3={icon3} лук
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img7}
            title={"Креветки в чесночном соусе"}
            text={"Состав: тигровые креветки, лимон, чеснок, зелень"}
            price={"965 с"}
            weight={"220 г"}
            icon1={icon1} // пщеница
            // icon2={icon2} // листок
            //   icon3={icon3} лук
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            icon6={icon6}
            бицепс
            icon7={icon7} // без молока
            icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img8}
            title={"Форель с овощами гриль и томатным фондю"}
            text={
              "Состав: филе форели, картофель, кабачки, болгарский перец, cливки, сыр, томаты"
            }
            price={"915 с"}
            weight={"350 г"}
            icon1={icon1} // пщеница
            // icon2={icon2} // листок
            //   icon3={icon3} лук
            icon4={icon4}
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img9}
            title={"Форель с киноа под натуральным сливочным соусом"}
            text={
              "Состав: филе форели, киноа, томаты, икра летучей рыбы, сливочный соус"
            }
            price={"765 с"}
            weight={"350 г"}
            icon1={icon1} // пщеница
            // icon2={icon2} // листок
            //   icon3={icon3} лук
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            icon9={icon9}
          />
          <img src={img10} alt="" className="dinner-image" />
          <CardSalad
            img={img11}
            title={"Рибай с запеченным картофелем и салатом"}
            text={
              "Состав: рибай стейк, картофель, томаты черри, микс салатов, соус "
            }
            price={"1005 с"}
            weight={"400 г"}
            icon1={icon1} // пщеница
            // icon2={icon2} // листок
            //   icon3={icon3} лук
            icon4={icon4}
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img12}
            title={"Куриная голень с цветной капустой"}
            text={
              "Состав: куриная голень, цветная капуста, брокколи, сливочный соус "
            }
            price={"605 с"}
            weight={"500 г"}
            icon1={icon1} // пщеница
            // icon2={icon2} // листок
            //   icon3={icon3} лук
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img13}
            title={"Фитнес курица с салатом"}
            text={"Состав: куриная грудка, томаты, огурцы, микс салатов "}
            price={"360 с"}
            weight={"230 г"}
            icon1={icon1} // пщеница
            // icon2={icon2} // листок
            //   icon3={icon3} лук
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            icon6={icon6}
            icon7={icon7} // без молока
            icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img14}
            title={"Курица под сливочным соусом и рисом"}
            text={"Состав: куриная грудка, рис, сливочный соус"}
            price={"495 с"}
            weight={"340 г"}
            icon1={icon1} // пщеница
            // icon2={icon2} // листок
            //   icon3={icon3} лук
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img15}
            title={"Гречетто с куриными котлетами"}
            text={
              "Состав: куриные котлеты, гречка, сыр Пармезан, сливки, сливочное масло, грибы, зелень"
            }
            price={"535 С"}
            weight={"450 г"}
            icon1={icon1} // пщеница
            // icon2={icon2} // листок
            //   icon3={icon3} лук
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img16}
            title={"Вареники с картофелем под грибным соусом"}
            text={
              "Состав: тесто, картофель, сливки, сыр, шампиньоны, грецкий орех"
            }
            price={"390 С"}
            weight={"300 г"}
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
            img={img17}
            title={"Картофель с греческим йогуртом"}
            text={"Состав: картофель, греческий йогурт, зелень"}
            price={"290 с"}
            weight={"450 г"}
            // icon1={icon1} // пщеница
            icon2={icon2} // листок
            //   icon3={icon3} лук
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            icon9={icon9}
          />
          <CardSalad
            img={img18}
            title={"Запечённые грибы с сыром"}
            text={"Состав: шампиньоны, сыр, зелень "}
            price={"435 с"}
            weight={"300 г"}
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
          <Advice
            text={
              "В наших рецептах мы используем только натуральные сливки жирностью 33%"
            }
          />
        </div>
        <div style={{ paddingBottom: "200px" }}></div>
      </div>
    </>
  );
}

export default MenuHotMeal;
