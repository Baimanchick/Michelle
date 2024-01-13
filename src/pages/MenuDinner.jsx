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
import img1 from "../images/dinner/card-1.jpg";
import img2 from "../images/dinner/card-2.jpg";
import img3 from "../images/dinner/card-3.jpg";
import img4 from "../images/dinner/card-4.jpg";
import img5 from "../images/dinner/card-5.jpg";
import img6 from "../images/dinner/card-6.jpg";
import img7 from "../images/dinner/card-7.jpg";
import img8 from "../images/dinner/card-8.jpg";
import img9 from "../images/dinner/card-9.jpg";
import img10 from "../images/dinner/card-10.jpg";
import img11 from "../images/dinner/card-11.jpg";
import img12 from "../images/dinner/card-12.jpg";
import img13 from "../images/dinner/card-13.svg";
import img14 from "../images/dinner/card-14.jpg";
import img15 from "../images/dinner/card-15.jpg";
import img16 from "../images/dinner/card-16.jpg";
import img17 from "../images/dinner/card-17.svg";
import img18 from "../images/dinner/card-18.jpg";
import img19 from "../images/dinner/card-19.jpg";
import axios from "axios";
import { useLanguage } from "../functions/languageContext";
import Test from "../routes/Test";

function MenuDinner() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const getCategory = localStorage.getItem("category");

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
          <>
            {selectedLanguage === "Русский" ||
            selectedLanguage === "Кыргызча" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>РОЛЛЫ / БАГЕТ / БУТЕРБРОДЫ</div>
                </div>
              </header>
            ) : selectedLanguage === "English" ||
              selectedLanguage === "Türkçe" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>ROLLS / BAGUETTE / SANDWICHES</div>
                  <span>Finger licking good</span>
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
                <img src={img17} alt="" />
              </>
            ) : selectedLanguage === "English" ? null : selectedLanguage ===
              "Türkçe" ? null : selectedLanguage === "Кыргызча" ? (
              <>
                <img src={img13} alt="" />
                <img src={img17} alt="" />
              </>
            ) : null}
          </div>

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
