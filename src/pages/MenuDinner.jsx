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
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
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
              ? "http://167.71.33.221/dishes/"
              : selectedLanguage === "English"
              ? "http://167.71.33.221/englishdishes/"
              : selectedLanguage === "Кыргызча"
              ? ""
              : selectedLanguage === "Turkce"
              ? ""
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
        return item.category === 6;
      case "English":
        return item.category === null;
      case "Кыргызча":
        return item.category === null;
      case "Turkce":
        return item.category === null;
      default:
        return false;
    }
  });

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
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
            <SliderMenu onSelectCategory={handleSelectCategory} />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></div>
          </div>
          <header className="soap-header">
            <div className="soap-title-container">
              <h3>РОЛЛЫ / БАГЕТ / БУТЕРБРОДЫ</h3>
              <h2>ПАЛЬЧИКИ ОБЛИЖЕШЬ</h2>
            </div>
          </header>

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
            <img src={img13} alt="" />
            <img src={img17} alt="" />
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
