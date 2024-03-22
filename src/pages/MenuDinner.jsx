import React, { useEffect, useState } from "react";
import "../css/soap.scss";
import SliderMenu, { categories } from "../components/SliderMenu";
import { useNavigate } from "react-router-dom";
import CardSalad from "../components/CardSalad";
import img13 from "../images/dinner/card-13.svg";
import axios from "axios";
import { useLanguage } from "../functions/languageContext";
import Test from "../routes/Test";
import ArrowLeft from "../components/ArrowLeft";
import Advice from "../components/Advice";

function MenuDinner() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  let getCategory = localStorage.getItem("category");

  let [selectedCategory, setSelectedCategory] = useState(
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
        return item.category === 46;
      case "English":
        return item.category === 26;
      case "Кыргызча":
        return item.category === 29;
      case "Türkçe":
        return item.category === 26;
      default:
        return false;
    }
  });

  const sortedData = filteredData.sort((a, b) => {
    const idA = a.id;
    const idB = b.id;

    if (selectedLanguage === "Русский") {
      if (idA === 173 || idA === 174) return 1;
      if (idB === 173 || idB === 174) return -1;
    } else if (selectedLanguage === "English") {
      if (idA === 177 || idA === 178) return 1;
      if (idB === 178 || idB === 177) return -1;
    } else if (selectedLanguage === "Türkçe") {
      if (idA === 178 || idA === 179) return 1;
      if (idB === 179 || idB === 178) return -1;
    } else if (selectedLanguage === "Кыргызча") {
      if (idA === 189 || idA === 179) return 1;
      if (idB === 179 || idB === 189) return -1;
    }

    return 0;
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
            {selectedLanguage === "Русский" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>РОЛЛЫ / БАГЕТ / БУТЕРБРОДЫ</div>
                </div>
              </header>
            ) : selectedLanguage === "Кыргызча" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>РОЛЛДОР / БАГЕТТЕР /БУТЕРБРОДДОР</div>
                </div>
              </header>
            ) : selectedLanguage === "English" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>ROLLS / BAGUETTE / SANDWICHES</div>
                  <span>Finger licking good</span>
                </div>
              </header>
            ) : selectedLanguage === "Türkçe" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>RULOLAR / BAGET / SANDVİÇLER</div>
                  <span>ÇOK LEZZETLİ</span>
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
                <img src={img13} alt="" />
              </>
            ) : selectedLanguage === "English" ? null : selectedLanguage ===
              "Türkçe" ? null : selectedLanguage === "Кыргзча" ? null : null}
          </div>
          {selectedLanguage === "Русский" ? (
            <Advice
              text={
                "Мы готовим паштет из нежного мяса курицы с добавлением ароматных трав"
              }
              style={{ marginTop: "20px" }}
            />
          ) : selectedLanguage === "English" ? (
            <Advice
              text={
                "Our pate is made of tender chicken meat with the addition of herbs."
              }
              style={{ marginTop: "20px" }}
            />
          ) : selectedLanguage === "Türkçe" ? (
            <Advice
              text={"Ezmemiz otlar ilavesiyle yumuşak tavuk etinden yapılır."}
              style={{ marginTop: "20px" }}
            />
          ) : selectedLanguage === "Кыргызча" ? (
            <Advice
              text={
                "Тооктун этинен жыпар жыттуу чөптөрдү кошуп, паста даярдайбыз"
              }
              style={{ marginTop: "20px" }}
            />
          ) : null}

          <div style={{ marginTop: "200px" }}>.</div>
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

export default MenuDinner;
