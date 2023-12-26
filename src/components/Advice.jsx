import React from "react";
import "../css/advice.scss";

function Advice({ text, style }) {
  return (
    <>
      <div style={style} className="advice-main">
        <div className="advice-container">
          <div className="advice">
            <div className="advice-title-container">
              <span>Полезные советы:</span>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Advice;
