import React, { useEffect, useState } from "react";
import CardMenuSalad from "../components/CardMenuSalad";
import axios from "axios";
import CardSalad from "../components/CardSalad";

function MenuSalad() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const res = await axios.get("http://167.71.33.221/dishes/");
        setDishes(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDishes();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Filter items with category 3
  const filteredData = dishes.filter((item) => item.category === 3);

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
          {filteredData.map((item) => (
            <>
              <div className="main-card-break">
                <CardSalad
                  key={item.id}
                  data={item}
                  title={item.title}
                  img={item.image}
                  text={item.text}
                  weight={item.weight}
                  price={item.price}
                  icon={item.svgs}
                />
              </div>
            </>
          ))}
        </div>
      ) : (
        <>
          <div className="thousand-px">
            <h2>
              Данный сайт не поддерживает экраны больше 1000 px, пожалуйста
              уменьшите ваш экран, либо зайдите через мобильное устройство
            </h2>
          </div>
        </>
      )}
    </>
  );
}

export default MenuSalad;
