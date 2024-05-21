import React, { useEffect, useState } from "react";
import "../css/soap.scss";
import SliderMenu, { categories } from "../components/SliderMenu";
import { useNavigate } from "react-router-dom";
import Advice from "../components/Advice";
import axios from "axios";
import Test from "../routes/Test";
import { useLanguage } from "../functions/languageContext";
import ArrowLeft from "../components/ArrowLeft";
import { ReactComponent as Advice1 } from "../images/pizza/Frame 4.svg";
import { ReactComponent as Advice2 } from "../images/pizza/Frame 5.svg";
function MenuPizza() {
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
        return item.category === 48;
      case "English":
        return item.category === 29;
      case "Кыргызча":
        return item.category === 31;
      case "Türkçe":
        return item.category === 29;
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
            {selectedLanguage === "Русский" ||
            selectedLanguage === "Кыргызча" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>ПИЦЦА</div>
                </div>
              </header>
            ) : selectedLanguage === "English" ||
              selectedLanguage === "Türkçe" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>PIZZA</div>
                </div>
              </header>
            ) : null}
          </>
          <header className="menu-header">
            <div className="menu-title-container">
              <hr style={{ width: "100%" }} />
              <h2 style={{ margin: "10px 0px 0px 0px", fontSize: "23px" }}>ИТАЛИЯЛЫК</h2>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="menu-title-span">
              <span>30 см жука камырда жасалган</span>
            </div>
          </header>
          <div className="salad-flex">
            {filteredData.map((item, index) => (
              <div key={index} style={ index === 3 || index === 5 || index === 6 ? { display: "contents" } : {} }>
                { index === 6 ? (
                  <header className="menu-header">
                    <div className="menu-title-container">
                      <hr style={{ width: "100%" }} />
                      <h2 style={{ margin: "10px 0px 0px 0px" }}>ШОРПОДО ЖАСАЛГАН</h2>
                      <hr style={{ width: "100%" }} />
                    </div>
                    {/* <div className="menu-title-span">
                      <span>Жаңыланган</span>
                    </div> */}
                  </header>
                ) : (null) }
                <Test
                  data={item}
                  title={item.title}
                  img={item.image}
                  text={item.text}
                  weight={item.weight}
                  price={item.price}
                  icon={item.svgs}
                />
                { index === 3 ? (
                  <Advice1/>
                ) : (null) }
                { index === 5 ? (
                  <Advice2/>
                ) : (null) }
              </div>
            ))}
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

export default MenuPizza;
