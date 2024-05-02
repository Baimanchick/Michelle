import React, { useState, useEffect } from "react";
import "../css/home.scss";
import logoHome from "../images/else/Michelle Vector.svg";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../functions/languageContext";
import { Analytics } from "@vercel/analytics/react";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  useEffect(() => {
    const fakeApiCall = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(fakeApiCall);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   if (selectedLanguage) {
  //     navigate("/categories");
  //   }
  // }, [selectedLanguage, navigate]);

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div
      className={`home-main-content ${isLoading ? "loading" : ""} ${
        !isLoading ? "home-main-content-special" : ""
      } `}
    >
      {isLoading ? (
        <div className="home-loading-container">
          <div className="home-loading-container">
            <div className="container">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="home-title">ОСНОВАНО В 1993</div>
          </div>
        </div>
      ) : (
        <>
          {windowWidth <= 1000 ? (
            <div className="home-loading1-container">
              <header className="home-header">
                <img className="image-home-page" src={logoHome} alt="Logo" />
              </header>
              <div className="home-titles">
                <span>МЕНЮ</span>
              </div>
              <div className="home-lang-container">
                <h2
                  style={{
                    color: selectedLanguage === "Русский" ? "#f2cf11" : "#fff",
                  }}
                  onClick={() => {
                    handleLanguageClick("Русский");
                    navigate("/categories");
                  }}
                >
                  Русский
                </h2>
                <h2
                  style={{
                    color: selectedLanguage === "Кыргызча" ? "#f2cf11" : "#fff",
                  }}
                  onClick={() => {
                    handleLanguageClick("Кыргызча");
                    navigate("/categories");
                  }}
                >
                  Кыргызча
                </h2>
                <h2
                  style={{
                    color: selectedLanguage === "English" ? "#f2cf11" : "#fff",
                  }}
                  onClick={() => {
                    handleLanguageClick("English");
                    navigate("/categories");
                  }}
                >
                  English
                </h2>
                <h2
                  style={{
                    color: selectedLanguage === "Türkçe" ? "#f2cf11" : "#fff",
                  }}
                  onClick={() => {
                    handleLanguageClick("Türkçe");
                    navigate("/categories");
                  }}
                >
                  Türkçe
                </h2>
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
      )}
      <Analytics />
    </div>
  );
}

export default HomePage;
