import React, { useState, useEffect } from "react";
import "../css/menu.scss";
import CardMenuBreakfast from "../components/CardMenuBreakfast";

function MenuDishes() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="menu-main-content">
      {isLoading ? (
        <div className="loading-indicator">
          <div class="container">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
      ) : (
        <>
          <header className="menu-header">
            <div className="menu-title-container">
              <hr />
              <h2>КЛАССИЧЕСКИЕ</h2>
              <hr />
            </div>
            <div className="menu-title-span">
              <span>НА НОВЫЙ ЛАД</span>
            </div>
          </header>
          <div className="menu-container">
            <div className="menu-container-h2">
              <h2>КАША</h2>
            </div>
            <CardMenuBreakfast />
          </div>
        </>
      )}
    </div>
  );
}

export default MenuDishes;
