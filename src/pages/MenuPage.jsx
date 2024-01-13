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
  const [selectCategory, setCategory] = useState();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get(
          `${
            selectedLanguage === "Русский"
              ? "https://michelle-kg.ru/categories/"
              : selectedLanguage === "English"
              ? "https://michelle-kg.ru/englishcategories/"
              : selectedLanguage === "Кыргызча"
              ? "https://michelle-kg.ru/kyrgyzcategories/"
              : selectedLanguage === "Türkçe"
              ? "https://michelle-kg.ru/turkishcategories/"
              : null
          }`
        );

        const sortedCategories = res.data.sort((a, b) => a.number - b.number);

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

  const handleCategoryChange = (categoryId) => {
    if (categoryId !== undefined) {
      setCategory(categoryId);

      localStorage.setItem("category", JSON.stringify(categoryId));
    }
  };

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
          ) : selectedLanguage === "Türkçe" ? (
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
          ) : selectedLanguage === "Кыргызча" ? (
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
            <CardMenuNav
              title={
                selectedLanguage === "Русский"
                  ? "О НАС"
                  : selectedLanguage === "English"
                  ? "ABOUT US"
                  : selectedLanguage === "Кыргызча"
                  ? "БИЗ ЖӨНҮНДӨ"
                  : selectedLanguage === "Türkçe"
                  ? "HAKKIMIZDA"
                  : null
              }
              img={"https://nambafood.kg/image_by_id/152065"}
              link={"/about"}
              key={"234234"}
              onClick={() => console.log("about us!")}
            />
            {categoriesFetched.map((category) => {
              return (
                <CardMenuNav
                  title={category.title}
                  img={category.image}
                  link={category.link}
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
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
