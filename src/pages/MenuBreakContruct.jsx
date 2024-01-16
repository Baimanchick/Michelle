import React, { useEffect, useState } from "react";
import "../css/construct.css";
import { useNavigate } from "react-router-dom";
import SliderMenu, { categories } from "../components/SliderMenu";
import TeaSquare from "../components/TeaSquare";
import img1 from "../images/drinks/1.png";
import { useLanguage } from "../functions/languageContext";
import imgTerKG from "../images/drinks/termos_kg.png";
import imgTerTR from "../images/drinks/termos_TR.png";
import imgTerEN from "../images/drinks/termos_mobile_EN.png";
import imgContr from "../images/else/CE3A1638_plate 3 (16).png";
import Square from "../components/Square";
import ArrowLeft from "../components/ArrowLeft";

function MenuBreakContruct() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  let getCategory = localStorage.getItem("category");

  const [selectedCategory, setSelectedCategory] = useState(
    categories[Number(getCategory)]
  );
  const [categoryChange, setCategoryChange] = useState(false);
  const [notF, setNotF] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    getCategory = category.id;
    localStorage.setItem("category", category.id);
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

  return (
    <>
      {windowWidth <= 1000 ? (
        <div className="menu-main-content" style={{ zIndex: 2 }}>
          <div className="menu-stick">
            <SliderMenu
              onSelectCategory={handleSelectCategory}
              categoryI={Number(getCategory)}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></div>
          </div>
          <ArrowLeft />
          {selectedLanguage === "Русский" ? (
            <>
              <div className="absoulute-block">
                <img src={imgContr} className="main-img-contr" />
              </div>
              <div className="drinks-main" style={{ zIndex: 2 }}>
                <header className="tea-header">
                  <div className="tea-header-title" style={{ zIndex: 2 }}>
                    <h2 style={{ fontSize: "38px", width: "325px" }}>
                      КОНСТРУКТОР ЗАВТРАКА
                    </h2>
                    <div className="yellow-block">работает с 6:00 до 12:00</div>
                  </div>
                </header>

                <div className="block-dob">
                  <div className="dob">
                    <h3>2 ЯЙЦА</h3>
                    <span style={{ fontSize: "10px", textAlign: "center" }}>
                      (пашот / глазунья / скрэмбл / отварное / омлет)
                    </span>
                    <span
                      style={{
                        color: "#81B0B0",
                        fontSize: "14px",
                        width: "40px",
                      }}
                    >
                      80 C
                    </span>
                  </div>
                  <div className="dob">
                    <h3>Дополнительное яйцо</h3>
                    <span style={{ color: "#81B0B0", fontSize: "14px" }}>
                      + 45 C
                    </span>
                  </div>
                </div>
              </div>

              <div className="section2" style={{ marginTop: "25px" }}>
                <h1
                  style={{
                    fontSize: "23px",
                    color: "#E1A304",
                    fontWeight: "100",
                    textAlign: "center",
                  }}
                >
                  ДОПОЛНИТЬ НАЧИНКОЙ ПО ВКУСУ
                </h1>
                <header className="menu-header" style={{ paddingTop: "30px" }}>
                  <div className="menu-title-container">
                    <hr />
                    <h2 style={{ textAlign: "center", fontSize: "23px" }}>
                      ОВОЩИ
                    </h2>
                    <hr />
                  </div>
                </header>
                <div className="vegetables-grid">
                  <div className="d-f">
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Томаты Черри</div>
                        <div className="veg-price">60 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Томат</div>
                        <div className="veg-price">30 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Огурец</div>
                        <div className="veg-price">30 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Лук</div>
                        <div className="veg-price">30 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Кабачки</div>
                        <div className="veg-price">40 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">
                          Шампинь
                          <br />
                          оны
                        </div>
                        <div className="veg-price">50 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Авокадо</div>
                        <div className="veg-price">100 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Оливки/Маслины</div>
                        <div className="veg-price">75 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Халапеньо</div>
                        <div className="veg-price">40 c</div>
                      </div>
                      <div className="veg-weight">20 г</div>
                    </div>
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Фасоль в томате</div>
                        <div className="veg-price">80 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Микс трав</div>
                        <div className="veg-price">50 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Салат чукка</div>
                        <div className="veg-price">50 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                </div>
                <header className="menu-header" style={{ paddingTop: "30px" }}>
                  <div className="menu-title-container">
                    <hr />
                    <h2 style={{ textAlign: "center", fontSize: "23px" }}>
                      МЯСО И РЫБА
                    </h2>
                    <hr />
                  </div>
                </header>
                <div className="vegetables-grid">
                  <div className="d-f">
                    <div
                      className="veg-block"
                      style={{ background: "#F3998033" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">
                          Малосоль
                          <br />
                          ная сёмга
                        </div>
                        <div className="veg-price">160 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div
                      className="veg-block"
                      style={{ background: "#F3998033" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Охотничьи колбаски</div>
                        <div className="veg-price">70 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                </div>
                <header className="menu-header" style={{ paddingTop: "30px" }}>
                  <div className="menu-title-container">
                    <hr />
                    <h2 style={{ textAlign: "center", fontSize: "23px" }}>
                      СЫР
                    </h2>
                    <hr />
                  </div>
                </header>
                <div className="vegetables-grid">
                  <div className="d-f">
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB001A" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Брынза</div>
                        <div className="veg-price">55 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB001A" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Тильзитский</div>
                        <div className="veg-price">70 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB001A" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Творожный</div>
                        <div className="veg-price">80 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB001A" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">С плесенью</div>
                        <div className="veg-price">130 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB001A" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Чеддер</div>
                        <div className="veg-price">70 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB001A" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Пармезан</div>
                        <div className="veg-price">109 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                </div>
                <header className="menu-header" style={{ paddingTop: "30px" }}>
                  <div className="menu-title-container">
                    <hr />
                    <h2 style={{ textAlign: "center", fontSize: "23px" }}>
                      ХЛЕБ
                    </h2>
                    <hr />
                  </div>
                </header>
                <div className="vegetables-grid">
                  <div className="d-f">
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB0033" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Багет на закваске</div>
                        <div className="veg-price">110 c</div>
                      </div>
                      <div className="veg-weight">1 шт</div>
                    </div>
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB0033" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Тостерный хлеб</div>
                        <div className="veg-price">30 c</div>
                      </div>
                      <div className="veg-weight">2 кус</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB0033" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Гриссини</div>
                        <div className="veg-price">70 c</div>
                      </div>
                      <div className="veg-weight">2 шт</div>
                    </div>
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB0033" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Чёрный хлеб</div>
                        <div className="veg-price">80 c</div>
                      </div>
                      <div className="veg-weight">2 кус</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : selectedLanguage === "English" ? (
            <>
              <div className="absoulute-block">
                <img src={imgContr} className="main-img-contr" />
              </div>
              <div className="drinks-main" style={{ zIndex: 2 }}>
                <header className="tea-header">
                  <div className="tea-header-title" style={{ zIndex: 2 }}>
                    <h2 style={{ fontSize: "38px", width: "325px" }}>
                      Design your perfect breakfast
                    </h2>
                    <div className="yellow-block">
                      Available from 6:00 am to 12:00 pm
                    </div>
                  </div>
                </header>

                <div className="block-dob">
                  <div className="dob">
                    <h3>2 eggs</h3>
                    <span style={{ fontSize: "10px", textAlign: "center" }}>
                      (poached / fried / scrambled / boiled / omelet)
                    </span>
                    <span
                      style={{
                        color: "#81B0B0",
                        fontSize: "14px",
                        width: "40px",
                      }}
                    >
                      80 C
                    </span>
                  </div>
                  <div className="dob">
                    <h3>Extra egg</h3>
                    <span style={{ color: "#81B0B0", fontSize: "14px" }}>
                      + 45 C
                    </span>
                  </div>
                </div>
              </div>

              <div className="section2" style={{ marginTop: "25px" }}>
                <h1
                  style={{
                    fontSize: "23px",
                    color: "#E1A304",
                    fontWeight: "100",
                    textAlign: "center",
                  }}
                >
                  Choose your favorite option
                </h1>
                <header className="menu-header" style={{ paddingTop: "30px" }}>
                  <div className="menu-title-container">
                    <hr />
                    <h2 style={{ textAlign: "center", fontSize: "23px" }}>
                      Vegetables
                    </h2>
                    <hr />
                  </div>
                </header>
                <div className="vegetables-grid">
                  <div className="d-f">
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">CHERRY TOMATO</div>
                        <div className="veg-price">60 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">TOMATO</div>
                        <div className="veg-price">30 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">CUCUMBER</div>
                        <div className="veg-price">30 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">ONION</div>
                        <div className="veg-price">30 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Zucchini</div>
                        <div className="veg-price">40 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Champignons</div>
                        <div className="veg-price">50 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Avocado</div>
                        <div className="veg-price">100 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Black/green olives</div>
                        <div className="veg-price">75 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Jalapeno pepper</div>
                        <div className="veg-price">40 c</div>
                      </div>
                      <div className="veg-weight">20 г</div>
                    </div>
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Tomato beans</div>
                        <div className="veg-price">80 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Mixed green</div>
                        <div className="veg-price">50 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Seaweed</div>
                        <div className="veg-price">50 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                </div>
                <header className="menu-header" style={{ paddingTop: "30px" }}>
                  <div className="menu-title-container">
                    <hr />
                    <h2 style={{ textAlign: "center", fontSize: "23px" }}>
                      Meat & Fish
                    </h2>
                    <hr />
                  </div>
                </header>
                <div className="vegetables-grid">
                  <div className="d-f">
                    <div
                      className="veg-block"
                      style={{ background: "#F3998033" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Lightly salted salmon</div>
                        <div className="veg-price">160 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div
                      className="veg-block"
                      style={{ background: "#F3998033" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Hunter’s sausage</div>
                        <div className="veg-price">70 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                </div>
                <header className="menu-header" style={{ paddingTop: "30px" }}>
                  <div className="menu-title-container">
                    <hr />
                    <h2 style={{ textAlign: "center", fontSize: "23px" }}>
                      Cheese
                    </h2>
                    <hr />
                  </div>
                </header>
                <div className="vegetables-grid">
                  <div className="d-f">
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB001A" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Brynza cheese</div>
                        <div className="veg-price">55 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB001A" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Tilzit cheese</div>
                        <div className="veg-price">70 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB001A" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Cream cheese</div>
                        <div className="veg-price">80 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB001A" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Blue cheese</div>
                        <div className="veg-price">130 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB001A" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Cheddar cheese</div>
                        <div className="veg-price">70 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB001A" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Parmesan cheese</div>
                        <div className="veg-price">109 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                </div>
                <header className="menu-header" style={{ paddingTop: "30px" }}>
                  <div className="menu-title-container">
                    <hr />
                    <h2 style={{ textAlign: "center", fontSize: "23px" }}>
                      Bread
                    </h2>
                    <hr />
                  </div>
                </header>
                <div className="vegetables-grid">
                  <div className="d-f">
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB0033" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Sourdough baguette</div>
                        <div className="veg-price">110 c</div>
                      </div>
                      <div className="veg-weight">2 pieces</div>
                    </div>
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB0033" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Toasted bread</div>
                        <div className="veg-price">2 pieces</div>
                      </div>
                      <div className="veg-weight">2 кус</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB0033" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Grissini</div>
                        <div className="veg-price">70 c</div>
                      </div>
                      <div className="veg-weight">2 pieces</div>
                    </div>
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB0033" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Black bread</div>
                        <div className="veg-price">80 c</div>
                      </div>
                      <div className="veg-weight">2 pieces</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : selectedLanguage === "Türkçe" ? (
            <>
              <div className="absoulute-block">
                <img src={imgContr} className="main-img-contr" />
              </div>
              <div className="drinks-main" style={{ zIndex: 2 }}>
                <header className="tea-header">
                  <div className="tea-header-title" style={{ zIndex: 2 }}>
                    <h2 style={{ fontSize: "38px", width: "325px" }}>
                      KAHVALTI TASARIMCISI
                    </h2>
                    <div className="yellow-block">
                      6:00’dan 12:00’ye kadar çalişir
                    </div>
                  </div>
                </header>

                <div className="block-dob">
                  <div className="dob">
                    <h3>2 yumurta</h3>
                    <span style={{ fontSize: "10px", textAlign: "center" }}>
                      (poşe / sahanda / scramble / haşlanmış / omlet)
                    </span>
                    <span
                      style={{
                        color: "#81B0B0",
                        fontSize: "14px",
                        width: "40px",
                      }}
                    >
                      80 C
                    </span>
                  </div>
                  <div className="dob">
                    <h3>Ekstra yumurta</h3>
                    <span style={{ color: "#81B0B0", fontSize: "14px" }}>
                      + 45 C
                    </span>
                  </div>
                </div>
              </div>

              <div className="section2" style={{ marginTop: "25px" }}>
                <h1
                  style={{
                    fontSize: "23px",
                    color: "#E1A304",
                    fontWeight: "100",
                    textAlign: "center",
                  }}
                >
                  Tadınıza göre íçeríkle tamamlayın.
                </h1>
                <header className="menu-header" style={{ paddingTop: "30px" }}>
                  <div className="menu-title-container">
                    <hr />
                    <h2 style={{ textAlign: "center", fontSize: "23px" }}>
                      Sebzeler
                    </h2>
                    <hr />
                  </div>
                </header>
                <div className="vegetables-grid">
                  <div className="d-f">
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Çerí domateslerí</div>
                        <div className="veg-price">60 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">domatesler</div>
                        <div className="veg-price">30 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Salatalık</div>
                        <div className="veg-price">30 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Soğan</div>
                        <div className="veg-price">30 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Kabak</div>
                        <div className="veg-price">40 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Mantarlar</div>
                        <div className="veg-price">50 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Avokado</div>
                        <div className="veg-price">100 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Zeytín</div>
                        <div className="veg-price">75 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Jalapeno</div>
                        <div className="veg-price">40 c</div>
                      </div>
                      <div className="veg-weight">20 г</div>
                    </div>
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Domates soslu fasulye</div>
                        <div className="veg-price">80 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Karışık otlar</div>
                        <div className="veg-price">50 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Chukka salatası</div>
                        <div className="veg-price">50 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                </div>
                <header className="menu-header" style={{ paddingTop: "30px" }}>
                  <div className="menu-title-container">
                    <hr />
                    <h2 style={{ textAlign: "center", fontSize: "23px" }}>
                      Et ve Balik
                    </h2>
                    <hr />
                  </div>
                </header>
                <div className="vegetables-grid">
                  <div className="d-f">
                    <div
                      className="veg-block"
                      style={{ background: "#F3998033" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Hafíf tuzlu somon</div>
                        <div className="veg-price">160 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div
                      className="veg-block"
                      style={{ background: "#F3998033" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Avci sosíslerí</div>
                        <div className="veg-price">70 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                </div>
                <header className="menu-header" style={{ paddingTop: "30px" }}>
                  <div className="menu-title-container">
                    <hr />
                    <h2 style={{ textAlign: "center", fontSize: "23px" }}>
                      Peynír
                    </h2>
                    <hr />
                  </div>
                </header>
                <div className="vegetables-grid">
                  <div className="d-f">
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB001A" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Beyaz</div>
                        <div className="veg-price">55 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB001A" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Tílsít</div>
                        <div className="veg-price">70 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB001A" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Süzme</div>
                        <div className="veg-price">80 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB001A" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Rokfor</div>
                        <div className="veg-price">130 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB001A" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Çedder</div>
                        <div className="veg-price">70 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB001A" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Parmesan</div>
                        <div className="veg-price">109 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                </div>
                <header className="menu-header" style={{ paddingTop: "30px" }}>
                  <div className="menu-title-container">
                    <hr />
                    <h2 style={{ textAlign: "center", fontSize: "23px" }}>
                      Ekmek
                    </h2>
                    <hr />
                  </div>
                </header>
                <div className="vegetables-grid">
                  <div className="d-f">
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB0033" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Ekşí mayalı baget</div>
                        <div className="veg-price">110 c</div>
                      </div>
                      <div className="veg-weight">1 tane</div>
                    </div>
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB0033" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Tost ekmeğí</div>
                        <div className="veg-price">30 c</div>
                      </div>
                      <div className="veg-weight">2 dílím</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB0033" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Gríssíní</div>
                        <div className="veg-price">70 c</div>
                      </div>
                      <div className="veg-weight">2 tane</div>
                    </div>
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB0033" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Síyah ekmek</div>
                        <div className="veg-price">80 c</div>
                      </div>
                      <div className="veg-weight">2 dílím</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : selectedLanguage === "Кыргызча" ? (
            <>
              <div className="absoulute-block">
                <img src={imgContr} className="main-img-contr" />
              </div>
              <div className="drinks-main" style={{ zIndex: 2 }}>
                <header className="tea-header">
                  <div className="tea-header-title" style={{ zIndex: 2 }}>
                    <h2 style={{ fontSize: "38px", width: "325px" }}>
                      ЭртеҢки тамакты конструкция
                    </h2>
                    <div className="yellow-block">
                      саат 6:00дөн 12:00гө чейин иштейт
                    </div>
                  </div>
                </header>

                <div className="block-dob">
                  <div className="dob">
                    <h3>2 жумуртка</h3>
                    <span style={{ fontSize: "10px", textAlign: "center" }}>
                      (пашот / куурулган / скрэмбл / бышырылган / омлет)
                    </span>
                    <span
                      style={{
                        color: "#81B0B0",
                        fontSize: "14px",
                        width: "40px",
                      }}
                    >
                      80 C
                    </span>
                  </div>
                  <div className="dob">
                    <h3>Кошумча жумуртка</h3>
                    <span style={{ color: "#81B0B0", fontSize: "14px" }}>
                      + 45 C
                    </span>
                  </div>
                </div>
              </div>

              <div className="section2" style={{ marginTop: "25px" }}>
                <h1
                  style={{
                    fontSize: "23px",
                    color: "#E1A304",
                    fontWeight: "100",
                    textAlign: "center",
                  }}
                >
                  ТАТЫМЫНА ЖАРАША ИЧИН ТОЛУКТОО
                </h1>
                <header className="menu-header" style={{ paddingTop: "30px" }}>
                  <div className="menu-title-container">
                    <hr />
                    <h2 style={{ textAlign: "center", fontSize: "23px" }}>
                      Жашылчалар
                    </h2>
                    <hr />
                  </div>
                </header>
                <div className="vegetables-grid">
                  <div className="d-f">
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Черри томаттары</div>
                        <div className="veg-price">60 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Томат</div>
                        <div className="veg-price">30 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Бадыраң</div>
                        <div className="veg-price">30 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Пияз</div>
                        <div className="veg-price">30 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Кабачоктор</div>
                        <div className="veg-price">40 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">
                          Шампинь
                          <br />
                          ондор
                        </div>
                        <div className="veg-price">50 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Авокадо</div>
                        <div className="veg-price">100 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Зайтун / Кара зайтун</div>
                        <div className="veg-price">75 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Халапеньо</div>
                        <div className="veg-price">40 c</div>
                      </div>
                      <div className="veg-weight">20 г</div>
                    </div>
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Томаттагы буурчак</div>
                        <div className="veg-price">80 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Чөптөр аралашмасы</div>
                        <div className="veg-price">50 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div className="veg-block">
                      <div className="veg-p">
                        <div className="veg-title">Чукка салаты</div>
                        <div className="veg-price">50 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                </div>
                <header className="menu-header" style={{ paddingTop: "30px" }}>
                  <div className="menu-title-container">
                    <hr />
                    <h2 style={{ textAlign: "center", fontSize: "23px" }}>
                      Эт жана Балык
                    </h2>
                    <hr />
                  </div>
                </header>
                <div className="vegetables-grid">
                  <div className="d-f">
                    <div
                      className="veg-block"
                      style={{ background: "#F3998033" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">
                          Аз туздуу кызыл балык эти
                        </div>
                        <div className="veg-price">160 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div
                      className="veg-block"
                      style={{ background: "#F3998033" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Мергенчи колбасалары</div>
                        <div className="veg-price">70 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                </div>
                <header className="menu-header" style={{ paddingTop: "30px" }}>
                  <div className="menu-title-container">
                    <hr />
                    <h2 style={{ textAlign: "center", fontSize: "23px" }}>
                      СЫР
                    </h2>
                    <hr />
                  </div>
                </header>
                <div className="vegetables-grid">
                  <div className="d-f">
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB001A" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Брынза</div>
                        <div className="veg-price">55 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB001A" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Тильзиттик</div>
                        <div className="veg-price">70 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB001A" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Быштак сыры</div>
                        <div className="veg-price">80 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB001A" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Көгөргөн сыр</div>
                        <div className="veg-price">130 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB001A" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Чеддер</div>
                        <div className="veg-price">70 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB001A" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Пармезан</div>
                        <div className="veg-price">109 c</div>
                      </div>
                      <div className="veg-weight">30 г</div>
                    </div>
                  </div>
                </div>
                <header className="menu-header" style={{ paddingTop: "30px" }}>
                  <div className="menu-title-container">
                    <hr />
                    <h2 style={{ textAlign: "center", fontSize: "23px" }}>
                      Нан
                    </h2>
                    <hr />
                  </div>
                </header>
                <div className="vegetables-grid">
                  <div className="d-f">
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB0033" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Ачытылган багет</div>
                        <div className="veg-price">110 c</div>
                      </div>
                      <div className="veg-weight">1 шт</div>
                    </div>
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB0033" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Тостер наны</div>
                        <div className="veg-price">30 c</div>
                      </div>
                      <div className="veg-weight">2 кус</div>
                    </div>
                  </div>
                  <div className="d-f">
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB0033" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Гриссини</div>
                        <div className="veg-price">70 c</div>
                      </div>
                      <div className="veg-weight">2 шт</div>
                    </div>
                    <div
                      className="veg-block"
                      style={{ background: "#FBCB0033" }}
                    >
                      <div className="veg-p">
                        <div className="veg-title">Кара нан</div>
                        <div className="veg-price">80 c</div>
                      </div>
                      <div className="veg-weight">2 кус</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}

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

export default MenuBreakContruct;
