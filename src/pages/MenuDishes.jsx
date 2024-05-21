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
            <h1 style={{ fontSize: "25px", textAlign: "center", marginBottom: "0px", fontWeight: "300", marginTop: "30px"}}>ЭРТЕҢ МЕНЕНКИ ТАМАК</h1>
            {selectedLanguage === "Кыргызча" ? (
              <header className="menu-header">
                <div className="menu-title-container">
                  <hr />
                  <h2 style={{ margin: "10px 0px 0px 0px" }}>КЛАССИКАЛЫК</h2>
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
                  <h2 style={{ marginBottom: "0px" }}>КЛАССИЧЕСКИЙ</h2>
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
                  <h2 style={{ marginBottom: "0px" }}>Classic</h2>
                  <hr />
                </div>
              </header>
            ) : selectedLanguage === "Türkçe" ? (
              <header className="menu-header">
                <div className="menu-title-container">
                  <hr />
                  <h2 style={{ marginBottom: "0px" }}>Kahvaltı</h2>
                  <hr />
                </div>
              </header>
            ) : null}
          </>

          <div className="menu-container" style={{ marginTop: "10px" }}>
            <div className="salad-flex" style={{ justifyContent: "space-between" }}>
              {filteredData.map((item, index) => (
                <div key={index} style={ index === 0 || index === 3 || index === 7 || index === 10 || index === 14 || index === 14 || index === 17 || index === 20 || index === 24 ? { display: "contents" } : {}}>
                  <div className="header-title-for-dishes">
                    <div className="category-title-for-dishes">{ index === 0 ? "БОТКО" : index === 3 ? "КУЙМАК" : index === 7 ? "ЭТ менен ЖУМУРТКА" : index === 10 ? 
                    <header className="menu-header">
                      <div className="menu-title-container">
                        <hr />
                        <h2 style={{ marginBottom: "0px" }}>КЫЗЫКТУУ</h2>
                        <hr />
                      </div>
                    </header> : index === 14 ? 
                      <header className="menu-header">
                      <div className="menu-title-container">
                        <hr />
                        <h2 style={{ marginBottom: "0px" }}>ПАЙДАЛУУ</h2>
                        <hr />
                      </div>
                    </header>
                    : index === 17 ? 
                    <header className="menu-header">
                      <div className="menu-title-container">
                        <hr />
                        <h2 style={{ marginBottom: "0px" }}>КЕТО</h2>
                        <hr />
                      </div>
                    </header>
                    : index === 20 ? 
                    <header className="menu-header">
                      <div className="menu-title-container">
                        <hr />
                        <h2 style={{ marginBottom: "0px" }}>КЫЗЫКТУУ</h2>
                        <hr />
                      </div>
                    </header>
                    : index === 24 ? 
                    <header className="menu-header">
                      <div className="menu-title-container">
                        <hr />
                        <h2 style={{ marginBottom: "0px" }}>ТАТТУУ</h2>
                        <hr />
                      </div>
                    </header>
                    : "" }</div>
                      <div className="category-small" style={ index === 0 || index === 7 ? { display: "none" } : {} }>{ index === 0 ? "" : index === 3 ? <span style={{ color: "#E1A304", fontWeight: "300" }}>БУУДАЙДАН ЖАНА КАРА КҮРҮЧТӨН</span> : index === 7 ? "" : index === 10 ? <span style={{ color: "#E1A304" }}>ЖАҢЫ ДҮЙНӨНҮ АЧЫҢЫЗ</span> : index === 14 ? <span style={{ color: "#E1A304", fontWeight: "300" }}>ФОРМАНЫ САКТОО ҮЧҮН</span> : index === 17 ? <span style={{ color: "#E1A304", fontWeight: "300" }}>ИДЕАЛГА УМТУЛГАНДАР ҮЧҮН</span> : index === 20 ? <span style={{ color: "#E1A304", fontWeight: "300" }}>Маанай үчүн</span> : index === 24 ? <span style={{ color: "#E1A304", fontWeight: "300" }}>Дүйнөлүк</span> : "" }</div>
                  </div>
                  <Test
                    data={item}
                    title={item.title}
                    img={item.image}
                    text={item.text}
                    weight={item.weight}
                    price={item.price}
                    icon={item.svgs}
                  />
                </div>
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
