import React, { useEffect, useState } from "react";
import "../css/tea.scss";
import { useNavigate } from "react-router-dom";
import SliderMenu, { categories } from "../components/SliderMenu";
import TeaSquare from "../components/TeaSquare";
import img1 from "../images/tea/1.png";
import SmuziSquaer from "../components/SmuziSquaer";
import { useLanguage } from "../functions/languageContext";

function SmuziPage() {
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
            <div className="tea-main">
              <header className="tea-header">
                <div className="tea-header-title">
                  <h2>СМУЗИ-ПАЗЛ</h2>
                  <span>Основа на выбор</span>
                </div>
              </header>
              <div className="smuzi-main">
                <SmuziSquaer
                  title={"Йогурт"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <SmuziSquaer
                  title={"Яблочный фреш"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <SmuziSquaer
                  title={"Молоко"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <SmuziSquaer
                  title={"Морковный фреш"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <SmuziSquaer
                  title={"Вода"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <SmuziSquaer
                  title={"Яблочно-морковный фреш"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <SmuziSquaer
                  title={"Сок Gracio в ассортименте"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <header className="tea-header">
                  <div className="tea-header-title">
                    <span>Добавить в свой смузи:</span>
                  </div>
                </header>
                <SmuziSquaer
                  title={"Шпинат"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Огурец"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Мята"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Айсберг салат"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Лимон"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Яблоко"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Киви"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Клубника"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Малина"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Смородина"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Банан"}
                  style={{ backgroundColor: "#FFF" }}
                />
                {/*  */}
                <div className="smuzi-s-main">
                  <div className="smuzi-s-container">
                    <div className="smuzi-s">
                      <div className="smuzi-wrapper-left">
                        <div>Стоимость на воде:</div>
                        <div>На любой другой основе:</div>
                        <div>Объём:</div>
                      </div>
                      <div className="smuzi-wrapper-right">
                        <div>210 c</div>
                        <div>260 c</div>
                        <span>300 мл</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          ) : selectedLanguage === "English" ? (
            <div className="tea-main">
              <header className="tea-header">
                <div className="tea-header-title">
                  <h2>SMOTHY PUZZLE</h2>
                </div>
              </header>
              <div className="smuzi-main">
                <SmuziSquaer
                  title={"Yogurt"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <SmuziSquaer
                  title={"Fresh apple juice"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <SmuziSquaer
                  title={"Milk"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <SmuziSquaer
                  title={"Fresh carrot juice"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <SmuziSquaer
                  title={"Water"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <SmuziSquaer
                  title={"Fresh apple-carrot juice"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <SmuziSquaer
                  title={"Gracio juice"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <header className="tea-header">
                  <div className="tea-header-title">
                    <span>Add to the smoothie:</span>
                  </div>
                </header>
                <SmuziSquaer
                  title={"Spinach"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Cucumber"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Mint"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Iceberg lettuce"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Lemon"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Apple"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Kiw"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Strawberry"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Raspberry"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Blackcurrant"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Banana"}
                  style={{ backgroundColor: "#FFF" }}
                />
                {/*  */}
                <div className="smuzi-s-main">
                  <div className="smuzi-s-container">
                    <div className="smuzi-s">
                      <div className="smuzi-wrapper-left">
                        <div>Cost with water:</div>
                        <div>Cost with any other base:</div>
                        <div>Volume:</div>
                      </div>
                      <div className="smuzi-wrapper-right">
                        <div>210 KGS</div>
                        <div>260 KGS</div>
                        <span>300 ml</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          ) : selectedLanguage === "Turkce" ? (
            <div className="tea-main">
              <header className="tea-header">
                <div className="tea-header-title">
                  <h2>SMOTHY PUZZLE</h2>
                </div>
              </header>
              <div className="smuzi-main">
                <SmuziSquaer
                  title={"Yogurt"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <SmuziSquaer
                  title={"Fresh apple juice"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <SmuziSquaer
                  title={"Milk"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <SmuziSquaer
                  title={"Fresh carrot juice"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <SmuziSquaer
                  title={"Water"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <SmuziSquaer
                  title={"Fresh apple-carrot juice"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <SmuziSquaer
                  title={"Gracio juice"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <header className="tea-header">
                  <div className="tea-header-title">
                    <span>Add to the smoothie:</span>
                  </div>
                </header>
                <SmuziSquaer
                  title={"Spinach"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Cucumber"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Mint"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Iceberg lettuce"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Lemon"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Apple"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Kiw"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Strawberry"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Raspberry"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Blackcurrant"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Banana"}
                  style={{ backgroundColor: "#FFF" }}
                />
                {/*  */}
                <div className="smuzi-s-main">
                  <div className="smuzi-s-container">
                    <div className="smuzi-s">
                      <div className="smuzi-wrapper-left">
                        <div>Cost with water:</div>
                        <div>Cost with any other base:</div>
                        <div>Volume:</div>
                      </div>
                      <div className="smuzi-wrapper-right">
                        <div>210 KGS</div>
                        <div>260 KGS</div>
                        <span>300 ml</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          ) : selectedLanguage === "Кыргзча" ? (
            <div className="tea-main">
              <header className="tea-header">
                <div className="tea-header-title">
                  <h2>СМУЗИ-ПАЗЛ</h2>
                  <span>Основа на выбор</span>
                </div>
              </header>
              <div className="smuzi-main">
                <SmuziSquaer
                  title={"Йогурт"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <SmuziSquaer
                  title={"Яблочный фреш"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <SmuziSquaer
                  title={"Молоко"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <SmuziSquaer
                  title={"Морковный фреш"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <SmuziSquaer
                  title={"Вода"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <SmuziSquaer
                  title={"Яблочно-морковный фреш"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <SmuziSquaer
                  title={"Сок Gracio в ассортименте"}
                  style={{ backgroundColor: "#FBCB001A" }}
                />
                <header className="tea-header">
                  <div className="tea-header-title">
                    <span>Добавить в свой смузи:</span>
                  </div>
                </header>
                <SmuziSquaer
                  title={"Шпинат"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Огурец"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Мята"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Айсберг салат"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Лимон"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Яблоко"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Киви"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Клубника"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Малина"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Смородина"}
                  style={{ backgroundColor: "#FFF" }}
                />
                <SmuziSquaer
                  title={"Банан"}
                  style={{ backgroundColor: "#FFF" }}
                />
                {/*  */}
                <div className="smuzi-s-main">
                  <div className="smuzi-s-container">
                    <div className="smuzi-s">
                      <div className="smuzi-wrapper-left">
                        <div>Стоимость на воде:</div>
                        <div>На любой другой основе:</div>
                        <div>Объём:</div>
                      </div>
                      <div className="smuzi-wrapper-right">
                        <div>210 c</div>
                        <div>260 c</div>
                        <span>300 мл</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
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

export default SmuziPage;
