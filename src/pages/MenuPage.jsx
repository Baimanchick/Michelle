import React, { useEffect, useState } from "react";
import "../css/MenuPage.css";
import logo from "../images/else/Michelle Vector.svg";
import burger from "../images/else/Group 115.svg";
import arrowleft from "../images/else/Group 118.svg";
import arrowright from "../images/else/Group 117.svg";
import SliderMenu, { categories } from "../components/SliderMenu";
import FullscreenMenu from "../components/FullscreenMenu";
import { useNavigate } from "react-router-dom";
import CardMenu from "../components/CardMenu";
import CardMenuNav from "../components/CardMenuNav";
import axios from "axios";
import { useLanguage } from "../functions/languageContext";

function MenuPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [categoriesFetched, setCategoriesFetched] = useState([]);
  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get(
          `${
            selectedLanguage === "Русский"
              ? "http://167.71.33.221/categories/"
              : selectedLanguage === "English"
              ? "http://167.71.33.221/englishcategories/"
              : selectedLanguage === "Кыргызча"
              ? ""
              : selectedLanguage === "Turkce"
              ? ""
              : null
          }`
        );

        const sortedCategories = res.data.sort((a, b) => {
          if (a.title === "Новогоднее Меню") return -1;
          if (b.title === "Новогоднее Меню") return 1;
          if (a.title === "NEW YEAR DISH") return -1;
          if (b.title === "NEW YEAR DISH") return 1;
          return 0;
        });

        setCategoriesFetched(sortedCategories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategory();
  }, []);

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
        <>
          {selectedLanguage === "Русский" ? (
            <>
              <div
                style={{
                  fontSize: "38px",
                  textAlign: "center",
                  marginTop: "50px",
                }}
              >
                МЕНЮ
              </div>
            </>
          ) : selectedLanguage === "English" ? (
            <>
              <div
                style={{
                  fontSize: "38px",
                  textAlign: "center",
                  marginTop: "50px",
                }}
              >
                MENU
              </div>
            </>
          ) : selectedLanguage === "Turkce" ? (
            <>
              <div
                style={{
                  fontSize: "38px",
                  textAlign: "center",
                  marginTop: "50px",
                }}
              >
                MENU
              </div>
            </>
          ) : selectedLanguage === "Кыргзча" ? (
            <>
              <div
                style={{
                  fontSize: "38px",
                  textAlign: "center",
                  marginTop: "50px",
                }}
              >
                МЕНЮ
              </div>
            </>
          ) : null}

          <div className="block-nav-menu">
            {categoriesFetched.map((category) => {
              return (
                <CardMenuNav
                  title={category.title}
                  img={category.image}
                  link={category.link}
                  key={category.id} // Use a unique key, e.g., category.id
                />
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className="thousand-px">
            <h2>
              Данный сайт не поддерживает экраны больше 1000 px, пожалуйста
              уменьшите ваш экран, либо зайдите через мобильное устройство
            </h2>
          </div>
        </>
      )}
    </>
  );
}

export default MenuPage;
