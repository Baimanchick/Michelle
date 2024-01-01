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
import axios from "axios";
import Test from "../routes/Test";
import { useLanguage } from "../functions/languageContext";

function MenuBaget() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [categoryChange, setCategoryChange] = useState(false);
  const [notF, setNotF] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dishes, setDishes] = useState([]);
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const res = await axios.get(
          `${
            selectedLanguage === "Русский"
              ? "https://michelle-kg.ru/dishes/"
              : selectedLanguage === "English"
              ? "https://michelle-kg.ru/englishdishes/"
              : selectedLanguage === "Кыргызча"
              ? "https://167.71.33.221/kyrgyzdishes/"
              : selectedLanguage === "Turkce"
              ? "https://167.71.33.221/turkishdishes/"
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
        return item.category === 5;
      case "English":
        return item.category === 4;
      case "Кыргызча":
        return item.category === 4;
      case "Turkce":
        return item.category === 4;
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
                  <div>БАГЕТ</div>
                </div>
              </header>
            ) : selectedLanguage === "English" ||
              selectedLanguage === "Turkce" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>BAGUETTES</div>
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

          {selectedLanguage === "Русский" ? (
            <Advice
              text={
                "Мы готовим паштет из нежного мяса курицы с добавлением ароматных трав"
              }
              style={{ marginTop: "20px" }}
            />
          ) : selectedLanguage === "English" ? (
            <Advice
              text={
                "Our pate is made of tender chicken meat with the addition of herbs."
              }
              style={{ marginTop: "20px" }}
            />
          ) : selectedLanguage === "Turkce" ? (
            <Advice
              text={
                "Our pate is made of tender chicken meat with the addition of herbs."
              }
              style={{ marginTop: "20px" }}
            />
          ) : selectedLanguage === "Кыргзча" ? (
            <Advice
              text={
                "Мы готовим паштет из нежного мяса курицы с добавлением ароматных трав"
              }
              style={{ marginTop: "20px" }}
            />
          ) : null}
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
