import React, { useEffect, useState } from "react";
import "../css/notfouned.scss";
import { useNavigate } from "react-router-dom";

function NotFounedPage() {
  const navigate = useNavigate();
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
        <div className="not-container">
          <div>
            <h2>Извините но такой страницы не существует :)</h2>
            <h3 onClick={() => navigate("/categories")}>Главное меню</h3>
          </div>
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

export default NotFounedPage;
