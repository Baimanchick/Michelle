import React, { useEffect, useState } from "react";
import "../css/coffe.scss";
import SliderMenu, { categories } from "../components/SliderMenu";
import { useNavigate } from "react-router-dom";
import Square from "../components/Square";
import squareI from "../images/coffe/Vector.svg";
import LongSqaure from "../components/LongSquare";
import img1 from "../images/coffe/image-1.png";
import imgEN from "../images/coffe/card_1_breakfast.png";
import imgTR from "../images/coffe/Frame 5.jpg";
import imgKG from "../images/coffe/Frame 5.png";
import img2 from "../images/coffe/image-2.png";
import img3 from "../images/coffe/card_1_breakfast.png";
import ArrowLeft from "../components/ArrowLeft";
import imgMilkTR from "../images/else/card_1_breakfast (2).png"

import { useLanguage } from "../functions/languageContext";

function MenuCoffe() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  let getCategory = localStorage.getItem("category");

  const [selectedCategory, setSelectedCategory] = useState(
    categories[Number(getCategory)]
  );
  const [categoryChange, setCategoryChange] = useState(false);
  const [notF, setNotF] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

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
      {windowWidth < 1000 ? (
        <div className="coffe-main-content">
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
                  <div>КОФЕ</div>
                  <span>БОДРЯЩИЙ КОФЕ</span>
                </div>
              </header>
            ) : selectedLanguage === "Кыргызча" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>КОФЕ</div>
                  <span>СЕРГИТҮҮЧҮ КОФЕ</span>
                </div>
              </header>
            ) : selectedLanguage === "English" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>COFFE</div>
                </div>
              </header>
            ) : selectedLanguage === "Türkçe" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>KAHVE</div>
                </div>
              </header>
            ) : null}
          </>

          {selectedLanguage === "Русский" ? (
            <div className="square-main-content">
              {/* <img className="coffe-img-2" src={img2} alt="" /> */}
              <Square title={"Эспрессо"} weight={"40 мл"} price={"175 с"} />
              <Square
                title={"Американо"}
                weight={"200/400 мл"}
                price={"140/190 с"}
              />
              <Square
                title={"Капучино"}
                weight={"200/400 мл"}
                price={"190/240 с"}
              />
              <Square
                title={"Латте"}
                weight={"200/400 мл"}
                price={"190/260 с"}
              />
              <Square title={"Мокко"} weight={"200 мл"} price={"260 с"} />
              <Square title={"Флэт Уайт"} weight={"200 мл"} price={"260 с"} />
              <LongSqaure
                title={"Латте крем-брюле маршмеллоу"}
                weight={"200 мл"}
                price={"340 c"}
                squareI={squareI}
              />
              <LongSqaure
                title={"Каймак менен бадам латте"}
                weight={"200 мл"}
                price={"340 c"}
                squareI={squareI}
              />
              <LongSqaure
                title={"Банан-карамельдүү капучино"}
                weight={"200/400 мл"}
                price={"230/280 с"}
                squareI={squareI}
              />
              <LongSqaure
                title={"Эспрессо тоник"}
                weight={"250 мл"}
                price={"255 с"}
              />
              <Square
                title={"Айс капучино"}
                weight={"350 мл"}
                price={"260 с"}
              />
              <Square title={"Айс латте"} weight={"350 мл"} price={"280 с"} />
              <Square
                title={"Айс американо"}
                weight={"350 мл"}
                price={"200 с"}
              />
              <Square
                title={"Фраппучино"}
                weight={"350 мл"}
                price={"340 с"}
                squareI={squareI}
              />
              <LongSqaure
                title={"Апельсин ширесинде жасалган бамбл кофе"}
                weight={"250 мл"}
                price={"210/310 с"}
                squareI={squareI}
              />
              <Square title={"Раф кофе"} weight={"330 мл"} price={"290 с"} />
              <Square
                title={"Эспрессо экстра шот"}
                weight={"25 мл"}
                price={"70 с"}
              />
              <Square title={"Айриш кофе"} weight={"250 мл"} price={"310 с"} />
              <Square title={"Фреш кофе"} weight={"200 мл"} price={"310 с"} />
              <LongSqaure
                title={"Аффогато алколдуу/ алкоголсуз"}
                weight={"200 мл"}
                price={"360/550 с"}
                squareI={squareI}
              />
              <div className="menu-coffe-images">
                <img className="coffe-img" src={img1} alt="" />
              </div>
            </div>
          ) : selectedLanguage === "English" ? (
            <div className="square-main-content">
              {/* <img className="coffe-img-2" src={imgTerEN} alt="" /> */}
              <Square title={"Espresso"} weight={"40 ml"} price={"175 KGS"} />
              <Square
                title={"Americano"}
                weight={"200/400 ml"}
                price={"140/190 KGS"}
              />
              <Square
                title={"Cappuccino"}
                weight={"200/400 ml"}
                price={"190/240 KGS"}
              />
              <Square
                title={"Latte"}
                weight={"200/400 ml"}
                price={"190/260 KGS"}
              />
              <Square title={"Mocha"} weight={"200 ml"} price={"260 KGS"} />
              <Square
                title={"Flat white"}
                weight={"200 ml"}
                price={"260 KGS"}
              />
              <LongSqaure
                title={"Latte creme brulee marshmallow "}
                weight={"200 ml"}
                price={"340 KGS"}
                squareI={squareI}
              />
              <LongSqaure
                title={"Almond latte with whipped"}
                weight={"200 ml"}
                price={"340 KGS"}
                squareI={squareI}
              />
              <LongSqaure
                title={"Cream banana-caramel"}
                weight={"200/400 ml"}
                price={"230/280 KGS"}
                squareI={squareI}
              />
              <LongSqaure
                title={"Espresso-tonik"}
                weight={"250 ml"}
                price={"255 KGS"}
              />
              <Square
                title={"Iced cappuccino"}
                weight={"350 ml"}
                price={"260 KGS"}
              />
              <Square
                title={"Iced latte"}
                weight={"350 ml"}
                price={"280 KGS"}
              />
              <Square
                title={"Iced americano"}
                weight={"350 ml"}
                price={"200 KGS"}
              />
              <Square
                title={"Frappuccino"}
                weight={"350 ml"}
                price={"340 KGS"}
                squareI={squareI}
              />
              <LongSqaure
                title={"Bumble coffee with orange juice/ fresh orange juice"}
                weight={"250 ml"}
                price={"210/310 KGS"}
                squareI={squareI}
              />
              <Square
                title={"Raf coffee"}
                weight={"330 ml"}
                price={"290 KGS"}
              />
              <Square
                title={"Espresso extra shot"}
                weight={"25 ml"}
                price={"70 KGS"}
              />
              <Square
                title={"Irish coffee"}
                weight={"250 ml"}
                price={"310 KGS"}
              />
              <Square
                title={"Fresh coffee"}
                weight={"200 ml"}
                price={"310 KGS"}
              />
              <LongSqaure
                title={"Affogato / with whiskey"}
                weight={"200 ml"}
                price={"360/550 KGS"}
                squareI={squareI}
              />
              <img src={img3} alt="" />
            </div>
          ) : selectedLanguage === "Türkçe" ? (
            <div className="square-main-content">
              {/* <img className="coffe-img-2" src={imgTerTR} alt="" /> */}
              <Square title={"Espresso"} weight={"40 ml"} price={"175 KGS"} />
              <Square
                title={"Americano"}
                weight={"200/400 ml"}
                price={"140/190 KGS"}
              />
              <Square
                title={"Cappuccino"}
                weight={"200/400 ml"}
                price={"190/240 KGS"}
              />
              <Square
                title={"Latte"}
                weight={"200/400 ml"}
                price={"190/260 KGS"}
              />
              <Square title={"Mocha"} weight={"200 ml"} price={"260 KGS"} />
              <Square
                title={"Flat white"}
                weight={"200 ml"}
                price={"260 KGS"}
              />
              <LongSqaure
                title={"Latte krem-brüle marşmelov"}
                weight={"200 ml"}
                price={"340 KGS"}
                squareI={squareI}
              />
              <LongSqaure
                title={"Çırpılmış kremalı badem latte"}
                weight={"200 ml"}
                price={"340 KGS"}
                squareI={squareI}
              />
              <LongSqaure
                title={"Muz ve karamellí kapuccino"}
                weight={"200/400 ml"}
                price={"230/280 KGS"}
                squareI={squareI}
              />
              <LongSqaure
                title={"Espresso-tonik"}
                weight={"250 ml"}
                price={"255 KGS"}
              />
              <Square
                title={"Iced cappuccino"}
                weight={"350 ml"}
                price={"260 KGS"}
              />
              <Square
                title={"Iced latte"}
                weight={"350 ml"}
                price={"280 KGS"}
              />
              <Square
                title={"Iced americano"}
                weight={"350 ml"}
                price={"200 KGS"}
              />
              <Square
                title={"Frappuccino"}
                weight={"350 ml"}
                price={"340 KGS"}
                squareI={squareI}
              />
              <LongSqaure
                title={"Portakal suyunda / freshínde bumble coffee"}
                weight={"250 ml"}
                price={"210/310 KGS"}
                squareI={squareI}
              />
              <Square
                title={"Raf coffee"}
                weight={"330 ml"}
                price={"290 KGS"}
              />
              <Square
                title={"Espresso extra shot"}
                weight={"25 ml"}
                price={"70 KGS"}
              />
              <Square
                title={"Irish coffee"}
                weight={"250 ml"}
                price={"310 KGS"}
              />
              <Square
                title={"Fresh coffee"}
                weight={"200 ml"}
                price={"310 KGS"}
              />
              <LongSqaure
                title={"Affogato alkollü / alkolsüz"}
                weight={"200 ml"}
                price={"360/550 KGS"}
                squareI={squareI}
              />
              <img src={imgMilkTR} alt="" />
            </div>
          ) : selectedLanguage === "Кыргызча" ? (
            <div className="square-main-content">
              {/* <img className="coffe-img-2" src={imgTerKG} alt="" /> */}
              <Square title={"Эспрессо"} weight={"40 мл"} price={"175 с"} />
              <Square
                title={"Американо"}
                weight={"200/400 мл"}
                price={"140/190 с"}
              />
              <Square
                title={"Капучино"}
                weight={"200/400 мл"}
                price={"190/240 с"}
              />
              <Square
                title={"Латте"}
                weight={"200/400 мл"}
                price={"190/260 с"}
              />
              <Square title={"Мокко"} weight={"200 мл"} price={"260 с"} />
              <Square title={"Флэт Уайт"} weight={"200 мл"} price={"260 с"} />
              <LongSqaure
                title={"Латте крем-брюле маршмеллоу"}
                weight={"200 мл"}
                price={"340 c"}
                squareI={squareI}
              />
              <LongSqaure
                title={"Каймак менен бадам латте "}
                weight={"200 мл"}
                price={"340 c"}
                squareI={squareI}
              />
              <LongSqaure
                title={"Банан-карамельдүү капучино"}
                weight={"200/400 мл"}
                price={"230/280 с"}
                squareI={squareI}
              />
              <LongSqaure
                title={"Эспрессо тоник"}
                weight={"250 мл"}
                price={"255 с"}
              />
              <Square
                title={"Айс капучино"}
                weight={"350 мл"}
                price={"260 с"}
              />
              <Square title={"Айс латте"} weight={"350 мл"} price={"280 с"} />
              <Square
                title={"Айс американо"}
                weight={"350 мл"}
                price={"200 с"}
              />
              <Square
                title={"Фраппучино"}
                weight={"350 мл"}
                price={"340 с"}
                squareI={squareI}
              />
              <LongSqaure
                title={"Апельсин ширесинде жасалган бамбл кофе"}
                weight={"250 мл"}
                price={"210/310 с"}
                squareI={squareI}
              />
              <Square title={"Раф кофе"} weight={"330 мл"} price={"290 с"} />
              <Square
                title={"Эспрессо экстра шот"}
                weight={"25 мл"}
                price={"70 с"}
              />
              <Square title={"Айриш кофе"} weight={"250 мл"} price={"310 с"} />
              <Square title={"Фреш кофе"} weight={"200 мл"} price={"310 с"} />
              <LongSqaure
                title={"Аффогато алколдуу/ алкоголсуз"}
                weight={"200 мл"}
                price={"360/550 с"}
                squareI={squareI}
              />
              <div className="menu-coffe-images">
                { selectedLanguage === "Русский" ? (
                  <img className="coffe-img" src={img1} alt="" />
                ) : selectedLanguage === "English" ? (
                  <img className="coffe-img" src={imgEN} alt="" />
                ) : selectedLanguage === "Türkçe" ? (
                  <img className="coffe-img" src={imgTR} alt=""/>
                ) : selectedLanguage === "Кыргызча" ? (
                  <img className="coffe-img" src={imgKG} alt="" />
                ) : "" }
              </div>
            </div>
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

export default MenuCoffe;
