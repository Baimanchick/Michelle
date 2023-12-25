import React from "react";
import "../css/salad.scss";

function CardSalad({ style, img, title, text, price, weight, icon }) {
  return (
    <div className="salad-card-main">
      <div className="salad-card-container">
        <div className="salad-card">
          <div className="salad-card-img">
            <img src={img} alt="" />
            <div className="white-block"></div>
            <div className="salad-card-absolute" style={style}>
              <div className="salad-card-title">
                <div>{title}</div>
                <span>{weight} г</span>
                <p>{text}</p>
              </div>
              <div className="salad-card-utils">
                <div className="salad-card-utils-wrapper-left">
                  <img style={{ marginTop: "5px" }} src={icon} alt="" />
                </div>
                <div className="salad-card-utils-wrapper-right">
                  <span>{price} С</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSalad;
