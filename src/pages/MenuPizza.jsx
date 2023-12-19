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
import img1 from "../images/pizza/1.jpg";
import img2 from "../images/pizza/2.jpg";
import img3 from "../images/pizza/3.jpg";
import img4 from "../images/pizza/4.jpg";
import img5 from "../images/pizza/5.jpg";
import img6 from "../images/pizza/6.jpg";
import img7 from "../images/pizza/7.jpg";
import img8 from "../images/pizza/8.jpg";
import img9 from "../images/pizza/9.jpg";
import img10 from "../images/pizza/10.svg";
import img11 from "../images/pizza/11.jpg";
import img12 from "../images/pizza/12.jpg";
import img13 from "../images/pizza/13.jpg";
import img14 from "../images/pizza/14.jpg";
import img15 from "../images/pizza/15.jpg";
import img16 from "../images/pizza/16.jpg";
import Advice from "../components/Advice";

function MenuPizza() {
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
            <h3>ПИЦЦА</h3>
            <h2>ИТАЛЬЯНСКАЯ</h2>
            <h4>30 см на тонком тесте</h4>
          </div>
        </header>
        <div className="main-card-break">
          <CardSalad
            img={img1}
            title={"4 сыра"}
            text={
              "Состав: сыр Моцарелла, Дор Блю, Чеддер, Пармезан, сливочный соус"
            }
            price={"705 с"}
            weight={""}
            // icon1={icon1} // пщеницa
            icon2={icon2} // листок
            //   icon3={icon3}// лук
            //   icon4={icon4}// повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6}// бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            icon9={icon9}
            старбакс
          />
          <CardSalad
            img={img2}
            title={"3 сыра с грушей и мёдом"}
            text={
              "Состав: сыр Моцарелла, Чеддер, Пармезан, груша, мёд, сливочный соус"
            }
            price={"665 с"}
            weight={""}
            // icon1={icon1} // пщеницa
            icon2={icon2} // листок
            //   icon3={icon3}// лук
            //   icon4={icon4}// повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6}// бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img3}
            title={"Мексика"}
            text={
              "Состав: куриная грудка, сыр Моцарелла, Фета, болгарский перец, халапеньо, красный лук, томатный соус"
            }
            price={"465 С"}
            weight={""}
            // icon1={icon1} // пщеницa
            // icon2={icon2} // листок
            icon3={icon3} // лук
            //   icon4={icon4}// повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6}// бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img4}
            title={"Курица-шпинат"}
            text={
              "Состав: куриная грудка, сыр Моцарелла, шпинат, сливочный соус"
            }
            price={"565 с"}
            weight={""}
            // icon1={icon1} // пщеницa
            // icon2={icon2} // листок
            //   icon3={icon3}// лук
            //   icon4={icon4}// повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6}// бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <Advice
            text={"Ко всем пиццам мы подаём наш фирменный бейби перчик"}
          />
          <CardSalad
            img={img5}
            title={"Пепперони"}
            text={"Состав: колбаса Пепперони, сыр Моцарелла, томатный соус"}
            price={"465 с"}
            weight={""}
            // icon1={icon1} // пщеницa
            // icon2={icon2} // листок
            //   icon3={icon3}// лук
            //   icon4={icon4}// повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6}// бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img6}
            title={"Пицца с креветками "}
            text={
              "Состав: тигровые креветки, сыр Моцарелла, маслины, арахис, руккола, петрушка,сливочный соус"
            }
            price={"865 C"}
            weight={""}
            // icon1={icon1} // пщеницa
            // icon2={icon2} // листок
            //   icon3={icon3}// лук
            //   icon4={icon4}// повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6}// бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <Advice
            text={
              "Пиццу в Италии готовят по Римскому и Неаполитанскому рецептам. Между этими двуми стилями существуют явные отличия: неаполитанскую пиццу готовят на более толстом тесте с выраженными бортами и томатным вкусом, тогда как римская пицца, которую мы подаём, использует меньшее содержание дрожжей, в результате чего она получается тонкой и хрустящей. Оба рецепта по-своему восхитительны, и их выбирают ценители пиццы во всём мире.  Приятного аппетита!"
            }
          />
          <div className="dinner-title">
            <span>БЕЗГЛЮТЕНОВАЯ ПИЦЦА</span>
          </div>
          <CardSalad
            img={img7}
            title={"Пепперони"}
            text={
              "Состав: колбаса Пепперони, сыр Моцарелла, цветная капуста, томатный соус"
            }
            price={"765 с"}
            weight={""}
            icon1={icon1} // пщеницa
            // icon2={icon2} // листок
            //   icon3={icon3}// лук
            //   icon4={icon4}// повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6}// бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            icon9={icon9}
            старбакс
          />
          <CardSalad
            img={img8}
            title={"Мексика"}
            text={
              "Состав: куриная грудка, сыр Моцарелла, Фета, цветная капуста, болгарский перец, халапеньо, красный лук, томатный соус"
            }
            price={"765 с"}
            weight={""}
            icon1={icon1} // пщеницa
            // icon2={icon2} // листок
            //   icon3={icon3}// лук
            //   icon4={icon4}// повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6}// бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            icon9={icon9}
          />
          <CardSalad
            img={img9}
            title={"Курица-шпинат"}
            text={
              "Состав: куриная грудка, сыр Моцарелла, цветная капуста, шпинат, сливочный соус"
            }
            price={"765 с"}
            weight={""}
            icon1={icon1} // пщеницa
            // icon2={icon2} // листок
            //   icon3={icon3}// лук
            //   icon4={icon4}// повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6}// бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            icon9={icon9}
          />
          <img src={img10} alt="" />
          <div className="dinner-title">
            <span>ПАСТАㅤㅤㅤㅤ</span>
          </div>
          <CardSalad
            img={img11}
            title={"Фетучини с курицей и грибами"}
            text={
              "Состав: паста фетучини, куриная грудка, сыр Пармезан, шампиньоны, сливочный соус "
            }
            price={"555 с"}
            weight={"350 г"}
            // icon1={icon1} // пщеницa
            // icon2={icon2} // листок
            //   icon3={icon3}// лук
            //   icon4={icon4}// повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6}// бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img12}
            title={"Фетучини с форелью"}
            text={
              "Состав: паста фетучини, филе форели, сыр Пармезан, брокколи, сливочный соус  "
            }
            price={"605 с"}
            weight={"350 г"}
            // icon1={icon1} // пщеницa
            // icon2={icon2} // листок
            //   icon3={icon3}// лук
            //   icon4={icon4}// повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6}// бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <Advice
            text={
              "Нашу пасту мы готовим Al Dente — дословный перевод с итальянского «на зубок», что подразумевает лёгкое прилипание пасты к зубам. Правильно сваренная паста Al Dente сохраняет внутреннюю твёрдость, а снаружи она мягкая."
            }
          />
          <CardSalad
            img={img13}
            title={"Спагетти Болоньезе"}
            text={
              "Состав: паста спагетти, говяжий фарш, сыр Пармезан, морковь, лук, томатный соус"
            }
            price={"435 с"}
            weight={"350 г"}
            // icon1={icon1} // пщеницa
            // icon2={icon2} // листок
            //   icon3={icon3}// лук
            icon4={icon4} // повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6}// бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img14}
            title={"Спагетти с креветками "}
            text={
              "Состав: паста спагетти, тигровые креветки, сыр Пармезан, томаты пилати, перец чили, томатный соус"
            }
            price={"665 с"}
            weight={"350 г"}
            // icon1={icon1} // пщеницa
            // icon2={icon2} // листок
            //   icon3={icon3}// лук
            icon4={icon4} // повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6}// бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img15}
            title={"Спагетти Веджи"}
            text={
              "Состав: паста спагетти, сыр Тофу, болгарский перец, лук, томатный соус"
            }
            price={"340 с"}
            weight={"350 г"}
            // icon1={icon1} // пщеницa
            icon2={icon2} // листок
            //   icon3={icon3}// лук
            //   icon4={icon4}// повар
            icon5={icon5} // докрашенный листок
            //   icon6={icon6}// бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img16}
            title={"Грин паста  с морепродуктами"}
            text={
              "Состав: филе форели, тигровые креветки, сыр, сливки, кабачки "
            }
            price={"715 с"}
            weight={"350 г"}
            icon1={icon1} // пщеницa
            // icon2={icon2} // листок
            //   icon3={icon3}// лук
            icon4={icon4} // повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6}// бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
        </div>
        <Advice
          text={
            "Спагетти мы можем приготовить из безглютеновой лапши. Глютен (содержится в пшенице) мешает работе ворсинок кишечника, отвечающих за функцию всасывания витаминов и полезных минералов из пищи! Приготовление безглютеновых позиций занимает больше стандартного времени."
          }
        />
        <div style={{ paddingBottom: "200px" }}></div>
      </div>
    </>
  );
}

export default MenuPizza;
