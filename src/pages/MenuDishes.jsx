import React, { useState, useEffect } from "react";
import "../css/menu.scss";
import CardMenuBreakfast from "../components/CardMenuBreakfast";
import axios from "axios";
import { useLanguage } from "../functions/languageContext";
import Test from "../routes/Test";

function MenuDishes() {
  const [isLoading, setIsLoading] = useState(true);
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
        return item.category === 2;
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

  return (
    <>
      {windowWidth <= 1000 ? (
        <div className="menu-main-content">
          <header className="menu-header">
            <div className="menu-title-container">
              <hr />
              <h2>КЛАССИЧЕСКИЕ</h2>
              <hr />
            </div>
            <div className="menu-title-span">
              <span>НА НОВЫЙ ЛАД</span>
            </div>
          </header>
          <div className="menu-container">
            <div className="menu-container-h2">
              <h2>КАША</h2>
            </div>
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
