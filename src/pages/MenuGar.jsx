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
import { useLanguage } from "../functions/languageContext";
import axios from "axios";
import Test from "../routes/Test";

function MenuGar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [categoryChange, setCategoryChange] = useState(false);
  const [notF, setNotF] = useState(false);
  const [dishes, setDishes] = useState([]);
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const res = await axios.get(
          `${
            selectedLanguage === "Русский"
              ? "http://167.71.33.221/dishes/"
              : selectedLanguage === "English"
              ? "http://167.71.33.221/englishdishes/"
              : selectedLanguage === "Кыргызча"
              ? ""
              : selectedLanguage === "Turkce"
              ? ""
              : null
          }
          `
        );
        setDishes(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDishes();
  }, []);
  const filteredData = dishes.filter((item) => {
    switch (selectedLanguage) {
      case "Русский":
        return item.category === 11;
      case "English":
        return item.category === 10;
      case "Кыргызча":
        return item.category === null;
      case "Turkce":
        return item.category === null;
      default:
        return false;
    }
  });

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
          <>
            {selectedLanguage === "Русский" ||
            selectedLanguage === "Кыргызча" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>ГАРНИРЫ</div>
                </div>
              </header>
            ) : selectedLanguage === "English" ||
              selectedLanguage === "Turkce" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>SIDE DISHES</div>
                </div>
              </header>
            ) : null}
          </>
          <div className="salad-flex">
            {filteredData.map((item) => (
              <Test
                key={item.id}
                data={item}
                title={item.title}
                img={item.image}
                text={item.text}
                weight={item.weight}
                price={item.price}
                icon={item.svgs}
              />
            ))}
          </div>
          _<div style={{ paddingBottom: "200px" }}></div>
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
