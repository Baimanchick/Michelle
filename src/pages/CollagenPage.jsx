import React, { useEffect, useState } from "react";
import "../css/collagen.scss";
import { useNavigate } from "react-router-dom";
import SliderMenu, { categories } from "../components/SliderMenu";

function CollagenPage() {
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

  const handleNotF = (category) => {
    if (category.name !== "ЗАВТРАКИ") {
      setNotF(true);
      navigate("/notf");
    } else {
      setNotF(false);
    }
  };

  const navigate = useNavigate();
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
        <div className="collagen-main">
          <header className="collagen-header">
            <h2>КОЛЛАГЕН</h2>
            <p>
              для всех ценителей <br /> здорового образа жизни и красоты!
            </p>
          </header>
          <div className="collagen-container">
            <div className="collagen-rectangle-main">
              <div className="collagen-rectangle-container">
                <div className="collagen-rectangle-title">
                  <p>
                    Коллаген — это белок, который играет ключевую роль в нашем
                    организме.
                  </p>
                </div>
              </div>
            </div>
            <div className="collagen-rectangle-main">
              <div className="collagen-rectangle-container">
                <div className="collagen-rectangle-title">
                  <p>
                    Главная сила коллагена — его свойство поддерживать тонус и
                    молодость кожи, а также здоровье суставов
                    и опорно-двигательного аппарата .
                  </p>
                </div>
              </div>
            </div>
            <div className="collagen-rectangle-main">
              <div className="collagen-rectangle-container">
                <div className="collagen-rectangle-title">
                  <p>
                    Благодаря коллагену сохраняется оптимальный уровень воды
                    в организме, ускоряются процессы регенерации кожи,
                    уменьшается болевой синдром, снижается ломкость волос,
                    ногтей и многое другое!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="collagen-title">
          <div>
            Ощути всю пользу <br /> коллагена!
          </div>
        </div>
        <div style={{ paddingBottom: "300px" }}>
          <div className="collagen-main-2">
            <div className="collagen-container-2">
              <div className="collagen-wrapper-left">
                + добавить коллаген для красоты, молодости и здоровья
              </div>
              <div className="collagen-wrapper-right">
                <span>20г</span>
                <h5>150c</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollagenPage;
