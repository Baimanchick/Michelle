import React, { useEffect, useState } from "react";
import CardMenuSalad from "../components/CardMenuSalad";

function MenuSalad() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {windowWidth <= 1000 ? (
        <div className="menu-main-content">
          <header className="menu-salad-header">
            <div className="menu-salad-title-container">
              <div>САЛАТЫ</div>
              <span>НЕ ЕДА, ЭТО СТИЛЬ</span>
            </div>
          </header>
          <CardMenuSalad />
        </div>
      ) : (
        <>
          <div className="thousand-px">
            <h2>
              Данный сайт не потдерживает экраны больше 1000 px, пожалуйста
              уменьшите ваш экран, либо зайдите через мобильное устройство
            </h2>
          </div>
        </>
      )}
    </>
  );
}

export default MenuSalad;
