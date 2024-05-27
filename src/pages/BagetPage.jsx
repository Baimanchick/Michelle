import React, { useEffect, useState } from "react";
import "../css/menu.scss";
import SliderMenu, { categories } from "../components/SliderMenu";
import img17 from "../images/dinner/card-17.svg";
import axios from "axios";
import Test from "../routes/Test";
import { useLanguage } from "../functions/languageContext";
import ArrowLeft from "../components/ArrowLeft";
import Advice from "../components/Advice";

function BagetPage() {
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
        return item.category === 61;
      case "English":
        return item.category === 42;
      case "Кыргызча":
        return item.category === 44;
      case "Türkçe":
        return item.category === 42;
      default:
        return false;
    }
  });

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

  return (
    <>
      {windowWidth <= 1000 ? (
        <div className="menu-main-content" style={{ marginBottom: "200px" }}>
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
                  <div>БАГЕТЫ</div>
                  <span style={{ color: "#E1A304" }}>НА ЗАКВАСКЕ</span>
                </div>
              </header>
            ) :
            selectedLanguage === "Кыргызча" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>БАГЕТТЕР</div>
                  <span style={{ color: "#E1A304" }}>АЧЫТКЫ МЕНЕН ЖАСАЛГАН</span>
                </div>
              </header>
            ) : selectedLanguage === "English" ? (
                <header className="menu-salad-header">
                    <div className="menu-salad-title-container">
                        <div>BAGUETTES</div>
                        <span style={{ color: "#E1A304" }}>SOURDOUGH</span>
                    </div>
                </header>
            ) :
              selectedLanguage === "Türkçe" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>BAGETLER</div>
                  <span style={{ color: "#E1A304" }}>EKŞİ MAYALI</span>
                </div>
              </header>
            ) : null}
          </>
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
            {selectedLanguage === "Русский" ? (
              <>
                <Advice
                  text={
                    "Мы готовим паштет из нежного мяса курицы с добавлением ароматных трав"
                  }
                  style={{ marginTop: "20px" }}
                />
              </>
            ) : selectedLanguage === "English" ? (
              <>
                <Advice
                  text={
                    "Our pate is made of tender chicken meat with the addition of herbs."
                  }
                  style={{ marginTop: "20px" }}
                />
              </>
            ) : selectedLanguage === "Türkçe" ? (
              <>
                <Advice
                  text={
                    "Biz kokulu otlar ekleyerek íhale tavuk etínden pate hazırlıyoruz"
                  }
                  style={{ marginTop: "20px" }}
                />
              </>
            ) : selectedLanguage === "Кыргызча" ? (
              <>
                <Advice
                  text={
                    "Биз паштетти назик тоок этинен жана жыпар жыттуу чөптөрдү кошуп даярдайбыз"
                  }
                  style={{ marginTop: "20px" }}
                />
              </>
            ) : null}
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

export default BagetPage;
