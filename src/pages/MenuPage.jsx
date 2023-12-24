import React, { useEffect, useState } from "react";
import "../css/MenuPage.css";
import logo from "../images/else/Michelle Vector.svg";
import burger from "../images/else/Group 115.svg";
import arrowleft from "../images/else/Group 118.svg";
import arrowright from "../images/else/Group 117.svg";
import SliderMenu, { categories } from "../components/SliderMenu";
import FullscreenMenu from "../components/FullscreenMenu";
import { useNavigate } from "react-router-dom";
import CardMenu from "../components/CardMenu";
import CardMenuNav from "../components/CardMenuNav";
import axios from "axios";

function MenuPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [ categoriesFetched, setCategoriesFetched ] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get('https://sanjiks.pythonanywhere.com/categories/');
        setCategoriesFetched(res.data);
      } catch (error) {
        console.log(error)
      }
    }

    fetchCategory();
  }, [])

  const navigate = useNavigate();

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
        <>
          <div
            style={{ fontSize: "38px", textAlign: "center", marginTop: "50px" }}
          >
            МЕНЮ
          </div>
          <div className="block-nav-menu">
            {categoriesFetched.map((category) => {
              return (
                <CardMenuNav
                  title={category.title}
                  img={category.image}
                  link={category.link}
                  key={category}
                />
              );
            })}
          </div>
        </>
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

export default MenuPage;
