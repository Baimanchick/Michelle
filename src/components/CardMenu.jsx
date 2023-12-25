import React, { useEffect } from "react";
import "../css/menu.scss";
import cardIcon1 from "../images/svgs/Пшеница.svg";
import cardIcon2 from "../images/svgs/Листок.svg";


function CardMenu({ style, img, title, text, price, weight }) {
  // const apiKey = 'AIzaSyAst05fMAnCcrrwYWXULEMrvvcsIG28goQ';

  return (
    <div className="menu-card-main">
      <div className="menu-card-container">
        <div className="menu-card">
          <div className="menu-card-img">
            <img src={img} alt="" />
            <div className="white-block"></div>

            <div className="menu-card-absolute" style={style}>
              <div className="menu-card-title">
                <div>{title}</div>
                <span>{weight}</span>
                <p>{text}</p>
              </div>
              <div className="menu-card-utils">
                <div className="card-utils-wrapper-left">
                  <img style={{ marginTop: "5px" }} src={cardIcon1} alt="" />
                  <img style={{ marginLeft: "5px" }} src={cardIcon2} alt="" />
                </div>
                <div className="card-utils-wrapper-right">
                  <span>{price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardMenu;
