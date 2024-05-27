import React, { useEffect, useState } from "react";
import "../css/soap.scss";
import SliderMenu, { categories } from "../components/SliderMenu";
import { useNavigate } from "react-router-dom";
import CardSalad from "../components/CardSalad";
import icon1 from "../images/svgs/Пшеница.svg";
import icon2 from "../images/svgs/Листок.svg";
import icon3 from "../images/svgs/Лук.svg";
import icon4 from "../images/svgs/Повар.svg";
import icon5 from "../images/svgs/докрашенный листок.svg";
import icon6 from "../images/svgs/бицепс.svg";
import icon7 from "../images/svgs/без молока.svg";
import icon8 from "../images/svgs/авакадо.svg";
import icon9 from "../images/svgs/старбакс.svg";
import img1 from "../images/soap/1.jpg";
import img2 from "../images/soap/2.jpg";
import img3 from "../images/soap/3.jpg";
import img4 from "../images/soap/4.jpg";
import img5 from "../images/soap/5.jpg";
import img6 from "../images/soap/6.jpg";
import img7 from "../images/soap/7.jpg";
import img8 from "../images/soap/8.jpg";
import img9 from "../images/soap/9.jpg";
import Advice from "../components/Advice";
import imgAdviceTR from "../images/soap/card_1_breakfast (1).png"
import imgAdviceKG from "../images/soap/kgs.png"
import imgAdviceRU from "../images/soap/rus(4).png"
import imgAdviceENG from "../images/soap/card_1_breakfast (3).png"
import axios from "axios";
import Test from "../routes/Test";
import { useLanguage } from "../functions/languageContext";
import ArrowLeft from "../components/ArrowLeft";

function MenuSoap() {
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
        return item.category === 45;
      case "English":
        return item.category === 28;
      case "Кыргызча":
        return item.category === 28;
      case "Türkçe":
        return item.category === 28;
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
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigate = useNavigate();
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
                  <div>СУПЫ</div>
                  <span>КРЕМОВЫЕ</span>
                </div>
              </header>
            ) : selectedLanguage === "Кыргызча" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>ШОРПОЛОР</div>
                  <span>каймактуу</span>
                </div>
              </header>
            ) : selectedLanguage === "English" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>SOUPS</div>
                  <span>CREAM SOUP</span>
                </div>
              </header>
            ) : selectedLanguage === "Türkçe" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>ÇORBALAR</div>
                  <span>KREMALI</span>
                </div>
              </header>
            ) : null}
          </>
          <div className="salad-flex" style={{ justifyContent: "space-between" }}>
            {filteredData.map((item, index) => (
              <div key={index} style={ index === 1 || index === 3 ? { display: "contents" } : {} }>
                { index === 3 ? (
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
                { index === 1 ? (
                  <Advice
                    text={"Каймактуу шорполорду каймак кошпой бере алабыз"}
                  />
                ) : (null) }
              </div>
            ))}
          </div>
          <>
            {selectedLanguage === "Русский"
             ? (
              <img src={imgAdviceRU} alt="img" style={{ paddingTop: "50px" }} />
            ) : selectedLanguage === "Кыргызча" ? (
              <img src={imgAdviceKG} alt="img" style={{ paddingTop: "50px" }} />
            ) : selectedLanguage === "English"
            ? (
              <img src={imgAdviceENG} alt="img" style={{ paddingTop: "50px" }} />
            ) : selectedLanguage === "Türkçe" ? (
              <img src={imgAdviceTR} alt="img" style={{ paddingTop: "50px" }} />
            ) : null}
          </>
          <div style={{ paddingBottom: "150px" }}></div>
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

export default MenuSoap;
