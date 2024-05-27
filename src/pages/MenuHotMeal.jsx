import React, { useEffect, useState } from "react";
import "../css/menu.scss";
import SliderMenu, { categories } from "../components/SliderMenu";
import { useNavigate } from "react-router-dom";
import img10 from "../images/hot/10.svg";
import Advice from "../components/Advice";
import axios from "axios";
import Test from "../routes/Test";
import { useLanguage } from "../functions/languageContext";
import ArrowLeft from "../components/ArrowLeft";
import { ReactComponent as AdviceSVG } from "../images/dinner/advice-soup.svg"

function MenuHotMeal() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  let getCategory = localStorage.getItem("category");

  const [selectedCategory, setSelectedCategory] = useState(
    categories[Number(getCategory)]
  );
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
        return item.category === 47;
      case "English":
        return item.category === 27;
      case "Кыргызча":
        return item.category === 30;
      case "Türkçe":
        return item.category === 27;
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
                  <div>ГОРЯЧИЕ БЛЮДА</div>
                  <span>ИЗЫСКАННЫЕ</span>
                </div>
              </header>
            ) : selectedLanguage === "Кыргызча" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>ЫСЫК ТАМАКТАР</div>
                  <span>Өзгөчө даам менен</span>
                </div>
              </header>
            ) : selectedLanguage === "English" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>MAIN DISHES EXQUISITE</div>
                </div>
              </header>
            ) : selectedLanguage === "Türkçe" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>SICAK YEMEK</div>
                </div>
              </header>
            ) : null}
          </>
          <header className="menu-salad-header">
            <div className="menu-salad-title-container"></div>
          </header>
          <div className="salad-flex">
            {filteredData.map((item, index) => (
              <div key={index} style={ index === 6 ? { display: "contents" } : {} }>
                <Test
                  data={item}
                  title={item.title}
                  img={item.image}
                  text={item.text}
                  weight={item.weight}
                  price={item.price}
                  icon={item.svgs}
                />
                { index === 6 ? (
                  <AdviceSVG/>
                ) : (null) }
              </div>
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
            ) : selectedLanguage === "Türkçe" ? (
              <Advice
                text={"Tariflerimizde %35 yağlı doğal sıvı krema kullanıyoruz."}
              />
            ) : selectedLanguage === "Кыргызча" ? (
              <>
                <Advice
                  text={
                    "Биздин рецепттерде 35% майлуу табигый суюк кремди колдонобуз"
                  }
                />
                {/* <img src={img10} alt="" /> */}
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
