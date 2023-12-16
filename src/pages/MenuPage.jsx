import React from "react";
import "../css/menu.scss";
import CardMenuBreakfast from "../components/CardMenuBreakfast";

function MenuPage() {
  return (
    <div className="menu-main-content">
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
        {/*  */}

        <div className="menu-container-h2">
          <h2>КАША</h2>
        </div>

        <CardMenuBreakfast />

        {/*  */}
      </div>
    </div>
  );
}

export default MenuPage;
