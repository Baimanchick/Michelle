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
import img1 from "../images/soap/1.jpg";
import img2 from "../images/soap/2.jpg";
import img3 from "../images/soap/3.jpg";
import img4 from "../images/soap/4.jpg";
import img5 from "../images/soap/5.jpg";
import img6 from "../images/soap/6.jpg";
import img7 from "../images/soap/7.jpg";
import img8 from "../images/soap/8.jpg";
import img9 from "../images/soap/9.jpg";
import Advice from "../components/Advice";

function MenuSoap() {
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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigate = useNavigate();
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
              <h3>СУПЫ</h3>
              <h2>КЛАССИЧЕСКИЕ</h2>
            </div>
          </header>
          <div className="main-card-break">
            <CardSalad
              img={img1}
              title={"Грибной суп"}
              text={
                "Состав: шампиньоны, вёшенки, морковь, репчатый лук / сливки "
              }
              price={"230 С"}
              weight={"300 г"}
              icon1={icon1} // пщеница
              icon2={icon2} // листок
              //   icon3={icon3}// лук
              //   icon4={icon4}// повар
              // icon5={icon5} // докрашенный листок
              icon6={icon6} // бицепс
              // icon7={icon7} // без молока
              // icon8={icon8} // авакадо
              //   icon9={icon9} старбакс
            />
            <CardSalad
              img={img2}
              title={"Чечевичный суп"}
              text={
                "Состав: чечевица, морковь , репчатый лук, лимон, мята / сливки "
              }
              price={"230 С"}
              weight={"300 г"}
              icon1={icon1} // пщеница
              icon2={icon2} // листок
              //   icon3={icon3}// лук
              //   icon4={icon4}// повар
              // icon5={icon5} // докрашенный листок
              icon6={icon6} // бицепс
              // icon7={icon7} // без молока
              // icon8={icon8} // авакадо
              //   icon9={icon9} старбакс
            />
            <Advice text={"Крем-супы мы можем подавать без сливок"} />
            <CardSalad
              img={img3}
              title={"Броккольный с малосольной сёмгой"}
              text={
                "Состав: малосольная сёмга, брокколи, картофель, морковь, репчатый лук, сливки "
              }
              price={"555 с"}
              weight={"300 г"}
              style={{ top: "120px" }}
              icon1={icon1} // пщеница
              // icon2={icon2} // листок
              //   icon3={icon3}// лук
              //   icon4={icon4}// повар
              // icon5={icon5} // докрашенный листок
              icon6={icon6} // бицепс
              // icon7={icon7} // без молока
              // icon8={icon8} // авакадо
              //   icon9={icon9} старбакс
            />
            <div className="dinner-title">
              <span>НА БУЛЬОНЕ ㅤ</span>
            </div>
            <CardSalad
              img={img4}
              title={"Уха по-норвежски"}
              text={
                "Состав: форель, картофель, морковь, лимонный сок, сливки, зелень"
              }
              price={"380 с"}
              weight={"300 г"}
              icon1={icon1} // пщеница
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
              img={img5}
              title={"Похмельный суп"}
              text={
                "Состав: говядина, фунчоза, древесные грибы, болгарский перец, репчатый лук, зелень  "
              }
              price={"400 с"}
              weight={"700 г"}
              icon1={icon1} // пщеница
              // icon2={icon2} // листок
              //   icon3={icon3}// лук
              //   icon4={icon4}// повар
              // icon5={icon5} // докрашенный листок
              //   icon6={icon6}// бицепс
              icon7={icon7} // без молока
              // icon8={icon8} // авакадо
              //   icon9={icon9} старбакс
            />
            <CardSalad
              img={img6}
              title={"Том Ям"}
              text={
                "Состав: тигровые креветки, рис, кокосовое молоко, Том ям паста, шампиньоны, зелень"
              }
              price={"615 с"}
              weight={"350 г"}
              icon1={icon1} // пщеница
              // icon2={icon2} // листок
              //   icon3={icon3}// лук
              //   icon4={icon4}// повар
              // icon5={icon5} // докрашенный листок
              //   icon6={icon6}// бицепс
              icon7={icon7} // без молока
              // icon8={icon8} // авакадо
              //   icon9={icon9} старбакс
            />
            <CardSalad
              img={img7}
              title={"Фо бо"}
              text={
                "Состав: говядина, рисовая лапша, древесные грибы, морковь, фиолетовый лук, петрушка, мята, шпинат"
              }
              price={"505 с"}
              weight={"350 г"}
              icon1={icon1} // пщеница
              // icon2={icon2} // листок
              icon3={icon3} // лук≈
              //   icon4={icon4}// повар
              // icon5={icon5} // докрашенный листок
              //   icon6={icon6}// бицепс
              // icon7={icon7} // без молока
              // icon8={icon8} // авакадо
              //   icon9={icon9} старбакс
            />
            <CardSalad
              img={img8}
              title={"С машем"}
              text={
                "Состав: говядина, маш, картофель, болгарский перец, репчатый лук, зелень   "
              }
              price={"300 с"}
              weight={"300 г"}
              icon1={icon1} // пщеница
              // icon2={icon2} // листок
              //   icon3={icon3}// лук
              //   icon4={icon4}// повар
              // icon5={icon5} // докрашенный листок
              //   icon6={icon6}// бицепс
              icon7={icon7} // без молока
              // icon8={icon8} // авакадо
              //   icon9={icon9} старбакс
            />
            <CardSalad
              img={img9}
              title={"Суп куриный со звёздочками"}
              text={"Состав: куриная грудка, макароны, зелень "}
              price={"350 с"}
              weight={"500 г"}
              icon1={icon1} // пщеницa
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
                "Все наши супы подаются с гриссини собственного приготовления"
              }
            />
          </div>
          <div style={{ paddingBottom: "200px" }}></div>
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

export default MenuSoap;
