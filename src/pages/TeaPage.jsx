import React, { useEffect, useState } from "react";
import "../css/tea.scss";
import { useNavigate } from "react-router-dom";
import SliderMenu, { categories } from "../components/SliderMenu";
import TeaSquare from "../components/TeaSquare";
import img1 from "../images/tea/1.png";
import img2 from "../images/tea/EnBardak.png";
import imgTerKG from "../images/drinks/termos_kg.png";
import imgTerTR from "../images/drinks/termos_TR.png";
import imgTerEN from "../images/drinks/termos_mobile_EN.png";
import imgTerRU from "../images/coffe/image-2.png";

import { useLanguage } from "../functions/languageContext";

function TeaPage() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  let getCategory = localStorage.getItem("category");

  const [selectedCategory, setSelectedCategory] = useState(
    categories[Number(getCategory)]
  );
  const [categoryChange, setCategoryChange] = useState(false);
  const [notF, setNotF] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

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
          {selectedLanguage === "Русский" ? (
            <div className="tea-main">
              <header className="tea-header">
                <div className="tea-header-title">
                  <h2>ЧАЙ</h2>
                  <span>ФИРМЕННЫЕ</span>
                </div>
              </header>
              <img className="coffe-img-2" src={imgTerRU} alt="" />
              <div className="collagen-main-2">
                <div className="collagen-container-2">
                  <div className="collagen-wrapper-left">
                    С натуральными добавками без сахара и сиропов
                  </div>
                  <div className="collagen-wrapper-right"></div>
                </div>
              </div>
              <>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Облепиховый"}
                  weight={"400 мл/чайник"}
                  price={"160/300 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"С шиповником"}
                  weight={"400 мл/чайник"}
                  price={"160/300 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"С тимьяном"}
                  weight={"400 мл/чайник"}
                  price={"160/300 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Фруктовый"}
                  weight={"400 мл/чайник"}
                  price={"160/300 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"160/300 с"}
                  weight={"400 мл/чайник"}
                  price={"160/300 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Имбирный"}
                  weight={"400 мл/чайник"}
                  price={"160/300 с"}
                />
                <div
                  style={{ margin: "35px 0px 35px 0px" }}
                  className="collagen-main-2"
                >
                  <div className="collagen-container-2">
                    <div className="collagen-wrapper-left">
                      ВАЖНО!!! Очень много имбиря и лимона для повышения
                      иммунитета!
                    </div>
                    <div className="collagen-wrapper-right"></div>
                  </div>
                </div>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Лесная ягода"}
                  weight={"400 мл/чайник"}
                  price={"160/300 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Хвойный"}
                  weight={"400 мл/чайник"}
                  price={"160/360 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Карамельный персик"}
                  weight={"400 мл/чайник"}
                  price={"160/360 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Цитрусовый"}
                  weight={"400 мл/чайник"}
                  price={"160/360 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Яблочный"}
                  weight={"чайник"}
                  price={"360 с"}
                />
                <header className="tea-header">
                  <div className="tea-header-title">
                    <span style={{ margin: "35px 0px 35px 0px" }}>
                      ЛИСТОВОЙ
                    </span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Гринфилд"}
                  weight={"400 мл/чайник"}
                  price={"100/180 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Эрл Грей"}
                  weight={"400 мл/чайник"}
                  price={"100/180 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Жасмин"}
                  weight={"400 мл/чайник"}
                  price={"100/180 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Английская карамель"}
                  weight={"400 мл/чайник"}
                  price={"100/180 с"}
                />
                <img className="tea-img" src={img1} alt="" />
                <header className="tea-header">
                  <div className="tea-header-title">
                    <span style={{ margin: "35px 0px 35px 0px" }}>
                      ЛЕЧИМСЯ НА ТРАВАХ
                    </span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Успокоительный"}
                  weight={"чайник"}
                  price={"190 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"От кашля и бронхита"}
                  weight={"чайник"}
                  price={"190 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"При гипертонии"}
                  weight={"чайник"}
                  price={"190 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Для похудения (анчан)"}
                  weight={"чайник"}
                  price={"230 с"}
                />
                <header className="tea-header">
                  <div className="tea-header-title">
                    <span style={{ margin: "35px 0px 35px 0px" }}>
                      ЧАЙНЫЙ ПЬЯНИЦА
                    </span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Да Хун Пао"}
                  weight={"400 мл/чайник"}
                  price={"100/180 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Те Гуань Инь"}
                  weight={"400 мл/чайник"}
                  price={"100/180 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Улун"}
                  weight={"400 мл/чайник"}
                  price={"100/180 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Пуэр"}
                  weight={"400 мл/чайник"}
                  price={"110/200 с"}
                />
                <header className="tea-header">
                  <div className="tea-header-title">
                    <span style={{ margin: "35px 0px 35px 0px" }}>
                      АЙС МИКС
                    </span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Айс матча"}
                  weight={"400 мл"}
                  price={"280 с"}
                  extra={"(зелёная/голубая)"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Классический чай со льдом"}
                  weight={"330 мл"}
                  price={"140 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Ягодный чай со льдом"}
                  weight={"330 мл"}
                  price={"160 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Облепиховый чай со льдом"}
                  weight={"330 мл"}
                  price={"150 с"}
                />

                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Матча тоник"}
                  weight={"250 мл"}
                  price={"250 с"}
                />
              </>
            </div>
          ) : selectedLanguage === "English" ? (
            <div className="tea-main">
              <header className="tea-header">
                <div className="tea-header-title">
                  <h2>TEA</h2>
                  <span>Special Recipes</span>
                </div>
              </header>
              <img className="coffe-img-2" src={imgTerEN} alt="" />
              <div className="collagen-main-2">
                <div className="collagen-container-2">
                  <div className="collagen-wrapper-left">
                    with natural additives sugar-free
                  </div>
                  <div className="collagen-wrapper-right"></div>
                </div>
              </div>
              <>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Sea buckthorn"}
                  weight={"400 ml/tea pot"}
                  price={"160/300 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Rose hips"}
                  weight={"400 ml/tea pot"}
                  price={"160/300 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Thyme"}
                  weight={"400 ml/tea pot"}
                  price={"160/300 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Fruit"}
                  weight={"400 ml/tea pot"}
                  price={"160/300 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Nomad"}
                  weight={"400 ml/tea pot"}
                  price={"160/300 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Ginger"}
                  weight={"400 ml/tea pot"}
                  price={"160/300 KGS"}
                />
                <div
                  style={{ margin: "35px 0px 35px 0px" }}
                  className="collagen-main-2"
                >
                  <div className="collagen-container-2">
                    <div className="collagen-wrapper-left">
                      Please note that we use a lot of ginger and lemon in this
                      recipe to boost the immune system!
                    </div>
                    <div className="collagen-wrapper-right"></div>
                  </div>
                </div>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Forest berry"}
                  weight={"400 ml/tea pot"}
                  price={"160/300 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Coniferous"}
                  weight={"400 ml/tea pot"}
                  price={"160/360 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Caramel peach "}
                  weight={"400 ml/tea pot"}
                  price={"160/360 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Citrus"}
                  weight={"400 ml/tea pot"}
                  price={"160/360 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Apple"}
                  weight={"tea pot"}
                  price={"360 KGS"}
                />
                <header className="tea-header">
                  <div className="tea-header-title">
                    <span style={{ margin: "35px 0px 35px 0px" }}>
                      LEAF TEA
                    </span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"“Greenfield”"}
                  weight={"400 ml/tea pot"}
                  price={"100/180 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Earl Grey"}
                  weight={"400 ml/tea pot"}
                  price={"100/180 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Jasmine"}
                  weight={"400 ml/tea pot"}
                  price={"100/180 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"English caramel"}
                  weight={"400 ml/tea pot"}
                  price={"100/180 KGS"}
                />
                <img className="tea-img" src={img2} alt="" />
                <header className="tea-header">
                  <div className="tea-header-title">
                    <span style={{ margin: "35px 0px 35px 0px" }}>
                      HERBAL TEA
                    </span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Relax"}
                  weight={"tea pot"}
                  price={"190 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Cough tea"}
                  weight={"tea pot"}
                  price={"190 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"For hypertension"}
                  weight={"tea pot"}
                  price={"190 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"For weight loss "}
                  weight={"tea pot"}
                  price={"230 KGS"}
                />
                <header className="tea-header">
                  <div className="tea-header-title">
                    <span style={{ margin: "35px 0px 35px 0px" }}>
                      TEA-DRUNKARD
                    </span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Da Hong Pao"}
                  weight={"400 ml/tea pot"}
                  price={"100/180 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Tieguanyin"}
                  weight={"400 ml/tea pot"}
                  price={"100/180 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Oolong"}
                  weight={"400 ml/tea pot"}
                  price={"100/180 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Puerh"}
                  weight={"400 ml/tea pot"}
                  price={"110/200 KGS"}
                />
                <header className="tea-header">
                  <div className="tea-header-title">
                    <span style={{ margin: "35px 0px 35px 0px" }}>
                      ICED MIX
                    </span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Iced matcha"}
                  weight={"400 ml"}
                  price={"280 KGS"}
                  extra={"green / blue"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Classical iced tea"}
                  weight={"330 ml"}
                  price={"140 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Berry iced tea"}
                  weight={"330 ml"}
                  price={"160 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Sea buckthorn iced tea"}
                  weight={"330 ml"}
                  price={"150 KGS"}
                />

                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Matcha tonic"}
                  weight={"250 ml"}
                  price={"250 KGS"}
                />
              </>
            </div>
          ) : selectedLanguage === "Türkçe" ? (
            <div className="tea-main">
              <header className="tea-header">
                <div className="tea-header-title">
                  <h2>ÇAY</h2>
                  <span>Özel Tarifler</span>
                </div>
              </header>
              <img className="coffe-img-2" src={imgTerTR} alt="" />

              <div className="collagen-main-2">
                <div className="collagen-container-2">
                  <div className="collagen-wrapper-left">
                    doğal katkılı şekersiz
                  </div>
                  <div className="collagen-wrapper-right"></div>
                </div>
              </div>
              <>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Sea buckthorn"}
                  weight={"400 ml/tea pot"}
                  price={"160/300 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Rose hips"}
                  weight={"400 ml/tea pot"}
                  price={"160/300 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Thyme"}
                  weight={"400 ml/tea pot"}
                  price={"160/300 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Fruit"}
                  weight={"400 ml/tea pot"}
                  price={"160/300 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Nomad"}
                  weight={"400 ml/tea pot"}
                  price={"160/300 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Ginger"}
                  weight={"400 ml/tea pot"}
                  price={"160/300 KGS"}
                />
                <div
                  style={{ margin: "35px 0px 35px 0px" }}
                  className="collagen-main-2"
                >
                  <div className="collagen-container-2">
                    <div className="collagen-wrapper-left">
                      Please note that we use a lot of ginger and lemon in this
                      recipe to boost the immune system!
                    </div>
                    <div className="collagen-wrapper-right"></div>
                  </div>
                </div>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Forest berry"}
                  weight={"400 ml/tea pot"}
                  price={"160/300 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Coniferous"}
                  weight={"400 ml/tea pot"}
                  price={"160/360 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Caramel peach "}
                  weight={"400 ml/tea pot"}
                  price={"160/360 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Citrus"}
                  weight={"400 ml/tea pot"}
                  price={"160/360 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Apple"}
                  weight={"tea pot"}
                  price={"360 KGS"}
                />
                <header className="tea-header">
                  <div className="tea-header-title">
                    <span style={{ margin: "35px 0px 35px 0px" }}>
                      LEAF TEA
                    </span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"“Greenfield”"}
                  weight={"400 ml/tea pot"}
                  price={"100/180 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Earl Grey"}
                  weight={"400 ml/tea pot"}
                  price={"100/180 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Jasmine"}
                  weight={"400 ml/tea pot"}
                  price={"100/180 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"English caramel"}
                  weight={"400 ml/tea pot"}
                  price={"100/180 KGS"}
                />
                <img className="tea-img" src={img1} alt="" />
                <header className="tea-header">
                  <div className="tea-header-title">
                    <span style={{ margin: "35px 0px 35px 0px" }}>
                      HERBAL TEA
                    </span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Relax"}
                  weight={"tea pot"}
                  price={"190 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Cough tea"}
                  weight={"tea pot"}
                  price={"190 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"For hypertension"}
                  weight={"tea pot"}
                  price={"190 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"For weight loss "}
                  weight={"tea pot"}
                  price={"230 KGS"}
                />
                <header className="tea-header">
                  <div className="tea-header-title">
                    <span style={{ margin: "35px 0px 35px 0px" }}>
                      TEA-DRUNKARD
                    </span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Da Hong Pao"}
                  weight={"400 ml/tea pot"}
                  price={"100/180 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Tieguanyin"}
                  weight={"400 ml/tea pot"}
                  price={"100/180 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Oolong"}
                  weight={"400 ml/tea pot"}
                  price={"100/180 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Puerh"}
                  weight={"400 ml/tea pot"}
                  price={"110/200 KGS"}
                />
                <header className="tea-header">
                  <div className="tea-header-title">
                    <span style={{ margin: "35px 0px 35px 0px" }}>
                      ICED MIX
                    </span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Iced matcha"}
                  weight={"400 ml"}
                  price={"280 KGS"}
                  extra={"green / blue"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Classical iced tea"}
                  weight={"330 ml"}
                  price={"140 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Berry iced tea"}
                  weight={"330 ml"}
                  price={"160 KGS"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Sea buckthorn iced tea"}
                  weight={"330 ml"}
                  price={"150 KGS"}
                />

                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Matcha tonic"}
                  weight={"250 ml"}
                  price={"250 KGS"}
                />
              </>
            </div>
          ) : selectedLanguage === "Кыргызча" ? (
            <div className="tea-main">
              <header className="tea-header">
                <div className="tea-header-title">
                  <h2>ЧАЙ</h2>
                  <span>ФИРМЕННЫЙ</span>
                </div>
              </header>
              <img className="coffe-img-2" src={imgTerKG} alt="" />

              <div className="collagen-main-2">
                <div className="collagen-container-2">
                  <div className="collagen-wrapper-left">
                    Шекерсиз жана сиропсуз табигый кошумчалар менен
                  </div>
                  <div className="collagen-wrapper-right"></div>
                </div>
              </div>
              <>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Облепиховый"}
                  weight={"400 мл/чайник"}
                  price={"160/300 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Шиповник"}
                  weight={"400 мл/чайник"}
                  price={"160/300 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Тимьян"}
                  weight={"400 мл/чайник"}
                  price={"160/300 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Фруктовый"}
                  weight={"400 мл/чайник"}
                  price={"160/300 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"160/300 с"}
                  weight={"400 мл/чайник"}
                  price={"160/300 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Имбирный"}
                  weight={"400 мл/чайник"}
                  price={"160/300 с"}
                />
                <div
                  style={{ margin: "35px 0px 35px 0px" }}
                  className="collagen-main-2"
                >
                  <div className="collagen-container-2">
                    <div className="collagen-wrapper-left">
                      ВАЖНО!!! Очень много имбиря и лимона для повышения
                      иммунитета!
                    </div>
                    <div className="collagen-wrapper-right"></div>
                  </div>
                </div>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Лесная ягода"}
                  weight={"400 мл/чайник"}
                  price={"160/300 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Хвойный"}
                  weight={"400 мл/чайник"}
                  price={"160/360 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Карамельный персик"}
                  weight={"400 мл/чайник"}
                  price={"160/360 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Цитрусовый"}
                  weight={"400 мл/чайник"}
                  price={"160/360 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Яблочный"}
                  weight={"чайник"}
                  price={"360 с"}
                />
                <header className="tea-header">
                  <div className="tea-header-title">
                    <span style={{ margin: "35px 0px 35px 0px" }}>
                      ЛИСТОВОЙ
                    </span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Гринфилд"}
                  weight={"400 мл/чайник"}
                  price={"100/180 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Эрл Грей"}
                  weight={"400 мл/чайник"}
                  price={"100/180 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Жасмин"}
                  weight={"400 мл/чайник"}
                  price={"100/180 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Английская карамель"}
                  weight={"400 мл/чайник"}
                  price={"100/180 с"}
                />
                <img className="tea-img" src={img1} alt="" />
                <header className="tea-header">
                  <div className="tea-header-title">
                    <span style={{ margin: "35px 0px 35px 0px" }}>
                      ЛЕЧИМСЯ НА ТРАВАХ
                    </span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Тынчтандыруучу"}
                  weight={"чайник"}
                  price={"190 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Жөтөл жана бронхит үчүн"}
                  weight={"чайник"}
                  price={"190 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Гипертония үчүн"}
                  weight={"чайник"}
                  price={"190 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Арыктоо үчүн (анчан)"}
                  weight={"чайник"}
                  price={"230 с"}
                />
                <header className="tea-header">
                  <div className="tea-header-title">
                    <span style={{ margin: "35px 0px 35px 0px" }}>
                      ЧАЙ Ичүүчү
                    </span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Да Хун Пао"}
                  weight={"400 мл/чайник"}
                  price={"100/180 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Те Гуань Инь"}
                  weight={"400 мл/чайник"}
                  price={"100/180 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Улун"}
                  weight={"400 мл/чайник"}
                  price={"100/180 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Пуэр"}
                  weight={"400 мл/чайник"}
                  price={"110/200 с"}
                />
                <header className="tea-header">
                  <div className="tea-header-title">
                    <span style={{ margin: "35px 0px 35px 0px" }}>
                      АЙС МИКС
                    </span>
                  </div>
                </header>
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Айс матча"}
                  weight={"400 мл"}
                  price={"280 с"}
                  extra={"(зелёная/голубая)"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Классикалык муздак чай"}
                  weight={"330 мл"}
                  price={"140 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Берри муздак чай"}
                  weight={"330 мл"}
                  price={"160 с"}
                />
                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Чычырканак муздак чай"}
                  weight={"330 мл"}
                  price={"150 с"}
                />

                <TeaSquare
                  style={{ backgroundColor: "#E6EBDC" }}
                  title={"Матча тоник"}
                  weight={"250 мл"}
                  price={"250 с"}
                />
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

export default TeaPage;
