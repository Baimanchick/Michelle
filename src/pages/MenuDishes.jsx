import React, { useState, useEffect } from "react";
import "../css/menu.scss";
import CardMenuBreakfast from "../components/CardMenuBreakfast";
import axios from "axios";
import { useLanguage } from "../functions/languageContext";
import Test from "../routes/Test";
import SliderMenu, { categories } from "../components/SliderMenu";
import ArrowLeft from "../components/ArrowLeft";

function MenuDishes() {
  const [isLoading, setIsLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dishes, setDishes] = useState([]);
  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  let getCategory = localStorage.getItem("category");

  const [selectedCategory, setSelectedCategory] = useState(
    categories[Number(getCategory)]
  );
  const [categoryChange, setCategoryChange] = useState(false);

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
        return item.category === 41;
      case "English":
        return item.category === 21;
      case "Кыргызча":
        return item.category === 24;
      case "Türkçe":
        return item.category === 22;
      default:
        return false;
    }
  });

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

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

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    getCategory = category.id;
    localStorage.setItem("category", category.id);
    setCategoryChange(true);
  };

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
            {selectedLanguage === "Кыргызча" ? (
              <header className="menu-header">
                <div className="menu-title-container">
                  <hr />
                  <h2>КЛАССИКАЛЫК</h2>
                  <hr />
                </div>
                <div className="menu-title-span">
                  <span>Жаңыланган</span>
                </div>
              </header>
            ) : selectedLanguage === "Русский" ? (
              <header className="menu-header">
                <div className="menu-title-container">
                  <hr />
                  <h2>КЛАССИЧЕСКИЙ</h2>
                  <hr />
                </div>
                <div className="menu-title-span">
                  <span>НА НОВЫЙ ЛАД</span>
                </div>
              </header>
            ) : selectedLanguage === "English" ? (
              <header className="menu-header">
                <div className="menu-title-container">
                  <hr />
                  <h2>Classic</h2>
                  <hr />
                </div>
              </header>
            ) : selectedLanguage === "Türkçe" ? (
              <header className="menu-header">
                <div className="menu-title-container">
                  <hr />
                  <h2>Kahvaltı</h2>
                  <hr />
                </div>
              </header>
            ) : null}
          </>

          <div className="menu-container">
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

export default MenuDishes;
