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
              style={{ top: "170px" }}
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
              style={{ top: "155px" }}
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
              style={{ top: "145px" }}
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
              style={{ top: "155px" }}
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
              style={{ top: "155px" }}
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
              style={{ top: "165px" }}
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
              style={{ top: "165px" }}
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
              style={{ top: "165px" }}
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
              style={{ top: "165px" }}
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
              style={{ top: "165px" }}
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
              style={{ top: "165px" }}
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
              style={{ top: "165px" }}
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
              style={{ top: "175px" }}
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
              style={{ top: "175px" }}
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
              style={{ top: "175px" }}
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

export default MenuGar;
