import React, { useEffect, useState } from "react";
import "../css/tea.scss";
import { useNavigate } from "react-router-dom";
import SliderMenu, { categories } from "../components/SliderMenu";
import TeaSquare from "../components/TeaSquare";
import img1 from "../images/tea/1.png";

function TeaPage() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [categoryChange, setCategoryChange] = useState(false);
  const [notF, setNotF] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCategoryChange(true);
  };

  const navigate = useNavigate;
  return (
    <>
      <div className="menu-main-content">
        <div className="menu-stick">
          <SliderMenu onSelectCategory={handleSelectCategory} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          </div>
        </div>
        <div className="tea-main">
          <header className="tea-header">
            <div className="tea-header-title">
              <h2>ЧАЙ</h2>
              <span>ФИРМЕННЫЕ</span>
            </div>
          </header>
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
                  ВАЖНО!!! Очень много имбиря и лимона для повышения иммунитета!
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
                <span style={{ margin: "35px 0px 35px 0px" }}>ЛИСТОВОЙ</span>
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
                <span style={{ margin: "35px 0px 35px 0px" }}>АЙС МИКС</span>
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
        <div style={{ paddingBottom: "200px" }}></div>
      </div>
    </>
  );
}

export default TeaPage;
