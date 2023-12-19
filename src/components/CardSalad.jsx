import React from "react";
import "../css/salad.scss";

function CardSalad({
  style,
  img,
  title,
  text,
  price,
  weight,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
  icon10,
}) {
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
                <span>{weight}</span>
                <p>{text}</p>
              </div>
              <div className="salad-card-utils">
                <div className="salad-card-utils-wrapper-left">
                  <img style={{ marginTop: "5px" }} src={icon1} alt="" />
                  <img style={{ marginLeft: "5px" }} src={icon2} alt="" />
                  <img style={{ marginTop: "5px" }} src={icon3} alt="" />
                  <img style={{ marginLeft: "5px" }} src={icon4} alt="" />
                  <img style={{ marginTop: "5px" }} src={icon5} alt="" />
                  <img style={{ marginLeft: "5px" }} src={icon6} alt="" />
                  <img style={{ marginTop: "5px" }} src={icon7} alt="" />
                  <img style={{ marginLeft: "5px" }} src={icon8} alt="" />
                  <img style={{ marginTop: "5px" }} src={icon9} alt="" />
                  <img style={{ marginLeft: "5px" }} src={icon10} alt="" />
                </div>
                <div className="salad-card-utils-wrapper-right">
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

export default CardSalad;
