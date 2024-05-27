import React, { useEffect, useState } from "react";
import "../css/soap.scss";
import SliderMenu, { categories } from "../components/SliderMenu";
import { useNavigate } from "react-router-dom";
import Advice from "../components/Advice";
import { useLanguage } from "../functions/languageContext";
import axios from "axios";
import Test from "../routes/Test";
import ArrowLeft from "../components/ArrowLeft";

function MenuChild() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  let getCategory = localStorage.getItem("category");

  const [selectedCategory, setSelectedCategory] = useState(
    categories[Number(getCategory)]
  );
  const [categoryChange, setCategoryChange] = useState(false);
  const [notF, setNotF] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const [dishes, setDishes] = useState([]);
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
              : selectedLanguage === "Türkçe"
              ? "https://michelle-kg.ru/turkishdishes/"
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
        return item.category === 51;
      case "English":
        return item.category === 32;
      case "Кыргызча":
        return item.category === 34;
      case "Türkçe":
        return item.category === 32;
      default:
        return false;
    }
  });

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
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

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

          <>
            {selectedLanguage === "Русский" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>ДЕТСКОЕ МЕНЮ</div>
                </div>
              </header>
            ) : selectedLanguage === "Кыргызча" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>БАЛДАР МЕНЮСУ</div>
                </div>
              </header>
            ) : selectedLanguage === "English" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>KID'S MENU</div>
                </div>
              </header>
            ) : selectedLanguage === "Türkçe" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>ÇOCUK MENÜSÜ</div>
                </div>
              </header>
            ) : null}
          </>
          <div className="main-card-break"></div>
          <div style={{ paddingBottom: "200px" }}>
            <>
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
                <>
                  <Advice
                    text={
                      "Наша эко-посуда для детей выполнена полностью из натурального бамбука"
                    }
                    style={{ marginTop: "20px" }}
                  />
                </>
              ) : selectedLanguage === "English" ? (
                <>
                  <Advice
                    text={
                      "Our tableware for kids is crafted from 100% natural bamboo, making it an eco-friendly and sustainable option."
                    }
                    style={{ marginTop: "20px" }}
                  />
                </>
              ) : selectedLanguage === "Türkçe" ? (
                <>
                  <Advice
                    text={
                      "Çocuklar íçín eko-bulaşıklarımız tamamen doğal bambudan yapılmıştır"
                    }
                    style={{ marginTop: "20px" }}
                  />
                </>
              ) : selectedLanguage === "Кыргызча" ? (
                <>
                  <Advice
                    text={
                      "Балдар үчүн эко-идиш-аяктарыбыз толугу менен табигый бамбуктан жасалган"
                    }
                    style={{ marginTop: "20px" }}
                  />
                </>
              ) : null}
            </>
          </div>
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

export default MenuChild;
