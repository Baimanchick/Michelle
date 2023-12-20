import React from "react";
import "../css/smuzi.scss";

function SmuziSquaer({ style, title, price }) {
  return (
    <>
      <div style={style} className="smuzi-square-main">
        <div className="smuzi-square-container">
          <div className="smuzi-square-title">{title}</div>
          <div className="smuzi-square-price">{price}</div>
        </div>
      </div>
    </>
  );
}

export default SmuziSquaer;
