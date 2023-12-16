import React, { useState, useEffect } from "react";
import "../css/home.scss";
import logoHome from "../images/Michelle Vector.svg";
import { useLocation, useNavigate } from "react-router-dom";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fakeApiCall = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(fakeApiCall);
  }, []);

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
      ) : null}
      {!isLoading ? (
        <div
          style={{
            display: selectedLanguage === "Русский" ? "none" : null,
          }}
          className="home-loading1-container"
        >
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
      ) : null}
      {selectedLanguage === "Русский" ? (
        <div className="home-main-content">
          <header className="home-header">
            <img src={logoHome} alt="Logo" />
          </header>
          <div className="home-titles-1">
            <span onClick={() => navigate("/menu")}>МЕНЮ</span>
            <p>О НАС</p>
            <p>ᨆ</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default HomePage;
