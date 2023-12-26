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
        return item.category === 7;
      case "English":
        return item.category === null;
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
          <header className="menu-salad-header">
            <div className="menu-salad-title-container">
              <div>ГОРЯЧИЕ БЛЮДА</div>
              <p>ИЗЫСКАННЫЕ</p>
            </div>
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
            <img src={img10} alt="" />
            <Advice
              text={
                "В наших рецептах мы используем только натуральные сливки жирностью 33%"
              }
            />
            <Advice
              text={"Ко всем пиццам мы подаём наш фирменный бейби перчик"}
            />
            <Advice
              text={
                "Пиццу в Италии готовят по Римскому и Неаполитанскому рецептам. Между этими двуми стилями существуют явные отличия: неаполитанскую пиццу готовят на более толстом тесте с выраженными бортами и томатным вкусом, тогда как римская пицца, которую мы подаём, использует меньшее содержание дрожжей, в результате чего она получается тонкой и хрустящей. Оба рецепта по-своему восхитительны, и их выбирают ценители пиццы во всём мире.  Приятного аппетита!"
              }
            />
            <Advice
              text={
                "Нашу пасту мы готовим Al Dente — дословный перевод с итальянского «на зубок», что подразумевает лёгкое прилипание пасты к зубам. Правильно сваренная паста Al Dente сохраняет внутреннюю твёрдость, а снаружи она мягкая."
              }
            />
            <Advice
              text={
                "Спагетти мы можем приготовить из безглютеновой лапши. Глютен (содержится в пшенице) мешает работе ворсинок кишечника, отвечающих за функцию всасывания витаминов и полезных минералов из пищи! Приготовление безглютеновых позиций занимает больше стандартного времени."
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

export default MenuHotMeal;
