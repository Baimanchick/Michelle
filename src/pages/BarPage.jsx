import React, { useEffect, useState } from "react";
import "../css/drinks.scss";
import { useNavigate } from "react-router-dom";
import SliderMenu, { categories } from "../components/SliderMenu";
import TeaSquare from "../components/TeaSquare";
import img1 from "../images/drinks/1.png";
import { useLanguage } from "../functions/languageContext";
import SmuziSquaer from "../components/SmuziSquaer";

function BarPage() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  let getCategory = localStorage.getItem("category");

  const [selectedCategory, setSelectedCategory] = useState(categories[Number(getCategory)]);
  const [categoryChange, setCategoryChange] = useState(false);
  const [notF, setNotF] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    getCategory = category.id
    localStorage.setItem("category", category.id)
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
            <SliderMenu onSelectCategory={handleSelectCategory} categoryI={Number(getCategory)} />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></div>
          </div>
          {selectedLanguage === "Русский" ? (
            <div className="drinks-main">
              <header
                style={{ margin: "30px 0px 30px 0px" }}
                className="tea-header"
              >
                <div className="tea-header-title">
                  <h2>БАР</h2>
                  <span>КОКТЕЙЛИ</span>
                </div>
              </header>
              <>
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Испанская сангрия"}
                  weight={"1 л"}
                  price={"565 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Апероль Шприц"}
                  weight={"300 мл"}
                  price={"465 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Сангрия Экстра Стронг"}
                  weight={"1 л"}
                  price={"1015 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Санрайз"}
                  weight={"400 мл"}
                  price={"260 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Мохито"}
                  weight={"400 мл"}
                  price={"260 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Джин Тоник Розовый"}
                  weight={"250 мл"}
                  price={"400 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Джин Тоник"}
                  weight={"250 мл"}
                  price={"390 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Пина Колада"}
                  weight={"400 мл"}
                  price={"390 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Лонг Айленд"}
                  weight={"400 мл"}
                  price={"400 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Мишель Шприц"}
                  weight={"300 мл"}
                  price={"505 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Мартини Фиеро Тоник"}
                  weight={"300 мл"}
                  price={"465 с"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>РОМ / КОНЬЯК</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#FED5CAB2" }}
                  title={"Капитан Морган"}
                  weight={"50 мл"}
                  price={"260 с"}
                  extra={"уайт / голд / дарк"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FED5CAB2" }}
                  title={"Бакарди"}
                  weight={"50 мл"}
                  price={"290 с"}
                  extra={"блэк / уайт / оакхарт / спайс"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FED5CAB2" }}
                  title={"Кыргызстан"}
                  weight={"50 мл"}
                  price={"240 с"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>ЛИКЕРЫ / БИТТЕРЫ / НАСТОЙКИ</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Малибу"}
                  weight={"50 МЛ"}
                  price={"280 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Апероль"}
                  weight={"50 МЛ"}
                  price={"280 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Бэйлис"}
                  weight={"50 МЛ"}
                  price={"300 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Трипл Сек"}
                  weight={"50 МЛ"}
                  price={"300 с"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>ПИВО</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Хугарден"}
                  weight={"440 МЛ"}
                  price={"280 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Стелла Артуа"}
                  weight={"500 МЛ"}
                  price={"290 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Хайнекен"}
                  weight={"330 МЛ"}
                  price={"230 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Корона Экстра"}
                  weight={"330 МЛ"}
                  price={"350 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Фильтрованное / Нефильтрованное"}
                  weight={"330/500 МЛ"}
                  price={"110/160 с"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>ВИСКИ</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Джон Джеймсон"}
                  weight={"50 мл"}
                  price={"400 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Джек Дэниелс"}
                  weight={"50 мл"}
                  price={"400 с"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>АПЕРИТИВЫ</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Мартини"}
                  weight={"100 мл"}
                  price={"310 с"}
                  extra={"бьянко / россо / драй"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Мартини Фиерро"}
                  weight={"100 мл"}
                  price={"360 с"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>ТЕКИЛА</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC99" }}
                  title={"Ольмека"}
                  weight={"50 мл"}
                  price={"260 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC99" }}
                  title={"Сиерра"}
                  weight={"50 мл"}
                  price={"240 с"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>ДЖИН</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC99" }}
                  title={"Бифитер"}
                  weight={"50 мл"}
                  price={"300 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC99" }}
                  title={"Гордонс розовый"}
                  weight={"50 мл"}
                  price={"280 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC99" }}
                  title={"Гордонс"}
                  weight={"50 мл"}
                  price={"280 с"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>СНЕКИ</span>
                  </div>
                </header>
                <div className="smuzi-main">
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Фисташки"}
                    price={"190 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Миндаль"}
                    price={"180 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Соленый арахис"}
                    price={"100 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Курут Шоро"}
                    price={"100 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Кириешки"}
                    price={"60 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Чечил"}
                    price={"110 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Жареный чечил"}
                    price={"60 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Принглс"}
                    price={"130 с"}
                  />
                </div>
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>СИГАРЕТЫ</span>
                  </div>
                </header>
                <div className="smuzi-main">
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Айкос стики"}
                    price={"330 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Парламент"}
                    price={"300 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Эссе"}
                    price={"300 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Ричмонд"}
                    price={"300 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Винстон"}
                    price={"260 с"}
                  />
                </div>
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>МИНИ БАР</span>
                  </div>
                </header>
                <div className="smuzi-main">
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Мёд"}
                    price={"80 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Лайм"}
                    price={"90 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Лимон"}
                    price={"70 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Орбит"}
                    price={"85 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Зажигалка"}
                    price={"60 с"}
                  />
                </div>
              </>
            </div>
          ) : selectedLanguage === "English" ? (
            <div className="drinks-main">
              <header
                style={{ margin: "30px 0px 30px 0px" }}
                className="tea-header"
              >
                <div className="tea-header-title">
                  <h2>BAR</h2>
                  <span>COCKTAILS</span>
                </div>
              </header>
              <>
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Spanish Sangria"}
                  weight={"1 l"}
                  price={"565 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Aperol Spritz"}
                  weight={"300 ml"}
                  price={"465 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Sangria extra strong"}
                  weight={"1 l"}
                  price={"1015 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Sunrise"}
                  weight={"400 ml"}
                  price={"260 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Mojito"}
                  weight={"400 ml"}
                  price={"260 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Gin tonic pink"}
                  weight={"250 ml"}
                  price={"400 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Gin tonic"}
                  weight={"250 ml"}
                  price={"390 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Pina colada"}
                  weight={"400 ml"}
                  price={"390 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Long island"}
                  weight={"400 ml"}
                  price={"400 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Michelle spritz"}
                  weight={"300 ml"}
                  price={"505 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Мartini fiero tonic"}
                  weight={"300 ml"}
                  price={"465 KGS"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>Rum/ Cognac</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#FED5CAB2" }}
                  title={"Captain Morgan"}
                  weight={"50 ml"}
                  price={"260 KGS"}
                  extra={"white/gold/dark"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FED5CAB2" }}
                  title={"Bacardi"}
                  weight={"50 ml"}
                  price={"290 KGS"}
                  extra={"black / white / oakheart "}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FED5CAB2" }}
                  title={"Kyrgyzstan"}
                  weight={"50 ml"}
                  price={"240 KGS"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>LIQUEURS / BITTERS / TINCTURES</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Маlibu"}
                  weight={"50 ml"}
                  price={"280 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Аperol"}
                  weight={"50 ml"}
                  price={"280 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Baileys"}
                  weight={"50 ml"}
                  price={"300 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Triple sec"}
                  weight={"50 ml"}
                  price={"300 KGS"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>BEER</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Hoegarden"}
                  weight={"440 ml"}
                  price={"280 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Stella artois"}
                  weight={"500 ml"}
                  price={"290 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Heineken"}
                  weight={"330 ml"}
                  price={"230 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Corona extra"}
                  weight={"330 ml"}
                  price={"350 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Fíltrelenmíş / Fíltrelenmemíş"}
                  weight={"330/500 ml"}
                  price={"110/160 KGS"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>WHISKEY</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"John Jameson"}
                  weight={"50 ml"}
                  price={"400 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Jack Daniel’s"}
                  weight={"50 ml"}
                  price={"400 KGS"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>APERITIVES</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"APERITIVES"}
                  weight={"100 ml"}
                  price={"310 KGS"}
                  extra={"bianco / rosso / dry"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Мartini fiero"}
                  weight={"100 ml"}
                  price={"360 KGS"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>TEQUILA</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC99" }}
                  title={"Olmeca"}
                  weight={"50 ml"}
                  price={"260 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC99" }}
                  title={"Sierra"}
                  weight={"50 ml"}
                  price={"240 KGS"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>GIN</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC99" }}
                  title={"Beefeater"}
                  weight={"50 ml"}
                  price={"300 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC99" }}
                  title={"Gordon’s pink"}
                  weight={"50 ml"}
                  price={"280 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC99" }}
                  title={"Gordon’s"}
                  weight={"50 ml"}
                  price={"280 KGS"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>SNACKS</span>
                  </div>
                </header>
                <div className="smuzi-main">
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Salty pistachios"}
                    price={"190 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Almond"}
                    price={"180 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Salted peanuts"}
                    price={"100 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Kurut Shoro"}
                    price={"100 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Pretzels"}
                    price={"60 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Chechil"}
                    price={"110 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Fried chechil"}
                    price={"60 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Pringles"}
                    price={"130 KGS"}
                  />
                </div>
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>CIGARETTES</span>
                  </div>
                </header>
                <div className="smuzi-main">
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Iqos sticks"}
                    price={"330 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Parliament"}
                    price={"300 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Esse"}
                    price={"300 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Richmond"}
                    price={"300 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Winston"}
                    price={"260 KGS"}
                  />
                </div>
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>EXTRA</span>
                  </div>
                </header>
                <div className="smuzi-main">
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Honey"}
                    price={"80 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Lime"}
                    price={"90 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Lemon"}
                    price={"70 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Orbít"}
                    price={"85 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Lighter"}
                    price={"60 KGS"}
                  />
                </div>
              </>
            </div>
          ) : selectedLanguage === "Turkce" ? (
            <div className="drinks-main">
              <header
                style={{ margin: "30px 0px 30px 0px" }}
                className="tea-header"
              >
                <div className="tea-header-title">
                  <h2>BAR</h2>
                  <span>COCKTAILS</span>
                </div>
              </header>
              <>
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Spanish Sangria"}
                  weight={"1 l"}
                  price={"565 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Aperol Spritz"}
                  weight={"300 ml"}
                  price={"465 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Sangria extra strong"}
                  weight={"1 l"}
                  price={"1015 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Sunrise"}
                  weight={"400 ml"}
                  price={"260 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Mojito"}
                  weight={"400 ml"}
                  price={"260 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Gin tonic pink"}
                  weight={"250 ml"}
                  price={"400 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Gin tonic"}
                  weight={"250 ml"}
                  price={"390 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Pina colada"}
                  weight={"400 ml"}
                  price={"390 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Long island"}
                  weight={"400 ml"}
                  price={"400 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Michelle spritz"}
                  weight={"300 ml"}
                  price={"505 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Мartini fiero tonic"}
                  weight={"300 ml"}
                  price={"465 KGS"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>Rum/ Cognac</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#FED5CAB2" }}
                  title={"Captain Morgan"}
                  weight={"50 ml"}
                  price={"260 KGS"}
                  extra={"white/gold/dark"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FED5CAB2" }}
                  title={"Bacardi"}
                  weight={"50 ml"}
                  price={"290 KGS"}
                  extra={"black / white / oakheart "}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FED5CAB2" }}
                  title={"Kyrgyzstan"}
                  weight={"50 ml"}
                  price={"240 KGS"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>LIQUEURS / BITTERS / TINCTURES</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Маlibu"}
                  weight={"50 ml"}
                  price={"280 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Аperol"}
                  weight={"50 ml"}
                  price={"280 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Baileys"}
                  weight={"50 ml"}
                  price={"300 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Triple sec"}
                  weight={"50 ml"}
                  price={"300 KGS"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>BEER</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Hoegarden"}
                  weight={"440 ml"}
                  price={"280 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Stella artois"}
                  weight={"500 ml"}
                  price={"290 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Heineken"}
                  weight={"330 ml"}
                  price={"230 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Corona extra"}
                  weight={"330 ml"}
                  price={"350 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Fíltrelenmíş / Fíltrelenmemíş"}
                  weight={"330/500 ml"}
                  price={"110/160 KGS"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>WHISKEY</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"John Jameson"}
                  weight={"50 ml"}
                  price={"400 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Jack Daniel’s"}
                  weight={"50 ml"}
                  price={"400 KGS"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>APERITIVES</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"APERITIVES"}
                  weight={"100 ml"}
                  price={"310 KGS"}
                  extra={"bianco / rosso / dry"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Мartini fiero"}
                  weight={"100 ml"}
                  price={"360 KGS"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>TEQUILA</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC99" }}
                  title={"Olmeca"}
                  weight={"50 ml"}
                  price={"260 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC99" }}
                  title={"Sierra"}
                  weight={"50 ml"}
                  price={"240 KGS"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>GIN</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC99" }}
                  title={"Beefeater"}
                  weight={"50 ml"}
                  price={"300 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC99" }}
                  title={"Gordon’s pink"}
                  weight={"50 ml"}
                  price={"280 KGS"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC99" }}
                  title={"Gordon’s"}
                  weight={"50 ml"}
                  price={"280 KGS"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>SNACKS</span>
                  </div>
                </header>
                <div className="smuzi-main">
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Salty pistachios"}
                    price={"190 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Almond"}
                    price={"180 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Salted peanuts"}
                    price={"100 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Kurut Shoro"}
                    price={"100 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Pretzels"}
                    price={"60 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Chechil"}
                    price={"110 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Fried chechil"}
                    price={"60 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Pringles"}
                    price={"130 KGS"}
                  />
                </div>
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>CIGARETTES</span>
                  </div>
                </header>
                <div className="smuzi-main">
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Iqos sticks"}
                    price={"330 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Parliament"}
                    price={"300 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Esse"}
                    price={"300 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Richmond"}
                    price={"300 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Winston"}
                    price={"260 KGS"}
                  />
                </div>
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>EXTRA</span>
                  </div>
                </header>
                <div className="smuzi-main">
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Honey"}
                    price={"80 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Lime"}
                    price={"90 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Lemon"}
                    price={"70 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Orbít"}
                    price={"85 KGS"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Lighter"}
                    price={"60 KGS"}
                  />
                </div>
              </>
            </div>
          ) : selectedLanguage === "Кыргзча" ? (
            <div className="drinks-main">
              <header
                style={{ margin: "30px 0px 30px 0px" }}
                className="tea-header"
              >
                <div className="tea-header-title">
                  <h2>БАР</h2>
                  <span>КОКТЕЙЛИ</span>
                </div>
              </header>
              <>
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Испанская сангрия"}
                  weight={"1 л"}
                  price={"565 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Апероль Шприц"}
                  weight={"300 мл"}
                  price={"465 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Сангрия Экстра Стронг"}
                  weight={"1 л"}
                  price={"1015 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Санрайз"}
                  weight={"400 мл"}
                  price={"260 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Мохито"}
                  weight={"400 мл"}
                  price={"260 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Джин Тоник Розовый"}
                  weight={"250 мл"}
                  price={"400 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Джин Тоник"}
                  weight={"250 мл"}
                  price={"390 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Пина Колада"}
                  weight={"400 мл"}
                  price={"390 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Лонг Айленд"}
                  weight={"400 мл"}
                  price={"400 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Мишель Шприц"}
                  weight={"300 мл"}
                  price={"505 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Мартини Фиеро Тоник"}
                  weight={"300 мл"}
                  price={"465 с"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>РОМ / КОНЬЯК</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#FED5CAB2" }}
                  title={"Капитан Морган"}
                  weight={"50 мл"}
                  price={"260 с"}
                  extra={"уайт / голд / дарк"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FED5CAB2" }}
                  title={"Бакарди"}
                  weight={"50 мл"}
                  price={"290 с"}
                  extra={"блэк / уайт / оакхарт / спайс"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FED5CAB2" }}
                  title={"Кыргызстан"}
                  weight={"50 мл"}
                  price={"240 с"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>ЛИКЕРЫ / БИТТЕРЫ / НАСТОЙКИ</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Малибу"}
                  weight={"50 МЛ"}
                  price={"280 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Апероль"}
                  weight={"50 МЛ"}
                  price={"280 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Бэйлис"}
                  weight={"50 МЛ"}
                  price={"300 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Трипл Сек"}
                  weight={"50 МЛ"}
                  price={"300 с"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>ПИВО</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Хугарден"}
                  weight={"440 МЛ"}
                  price={"280 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Стелла Артуа"}
                  weight={"500 МЛ"}
                  price={"290 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Хайнекен"}
                  weight={"330 МЛ"}
                  price={"230 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Корона Экстра"}
                  weight={"330 МЛ"}
                  price={"350 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Фильтрованное / Нефильтрованное"}
                  weight={"330/500 МЛ"}
                  price={"110/160 с"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>ВИСКИ</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Джон Джеймсон"}
                  weight={"50 мл"}
                  price={"400 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Джек Дэниелс"}
                  weight={"50 мл"}
                  price={"400 с"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>АПЕРИТИВЫ</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Мартини"}
                  weight={"100 мл"}
                  price={"310 с"}
                  extra={"бьянко / россо / драй"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#FEEABCE5" }}
                  title={"Мартини Фиерро"}
                  weight={"100 мл"}
                  price={"360 с"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>ТЕКИЛА</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC99" }}
                  title={"Ольмека"}
                  weight={"50 мл"}
                  price={"260 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC99" }}
                  title={"Сиерра"}
                  weight={"50 мл"}
                  price={"240 с"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>ДЖИН</span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC99" }}
                  title={"Бифитер"}
                  weight={"50 мл"}
                  price={"300 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC99" }}
                  title={"Гордонс розовый"}
                  weight={"50 мл"}
                  price={"280 с"}
                  extra={""}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC99" }}
                  title={"Гордонс"}
                  weight={"50 мл"}
                  price={"280 с"}
                  extra={""}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>СНЕКИ</span>
                  </div>
                </header>
                <div className="smuzi-main">
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Фисташки"}
                    price={"190 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Миндаль"}
                    price={"180 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Соленый арахис"}
                    price={"100 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Курут Шоро"}
                    price={"100 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Кириешки"}
                    price={"60 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Чечил"}
                    price={"110 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Жареный чечил"}
                    price={"60 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Принглс"}
                    price={"130 с"}
                  />
                </div>
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>СИГАРЕТЫ</span>
                  </div>
                </header>
                <div className="smuzi-main">
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Айкос стики"}
                    price={"330 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Парламент"}
                    price={"300 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Эссе"}
                    price={"300 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Ричмонд"}
                    price={"300 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Винстон"}
                    price={"260 с"}
                  />
                </div>
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>МИНИ БАР</span>
                  </div>
                </header>
                <div className="smuzi-main">
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Мёд"}
                    price={"80 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Лайм"}
                    price={"90 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Лимон"}
                    price={"70 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Орбит"}
                    price={"85 с"}
                  />
                  <SmuziSquaer
                    style={{ backgroundColor: "#FFFAE6" }}
                    title={"Зажигалка"}
                    price={"60 с"}
                  />
                </div>
              </>
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

export default BarPage;
