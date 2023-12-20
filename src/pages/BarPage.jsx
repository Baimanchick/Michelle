import React, { useEffect, useState } from "react";
import "../css/drinks.scss";
import { useNavigate } from "react-router-dom";
import SliderMenu, { categories } from "../components/SliderMenu";
import TeaSquare from "../components/TeaSquare";
import img1 from "../images/drinks/1.png";
import SmuziSquaer from "../components/SmuziSquaer";

function BarPage() {
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
              <SmuziSquaer title={"Фисташки"} price={"190 с"} />
              <SmuziSquaer title={"Миндаль"} price={"180 с"} />
              <SmuziSquaer title={"Соленый арахис"} price={"100 с"} />
              <SmuziSquaer title={"Курут Шоро"} price={"100 с"} />
              <SmuziSquaer title={"Кириешки"} price={"60 с"} />
              <SmuziSquaer title={"Чечил"} price={"110 с"} />
              <SmuziSquaer title={"Жареный чечил"} price={"60 с"} />
              <SmuziSquaer title={"Принглс"} price={"130 с"} />
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
              <SmuziSquaer title={"Айкос стики"} price={"330 с"} />
              <SmuziSquaer title={"Парламент"} price={"300 с"} />
              <SmuziSquaer title={"Эссе"} price={"300 с"} />
              <SmuziSquaer title={"Ричмонд"} price={"300 с"} />
              <SmuziSquaer title={"Винстон"} price={"260 с"} />
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
              <SmuziSquaer title={"Мёд"} price={"80 с"} />
              <SmuziSquaer title={"Лайм"} price={"90 с"} />
              <SmuziSquaer title={"Лимон"} price={"70 с"} />
              <SmuziSquaer title={"Орбит"} price={"85 с"} />
              <SmuziSquaer title={"Зажигалка"} price={"60 с"} />
            </div>
          </>
        </div>
        <div style={{ paddingBottom: "200px" }}></div>
      </div>
    </>
  );
}

export default BarPage;
