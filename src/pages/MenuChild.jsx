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
import img1 from "../images/child/1.jpg";
import img2 from "../images/child/2.jpg";
import img3 from "../images/child/3.jpg";
import img4 from "../images/child/4.jpg";
import img5 from "../images/child/5.jpg";
import img6 from "../images/child/6.jpg";
import img7 from "../images/child/7.jpg";
import img8 from "../images/child/8.jpg";
import Advice from "../components/Advice";
import { useLanguage } from "../functions/languageContext";
import axios from "axios";
import Test from "../routes/Test";

function MenuChild() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  let getCategory = localStorage.getItem("category");

  const [selectedCategory, setSelectedCategory] = useState(categories[Number(getCategory)]);
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
    getCategory = category.id
    localStorage.setItem("category", category.id)
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
            {selectedLanguage === "Русский"
            ? (
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
            ) : selectedLanguage === "English"
            ? (
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
