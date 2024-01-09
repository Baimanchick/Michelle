import React from "react";
import "../css/advice.scss";
import { useLanguage } from "../functions/languageContext";

function Advice({ text, style }) {
  const { selectedLanguage } = useLanguage();

  return (
    <>
      <div style={style} className="advice-main">
        <div className="advice-container">
          <div className="advice">
            <div className="advice-title-container">
              { selectedLanguage === "Русский" ? (
                <span>Полезные советы:</span>
              ) : selectedLanguage === "English" ? (
                <span>Useful tips:</span>
              ) : selectedLanguage === "Türkçe" ? (
                <span>Faydalı ipuçları:</span>
              ) : selectedLanguage === "Кыргызча" ? (
                <span>Пайдалуу кеңештер:</span>
              ) : null }
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Advice;
