import React from "react";
import "../css/advice.scss";

function Advice({ text }) {
  return (
    <>
      <div className="advice-main">
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
