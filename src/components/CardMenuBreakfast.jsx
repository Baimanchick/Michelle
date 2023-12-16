import React from "react";
import cardIcon1 from "../images/card-icon-1.svg";
import cardIcon2 from "../images/card-icon-2.svg";
import img1 from "../images/card-1.png";
import blin from "../images/blin.png";
import "../css/menu.scss";

function CardMenuBreakfast() {
  return (
    <div className="menu-card-main">
      <div className="menu-card-container">
        <div className="menu-card">
          <div className="menu-card-img">
            <img src={img1} alt="" />
            <div className="menu-card-absolute">
              <div className="menu-card-title">
                <div>Рисовая каша</div>
                <span>250 г</span>
                <p>
                  Состав: рис, молоко, сливки, сгущённое молоко, банан,
                  смородина, фисташки, миндаль
                </p>
              </div>
              <div className="menu-card-utils">
                <div className="card-utils-wrapper-left">
                  <img style={{ marginTop: "5px" }} src={cardIcon1} alt="" />
                  <img style={{ marginLeft: "5px" }} src={cardIcon2} alt="" />
                </div>
                <div className="card-utils-wrapper-right">
                  <span>230 С</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardMenuBreakfast;
