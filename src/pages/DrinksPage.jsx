import React, { useEffect, useState } from "react";
import "../css/drinks.scss";
import { useNavigate } from "react-router-dom";
import SliderMenu, { categories } from "../components/SliderMenu";
import TeaSquare from "../components/TeaSquare";
import img1 from "../images/drinks/1.png";
import { useLanguage } from "../functions/languageContext";
import imgTerKG from "../images/drinks/termos_kg.png";
import imgTerTR from "../images/drinks/termos_TR.png";
import imgTerEN from "../images/drinks/termos_mobile_EN.png";
import imgTerRU from "../images/coffe/image-2.png";
import ArrowLeft from "../components/ArrowLeft";

function DrinksPage() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  let getCategory = localStorage.getItem("category");

  const [selectedCategory, setSelectedCategory] = useState(
    categories[Number(getCategory)]
  );
  const [categoryChange, setCategoryChange] = useState(false);
  const [notF, setNotF] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
          {selectedLanguage === "Русский" ? (
            <>
              <div className="drinks-main">
                <header className="tea-header">
                  <div className="tea-header-title">
                    <h2>НАПИТКИ</h2>
                    <span>ГОРЯЧИЙ МИКС</span>
                  </div>
                </header>
                <img className="coffe-img-2" src={imgTerRU} alt="" />

                <>
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Раф матча"}
                    weight={"400 мл"}
                    price={"400 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Матча"}
                    weight={"400 мл"}
                    price={"300 с"}
                    extra={"зелёная / голубая"}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Какао"}
                    weight={"200 мл"}
                    price={"170/190 С"}
                    extra={"классический / на основе бельгийского шоколада"}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Глинтвейн"}
                    weight={"200 мл"}
                    price={"380 с"}
                    extra={"красный / белый"}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Глинтвейн безалкогольный"}
                    weight={"200 мл"}
                    price={"210 с"}
                    extra={"вишня / яблоко / гранат"}
                  />
                  <div
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="collagen-main-2"
                  >
                    <div className="collagen-container-2">
                      <div className="collagen-wrapper-left">
                        <div>+ маршмеллоу</div>
                      </div>
                      <div className="collagen-wrapper-right">+30 с</div>
                    </div>
                  </div>
                  <header className="tea-header">
                    <div className="tea-header-title">
                      <span>ДОМАШНИЕ ЛИМОНАДЫ</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Классический"}
                    weight={"400 мл/1л"}
                    price={"190/290 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Тропический"}
                    weight={"400 мл/1л"}
                    price={"230/400 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Груша-лимон"}
                    weight={"400 мл/1л"}
                    price={"230/330 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Яблоко-киви"}
                    weight={"400 мл/1л"}
                    price={"230/330 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Мохито"}
                    weight={"400 мл/1л"}
                    price={"230/330 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Фирменный Мишель"}
                    weight={"400 мл/1л"}
                    price={"280/450 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Малиновый"}
                    weight={"400 мл/1л"}
                    price={"280/450 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Вишнёвый"}
                    weight={"400 мл/1л"}
                    price={"280/450 с"}
                    extra={"280/450 с"}
                  />
                  <div
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="collagen-main-2"
                  >
                    <div className="collagen-container-2">
                      <div className="collagen-wrapper-left">
                        <div>*Объём напитка указан с учётом наличия льда</div>
                      </div>
                      <div className="collagen-wrapper-right"></div>
                    </div>
                  </div>
                  <header className="tea-header">
                    <div className="tea-header-title">
                      <span>ГОРЯЧИЙ БЕЛЬГИЙСКИЙ ШОКОЛАД</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Классический"}
                    weight={"200 мл"}
                    price={"260 C"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Дарк Оранж"}
                    weight={"200 мл"}
                    price={"260 C"}
                    extra={""}
                  />
                  <div
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="collagen-main-2"
                  >
                    <div className="collagen-container-2">
                      <div className="collagen-wrapper-left">
                        <div>
                          В наших напитках мы используем исключительно
                          натуральный бельгийский шоколад, натуральные 33%
                          сливки и никаких порошковых заменителей!
                        </div>
                      </div>
                      <div className="collagen-wrapper-right"></div>
                    </div>
                  </div>
                  <header className="tea-header">
                    <div className="tea-header-title">
                      <span>ЖИВИТЕЛЬНАЯ ВОДА</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Родниковая вода Легенда"}
                    weight={"1 л"}
                    price={"70 С"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Витаминная вода лимон+огурец"}
                    weight={"1 л"}
                    price={"160 С"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Витаминная вода лайм+мята"}
                    weight={"1 л"}
                    price={"170 С"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Витаминная вода розмарин+имбирь"}
                    weight={"1 л"}
                    price={"170 С"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Лимонная вода"}
                    weight={"1 л"}
                    price={"160 С"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"BonAqua"}
                    weight={"300 л"}
                    price={"70"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Боржоми"}
                    weight={"500 л"}
                    price={"200 С"}
                    extra={""}
                  />
                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>ФРЕШИ</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Морковь"}
                    weight={"250 мл"}
                    price={"160 С"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Яблоко"}
                    weight={"250 мл"}
                    price={"160 С"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Яблоко-морковь"}
                    weight={"250 мл"}
                    price={"160 С"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Апельсин"}
                    weight={"250 мл"}
                    price={"310 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Апельсин-яблоко"}
                    weight={"250 мл"}
                    price={"260 с"}
                    extra={""}
                  />
                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>ФРИКШЕЙКИ</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2 " }}
                    title={"Клубничная фантазия"}
                    weight={"300 мл"}
                    price={"360 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2 " }}
                    title={"Банановый бум"}
                    weight={"300 мл"}
                    price={"360 с"}
                    extra={""}
                  />
                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>ДЕТОКС</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Шпинат-киви"}
                    weight={"250 мл"}
                    price={"170 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Тропический"}
                    weight={"250 мл"}
                    price={"280 с"}
                    extra={""}
                  />
                  <img className="tea-img" src={img1} alt="" />
                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>МИЛКШЕЙКИ</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Клубничный крекер"}
                    weight={"300 мл"}
                    price={"300 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Манго"}
                    weight={"300 мл"}
                    price={"300 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Банан"}
                    weight={"300 мл"}
                    price={"300 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Шоколад"}
                    weight={"300 мл"}
                    price={"300 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Шоколад и банан"}
                    weight={"300 мл"}
                    price={"300 с"}
                    extra={""}
                  />
                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>БЕЗЛАКТОЗНЫЕ МИЛКШЕЙКИ</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Манго"}
                    weight={"300 мл"}
                    price={"310 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Ореховый"}
                    weight={"300 мл"}
                    price={"310 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Кокос и клубника"}
                    weight={"300 мл"}
                    price={"310 с"}
                    extra={""}
                  />
                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>ПРОХЛАДИТЕЛЬНЫЕ НАПИТКИ</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Сок Gracio"}
                    weight={"250 мл/1 л"}
                    price={"90/310 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Кока-Кола/Фанта"}
                    weight={"250 мл"}
                    price={"130 с"}
                    extra={"стекло"}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Кока-Кола"}
                    weight={"250 мл/1 л"}
                    price={"90/170 с"}
                    extra={"розлив"}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Швепс"}
                    weight={"330 мл"}
                    price={"105 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Red Bull"}
                    weight={"250 мл"}
                    price={"260 с"}
                    extra={""}
                  />

                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>СМУЗИ</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Ягодный"}
                    weight={"300 мл"}
                    price={"240 C"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Манго и апельсин"}
                    weight={"300 мл"}
                    price={"290 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Бифидо"}
                    weight={"250 мл"}
                    price={"260 C"}
                    extra={""}
                  />
                </>
              </div>
            </>
          ) : selectedLanguage === "English" ? (
            <>
              <div className="drinks-main">
                <header className="tea-header">
                  <div className="tea-header-title">
                    <h2>DRINKS</h2>
                    <span>HOT MIX</span>
                  </div>
                </header>
                <img className="coffe-img-2" src={imgTerEN} alt="" />

                <>
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Raf matcha"}
                    weight={"400 ml"}
                    price={"400 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Matcha"}
                    weight={"400 ml"}
                    price={"300 KGS"}
                    extra={"green / blue"}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Cacao"}
                    weight={"200 ml"}
                    price={"170/190 KGS"}
                    extra={"classic / with Belgian chocolate"}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Mulled wine"}
                    weight={"200 ml"}
                    price={"380 KGS"}
                    extra={"red / white"}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Non-alcoholic mulled wine"}
                    weight={"200 ml"}
                    price={"210 KGS"}
                    extra={"cherry / apple / pomegranate"}
                  />
                  <div
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="collagen-main-2"
                  >
                    <div className="collagen-container-2">
                      <div className="collagen-wrapper-left">
                        <div>+ marshmallow</div>
                      </div>
                      <div className="collagen-wrapper-right">+30 KGS</div>
                    </div>
                  </div>
                  <header className="tea-header">
                    <div className="tea-header-title">
                      <span>HANDMADE LEMONADES</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Classic"}
                    weight={"400 ml/1l"}
                    price={"190/290 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Tropical"}
                    weight={"400 ml/1l"}
                    price={"230/400 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Pear-lemon"}
                    weight={"400 ml/1l"}
                    price={"230/330 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Kiwi apple"}
                    weight={"400 ml/1l"}
                    price={"230/330 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Mojito"}
                    weight={"400 ml/1l"}
                    price={"230/330 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Michelle’s"}
                    weight={"400 ml/1l"}
                    price={"280/450 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Raspberry"}
                    weight={"400 ml/1l"}
                    price={"280/450 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Cherry"}
                    weight={"400 ml/1l"}
                    price={"280/450 KGS"}
                    extra={"280/450 KGS"}
                  />
                  <div
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="collagen-main-2"
                  >
                    <div className="collagen-container-2">
                      <div className="collagen-wrapper-left">
                        <div>
                          * The volume of the drink is specified with ice
                          included.
                        </div>
                      </div>
                      <div className="collagen-wrapper-right"></div>
                    </div>
                  </div>
                  <header className="tea-header">
                    <div className="tea-header-title">
                      <span>HOT BELGIAN CHOCOLATE</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Classic"}
                    weight={"200 ml"}
                    price={"260 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Dark orange"}
                    weight={"200 ml"}
                    price={"260 KGS"}
                    extra={""}
                  />
                  <div
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="collagen-main-2"
                  >
                    <div className="collagen-container-2">
                      <div className="collagen-wrapper-left">
                        <div>
                          In our recipes, we use true Belgian chocolate, organic
                          cream, and not a single drop of powder substitutes!
                        </div>
                      </div>
                      <div className="collagen-wrapper-right"></div>
                    </div>
                  </div>
                  <header className="tea-header">
                    <div className="tea-header-title">
                      <span>LIVE-GIVING WATER</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Spring water"}
                    weight={"1 l"}
                    price={"70 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Lemon and cucumber water"}
                    weight={"1 l"}
                    price={"160 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Lime and mint water"}
                    weight={"1 l"}
                    price={"170 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Rosemary and ginger water"}
                    weight={"1 l"}
                    price={"170 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Lemon water"}
                    weight={"1 l"}
                    price={"160 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"BonAqua"}
                    weight={"300 ml"}
                    price={"70"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Borjomi"}
                    weight={"500 ml"}
                    price={"200 KGS"}
                    extra={""}
                  />
                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>FRESH JUICES</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Carrot"}
                    weight={"250 ml"}
                    price={"160 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Apple"}
                    weight={"250 ml"}
                    price={"160 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Apple-carrot"}
                    weight={"250 ml"}
                    price={"160 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Orange"}
                    weight={"250 ml"}
                    price={"310 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Orange-apple"}
                    weight={"250 ml"}
                    price={"260 KGS"}
                    extra={""}
                  />
                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>FREAKSHAKES</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2 " }}
                    title={"Strawberry fantasy"}
                    weight={"300 ml"}
                    price={"360 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2 " }}
                    title={"Banana boom"}
                    weight={"300 ml"}
                    price={"360 KGS"}
                    extra={""}
                  />
                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>DETOX</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Spinach-kiwi"}
                    weight={"250 ml"}
                    price={"170 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Tropical"}
                    weight={"250 ml"}
                    price={"280 KGS"}
                    extra={""}
                  />
                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>MILKSHAKES</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Strawberry-cracker"}
                    weight={"300 ml"}
                    price={"300 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Mango"}
                    weight={"300 ml"}
                    price={"300 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Banana"}
                    weight={"300 ml"}
                    price={"300 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Chocolate"}
                    weight={"300 ml"}
                    price={"300 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Chocolate banana"}
                    weight={"300 ml"}
                    price={"300 KGS"}
                    extra={""}
                  />
                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>LACTOSE-FREE MILKSHAKES</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Mango"}
                    weight={"300 ml"}
                    price={"310 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Walnut"}
                    weight={"300 ml"}
                    price={"310 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Coconut and strawberry"}
                    weight={"300 ml"}
                    price={"310 KGS"}
                    extra={""}
                  />
                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>SOFT & ENERGY DRINKS</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Gracio juice"}
                    weight={"250 ml/1l"}
                    price={"90/310 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Coca-Cola/Fanta"}
                    weight={"250 ml"}
                    price={"130 KGS"}
                    extra={"glass bottle"}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Coca-Cola"}
                    weight={"250 ml/1l"}
                    price={"90/170 KGS"}
                    extra={"bottling"}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Schweppes"}
                    weight={"330 ml"}
                    price={"105 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Red Bull"}
                    weight={"250 ml"}
                    price={"260 KGS"}
                    extra={""}
                  />

                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>SMOOTHIES</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Berry"}
                    weight={"300 ml"}
                    price={"240 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Mango and orange"}
                    weight={"300 ml"}
                    price={"290 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Gut health"}
                    weight={"250 ml"}
                    price={"260 KGS"}
                    extra={""}
                  />
                </>
              </div>
            </>
          ) : selectedLanguage === "Türkçe" ? (
            <>
              <div className="drinks-main">
                <header className="tea-header">
                  <div className="tea-header-title">
                    <h2>İÇECEKLER</h2>
                    <span>SICAK KARIŞIM</span>
                  </div>
                </header>
                <img className="coffe-img-2" src={imgTerTR} alt="" />

                <>
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Raf matcha"}
                    weight={"400 ml"}
                    price={"400 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Matcha"}
                    weight={"400 ml"}
                    price={"300 KGS"}
                    extra={"yeşíl / maví"}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Какао"}
                    weight={"200 ml"}
                    price={"170/190 KGS"}
                    extra={"klasík / temelí Belçíka çikolatalı"}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Sıcak şarap"}
                    weight={"200 ml"}
                    price={"380 KGS"}
                    extra={"kırmızı / beyaz"}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Sıcak şarap alkolsüz"}
                    weight={"200 ml"}
                    price={"210 KGS"}
                    extra={"kíraz / elma / nar"}
                  />
                  <div
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="collagen-main-2"
                  >
                    <div className="collagen-container-2">
                      <div className="collagen-wrapper-left">
                        <div>+ marshmallow</div>
                      </div>
                      <div className="collagen-wrapper-right">+30 KGS</div>
                    </div>
                  </div>
                  <header className="menu-header" style={{ paddingTop: "30px" }}>
                    <div className="menu-title-container">
                      <hr />
                      <h2 style={{ textAlign: "center", fontSize: "17px" }}>EV YAPIMI LİMONATALAR</h2>
                      <hr />
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Klasík"}
                    weight={"400 ml/1l"}
                    price={"190/290 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Tropíkal"}
                    weight={"400 ml/1l"}
                    price={"230/400 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Armut-límon"}
                    weight={"400 ml/1l"}
                    price={"230/330 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Elma-kíví"}
                    weight={"400 ml/1l"}
                    price={"230/330 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Mojíto"}
                    weight={"400 ml/1l"}
                    price={"230/330 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Markalı Míşel"}
                    weight={"400 ml/1l"}
                    price={"280/450 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Ahududulu"}
                    weight={"400 ml/1l"}
                    price={"280/450 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Kírazlı"}
                    weight={"400 ml/1l"}
                    price={"280/450 KGS"}
                    extra={"280/450 KGS"}
                  />
                  <div
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="collagen-main-2"
                  >
                    <div className="collagen-container-2">
                      <div className="collagen-wrapper-left">
                        <div>* İçeceğin hacmi buzla belirtilir dahil.</div>
                      </div>
                      <div className="collagen-wrapper-right"></div>
                    </div>
                  </div>
                  <header className="tea-header">
                    <div className="tea-header-title">
                      <span>SICAK BELÇİKA ÇİKOLATA</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Klasík"}
                    weight={"200 ml"}
                    price={"260 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Dark orange"}
                    weight={"200 ml"}
                    price={"260 KGS"}
                    extra={""}
                  />
                  <div
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="collagen-main-2"
                  >
                    <div className="collagen-container-2">
                      <div className="collagen-wrapper-left">
                        <div>
                          Tariflerimizde gerçek Belçika çikolatası kullanıyoruz,
                          organik krema ve tek bir damla toz ikamesi yok!
                        </div>
                      </div>
                      <div className="collagen-wrapper-right"></div>
                    </div>
                  </div>
                  <header className="tea-header">
                    <div className="tea-header-title">
                      <span>CANLI SU</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Legend kaynak suyu"}
                    weight={"1 l"}
                    price={"70 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Vítamín suyu límon-salatalık"}
                    weight={"1 l"}
                    price={"160 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Vítamín suyu límon-nane"}
                    weight={"1 l"}
                    price={"170 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Vítamín suyu bíberíye-zencefíl"}
                    weight={"1 l"}
                    price={"170 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Límonlu su"}
                    weight={"1 l"}
                    price={"160 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"BonAqua"}
                    weight={"300 ml"}
                    price={"70"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Borjomi"}
                    weight={"500 ml"}
                    price={"200 KGS"}
                    extra={""}
                  />
                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>FRESH</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Havuç"}
                    weight={"250 ml"}
                    price={"160 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Elma"}
                    weight={"250 ml"}
                    price={"160 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Elma-havuç"}
                    weight={"250 ml"}
                    price={"160 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Portakal"}
                    weight={"250 ml"}
                    price={"310 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Elma-portakal"}
                    weight={"250 ml"}
                    price={"260 KGS"}
                    extra={""}
                  />
                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>FREAKSHAKE</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2 " }}
                    title={"Çíleklí hayaller"}
                    weight={"300 ml"}
                    price={"360 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2 " }}
                    title={"Muz patlaması"}
                    weight={"300 ml"}
                    price={"360 KGS"}
                    extra={""}
                  />
                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>DETOKS</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Ispanak-kíví"}
                    weight={"250 ml"}
                    price={"170 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Tropíkal"}
                    weight={"250 ml"}
                    price={"280 KGS"}
                    extra={""}
                  />
                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>MİLSHAKELER</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Çíleklí kraker"}
                    weight={"300 ml"}
                    price={"300 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Mango"}
                    weight={"300 ml"}
                    price={"300 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Muz"}
                    weight={"300 ml"}
                    price={"300 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Çíkolata"}
                    weight={"300 ml"}
                    price={"300 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Çíkolata ve muz"}
                    weight={"300 ml"}
                    price={"300 KGS"}
                    extra={""}
                  />
                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>LAKTOZSUZ MILKSHAKE</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Mango"}
                    weight={"300 ml"}
                    price={"310 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Cevízlí"}
                    weight={"300 ml"}
                    price={"310 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Híndístan cevizí ve çílek"}
                    weight={"300 ml"}
                    price={"310 KGS"}
                    extra={""}
                  />
                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>SOĞUK İÇECEKLER</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Gracio juice"}
                    weight={"250 ml/1l"}
                    price={"90/310 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Coca-Cola/Fanta"}
                    weight={"250 ml"}
                    price={"130 KGS"}
                    extra={"glass bottle"}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Coca-Cola"}
                    weight={"250 ml/1l"}
                    price={"90/170 KGS"}
                    extra={"bottling"}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Schweppes"}
                    weight={"330 ml"}
                    price={"105 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Red Bull"}
                    weight={"250 ml"}
                    price={"260 KGS"}
                    extra={""}
                  />

                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>SMOOTHIE</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Meyvelí"}
                    weight={"300 ml"}
                    price={"240 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Mango ve portakal"}
                    weight={"300 ml"}
                    price={"290 KGS"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Bífído"}
                    weight={"250 ml"}
                    price={"260 KGS"}
                    extra={""}
                  />
                </>
              </div>
            </>
          ) : selectedLanguage === "Кыргызча" ? (
            <>
              <div className="drinks-main">
                <header className="tea-header">
                  <div className="tea-header-title">
                    <h2>СУУЛАР</h2>
                    <span>ЫСЫК МИКС</span>
                  </div>
                </header>
                <img className="coffe-img-2" src={imgTerKG} alt="" />

                <>
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Раф матча"}
                    weight={"400 мл"}
                    price={"400 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Матча"}
                    weight={"400 мл"}
                    price={"300 с"}
                    extra={"зелёная / голубая"}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Какао"}
                    weight={"200 мл"}
                    price={"170/190 С"}
                    extra={"классический / на основе бельгийского шоколада"}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Глинтвейн"}
                    weight={"200 мл"}
                    price={"380 с"}
                    extra={"красный / белый"}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Глинтвейн безалкогольный"}
                    weight={"200 мл"}
                    price={"210 с"}
                    extra={"вишня / яблоко / гранат"}
                  />
                  <div
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="collagen-main-2"
                  >
                    <div className="collagen-container-2">
                      <div className="collagen-wrapper-left">
                        <div>+ маршмеллоу</div>
                      </div>
                      <div className="collagen-wrapper-right">+30 с</div>
                    </div>
                  </div>
                  <header className="tea-header">
                    <div className="tea-header-title">
                      <span>УЙ ЛИМОНАДЫ</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Классический"}
                    weight={"400 мл/1л"}
                    price={"190/290 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Тропический"}
                    weight={"400 мл/1л"}
                    price={"230/400 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Груша-лимон"}
                    weight={"400 мл/1л"}
                    price={"230/330 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Яблоко-киви"}
                    weight={"400 мл/1л"}
                    price={"230/330 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Мохито"}
                    weight={"400 мл/1л"}
                    price={"230/330 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Фирменный Мишель"}
                    weight={"400 мл/1л"}
                    price={"280/450 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Малиновый"}
                    weight={"400 мл/1л"}
                    price={"280/450 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Вишнёвый"}
                    weight={"400 мл/1л"}
                    price={"280/450 с"}
                    extra={"280/450 с"}
                  />
                  <div
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="collagen-main-2"
                  >
                    <div className="collagen-container-2">
                      <div className="collagen-wrapper-left">
                        <div>
                          *Суусундуктун көлөмү муздун болушун эске алуу менен
                          көрсөтүлөт
                        </div>
                      </div>
                      <div className="collagen-wrapper-right"></div>
                    </div>
                  </div>
                  <header className="tea-header">
                    <div className="tea-header-title">
                      <span>ЫСЫК БЕЛГИЯЛЫК ШОКОЛАД</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Классический"}
                    weight={"200 мл"}
                    price={"260 C"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Дарк Оранж"}
                    weight={"200 мл"}
                    price={"260 C"}
                    extra={""}
                  />
                  <div
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="collagen-main-2"
                  >
                    <div className="collagen-container-2">
                      <div className="collagen-wrapper-left">
                        <div>
                          Суусундуктарыбызда биз эксклюзив колдонобуз табигый
                          бельгиялык шоколад, табигый 33% крем жана порошок
                          алмаштыргычтар жок!
                        </div>
                      </div>
                      <div className="collagen-wrapper-right"></div>
                    </div>
                  </div>
                  <header className="tea-header">
                    <div className="tea-header-title">
                      <span>ЖАШОО СУУСУ</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Родниковая вода Легенда"}
                    weight={"1 л"}
                    price={"70 С"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Витаминная вода лимон+огурец"}
                    weight={"1 л"}
                    price={"160 С"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Витаминная вода лайм+мята"}
                    weight={"1 л"}
                    price={"170 С"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Витаминная вода розмарин+имбирь"}
                    weight={"1 л"}
                    price={"170 С"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Лимонная вода"}
                    weight={"1 л"}
                    price={"160 С"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"BonAqua"}
                    weight={"300 л"}
                    price={"70"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Боржоми"}
                    weight={"500 л"}
                    price={"200 С"}
                    extra={""}
                  />
                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>ФРЕШИ</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Морковь"}
                    weight={"250 мл"}
                    price={"160 С"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Яблоко"}
                    weight={"250 мл"}
                    price={"160 С"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Яблоко-морковь"}
                    weight={"250 мл"}
                    price={"160 С"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Апельсин"}
                    weight={"250 мл"}
                    price={"310 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Апельсин-яблоко"}
                    weight={"250 мл"}
                    price={"260 с"}
                    extra={""}
                  />
                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>ФРИКШЕЙКИ</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2 " }}
                    title={"Клубничная фантазия"}
                    weight={"300 мл"}
                    price={"360 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2 " }}
                    title={"Банановый бум"}
                    weight={"300 мл"}
                    price={"360 с"}
                    extra={""}
                  />
                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>ДЕТОКС</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Шпинат-киви"}
                    weight={"250 мл"}
                    price={"170 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Тропический"}
                    weight={"250 мл"}
                    price={"280 с"}
                    extra={""}
                  />
                  <img className="tea-img" src={img1} alt="" />
                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>МИЛКШЕЙК</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Клубничный крекер"}
                    weight={"300 мл"}
                    price={"300 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Манго"}
                    weight={"300 мл"}
                    price={"300 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Банан"}
                    weight={"300 мл"}
                    price={"300 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Шоколад"}
                    weight={"300 мл"}
                    price={"300 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Шоколад и банан"}
                    weight={"300 мл"}
                    price={"300 с"}
                    extra={""}
                  />
                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>ЛАКТОЗАСЫ ЖОК СҮТКӨЛҮҮЛӨР</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Манго"}
                    weight={"300 мл"}
                    price={"310 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Ореховый"}
                    weight={"300 мл"}
                    price={"310 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FEEABCE5" }}
                    title={"Кокос и клубника"}
                    weight={"300 мл"}
                    price={"310 с"}
                    extra={""}
                  />
                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>МУЗДАК ИЧИМДИК</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Сок Gracio"}
                    weight={"250 мл/1 л"}
                    price={"90/310 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Кока-Кола/Фанта"}
                    weight={"250 мл"}
                    price={"130 с"}
                    extra={"стекло"}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Кока-Кола"}
                    weight={"250 мл/1 л"}
                    price={"90/170 с"}
                    extra={"розлив"}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Швепс"}
                    weight={"330 мл"}
                    price={"105 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#E6EBDC99" }}
                    title={"Red Bull"}
                    weight={"250 мл"}
                    price={"260 с"}
                    extra={""}
                  />

                  <header
                    style={{ margin: "35px 0px 35px 0px" }}
                    className="tea-header"
                  >
                    <div className="tea-header-title">
                      <span>СМУЗИ</span>
                    </div>
                  </header>
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Ягодный"}
                    weight={"300 мл"}
                    price={"240 C"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Манго и апельсин"}
                    weight={"300 мл"}
                    price={"290 с"}
                    extra={""}
                  />
                  <TeaSquare
                    style={{ backgroundColor: "#FED5CAB2" }}
                    title={"Бифидо"}
                    weight={"250 мл"}
                    price={"260 C"}
                    extra={""}
                  />
                </>
              </div>
            </>
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

export default DrinksPage;
