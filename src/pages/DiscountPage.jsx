import React, { useEffect, useState } from "react";
import "../css/soap.scss";
import SliderMenu, { categories } from "../components/SliderMenu";
import { useNavigate } from "react-router-dom";
import imgTerTR from "../images/drinks/termos_TR.png";
import imgTerEN from "../images/drinks/termos_mobile_EN.png";
import imgTerRU from "../images/else/termos_mobile.png";
import imgTerKG from "../images/drinks/termos_kg.png";
import axios from "axios";
import { useLanguage } from "../functions/languageContext";
import ArrowLeft from "../components/ArrowLeft";

function PastaPage() {
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
        return item.category === 59;
      case "English":
        return item.category === 40;
      case "Кыргызча":
        return item.category === 42;
      case "Türkçe":
        return item.category === 40;
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
            {selectedLanguage === "Русский"
            ? (
              <>
                <header className="menu-salad-header">
                    <div className="menu-salad-title-container">
                    <div>СКИДКА -25% КОФЕ И ЧАЙ НА ВЫНОС</div>
                    </div>
                </header>
              </>
            ) : selectedLanguage === "Кыргызча" ? (
                <header className="menu-salad-header">
                    <div className="menu-salad-title-container">
                    <div>-25% АРЗАНДАТУУ КОФЕ ЖАНА ЧАЙГА</div>
                    </div>
                </header>
            ) : selectedLanguage === "English"
            ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>-25% DISCOUNT FOR TAKEAWAY COFFEE AND TEA</div>
                </div>
              </header>
            ) : selectedLanguage === "Türkçe" ? (
                <header className="menu-salad-header">
                    <div className="menu-salad-title-container">
                    <div>PAKET KAHVE VE ÇAYDA -25% İNDİRİM</div>
                    </div>
                </header>
            ) : null}
          </>
          <div className="salad-flex">
            
          </div>
          {selectedLanguage === "Русский" ? (
            <>
                <img className="coffe-img-2" src={imgTerRU} style={{ height: "auto" }} alt="" />
            </>
          ) : selectedLanguage === "English" ? (
            <>
                <img className="coffe-img-2" src={imgTerEN} style={{ height: "auto" }} alt="" />
            </>
          ) : selectedLanguage === "Türkçe" ? (
            <>
                <img className="coffe-img-2" src={imgTerTR} style={{ height: "auto" }} alt="" />
            </>
          ) : selectedLanguage === "Кыргызча" ? (
            <>
                <img className="coffe-img-2" src={imgTerKG} style={{ height: "auto" }} alt="" />
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

export default PastaPage;
