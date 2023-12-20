import React, { useEffect, useState } from "react";
import "../css/drinks.scss";
import { useNavigate } from "react-router-dom";
import SliderMenu, { categories } from "../components/SliderMenu";
import TeaSquare from "../components/TeaSquare";
import img1 from "../images/drinks/1.png";

function DrinksPage() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [categoryChange, setCategoryChange] = useState(false);
  const [notF, setNotF] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCategoryChange(true);
  };

  const handleNotF = (category) => {
    if (category.name !== "ЗАВТРАКИ") {
      setNotF(true);
      navigate("/notf");
    } else {
      setNotF(false);
    }
  };
  return (
    <>
      <div className="menu-main-content">
        <div className="menu-stick">
          <SliderMenu onSelectCategory={handleNotF} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{ marginTop: "10px" }}
              className="btn-more"
              onClick={() => navigate("/categories")}
            >
              ВЕРНУТЬСЯ
            </button>
          </div>
        </div>
        <div className="drinks-main">
          <header className="tea-header">
            <div className="tea-header-title">
              <h2>НАПИТКИ</h2>
              <span>ГОРЯЧИЙ МИКС</span>
            </div>
          </header>
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
                    В наших напитках мы используем исключительно натуральный
                    бельгийский шоколад, натуральные 33% сливки и никаких
                    порошковых заменителей!
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
        <div style={{ paddingBottom: "200px" }}></div>
      </div>
    </>
  );
}

export default DrinksPage;
