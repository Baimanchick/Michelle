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
import axios from "axios";
import Test from "../routes/Test";
import { useLanguage } from "../functions/languageContext";

function MenuHotMeal() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  let getCategory = localStorage.getItem("category");

  const [selectedCategory, setSelectedCategory] = useState(categories[Number(getCategory)]);
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
              ? "https://michelle-kg.ru/kyrgyzdishes/"
              : selectedLanguage === "Turkce"
              ? "https://michelle-kg.ru/turkishdishes/"
              : null
          }
          `
        );
        setDishes(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDishes();
  }, []);
  const filteredData = dishes.filter((item) => {
    switch (selectedLanguage) {
      case "Русский":
        return item.category === 7;
      case "English":
        return item.category === 7;
      case "Кыргызча":
        return item.category === 7;
      case "Turkce":
        return item.category === 7;
      default:
        return false;
    }
  });

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    getCategory = category.id
    localStorage.setItem("category", category.id)
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
            <SliderMenu onSelectCategory={handleSelectCategory} categoryI={Number(getCategory)} />
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
                  <div>ГОРЯЧИЕ БЛЮДА</div>
                  <p>ИЗЫСКАННЫЕ</p>
                </div>
              </header>
            ) : selectedLanguage === "English" ||
              selectedLanguage === "Turkce" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>MAIN DISHES EXQUISITE</div>
                </div>
              </header>
            ) : null}
          </>
          <header className="menu-salad-header">
            <div className="menu-salad-title-container"></div>
          </header>
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

            {selectedLanguage === "Русский" ? (
              <>
                <Advice
                  text={
                    "В наших рецептах мы используем только натуральные сливки жирностью 33%"
                  }
                />
                <img src={img10} alt="" />
              </>
            ) : selectedLanguage === "English" ? (
              <Advice
                text={
                  "In our recipes, we use natural liquid cream with 35% fat."
                }
              />
            ) : selectedLanguage === "Turkce" ? (
              <Advice
                text={
                  "In our recipes, we use natural liquid cream with 35% fat."
                }
              />
            ) : selectedLanguage === "Кыргзча" ? (
              <>
                <Advice
                  text={
                    "В наших рецептах мы используем только натуральные сливки жирностью 33%"
                  }
                />
                <img src={img10} alt="" />
              </>
            ) : null}
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

export default MenuHotMeal;
