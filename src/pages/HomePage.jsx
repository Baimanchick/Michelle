import React, { useState, useEffect } from "react";
import "../css/home.scss";
import logoHome from "../images/else/Michelle Vector.svg";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

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

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className={`home-main-content ${isLoading ? "loading" : ""}`}>
      {isLoading ? (
        <div className="home-loading-container">
          <div className="home-loading-container">
            <div class="container">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
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
                  onClick={() => handleLanguageClick("Русский")}
                >
                  Русский
                </h2>
                <h2
                  style={{
                    color: selectedLanguage === "Кыргызча" ? "#f2cf11" : "#fff",
                  }}
                  onClick={() => handleLanguageClick("Кыргызча")}
                >
                  Кыргызча
                </h2>
                <h2
                  style={{
                    color: selectedLanguage === "English" ? "#f2cf11" : "#fff",
                  }}
                  onClick={() => handleLanguageClick("English")}
                >
                  English
                </h2>
                <h2
                  style={{
                    color: selectedLanguage === "Turkce" ? "#f2cf11" : "#fff",
                  }}
                  onClick={() => handleLanguageClick("Turkce")}
                >
                  Turkce
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
          {selectedLanguage && navigate("/categories")}
        </>
      )}
    </div>
  );
}

export default HomePage;
