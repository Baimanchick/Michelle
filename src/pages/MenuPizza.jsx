import React, { useEffect, useState } from "react";
import "../css/soap.scss";
import SliderMenu, { categories } from "../components/SliderMenu";
import { useNavigate } from "react-router-dom";
import CardSalad from "../components/CardSalad";
import icon1 from "../images/svgs/Пшеница.svg";
import icon2 from "../images/svgs/Листок.svg";
import icon3 from "../images/svgs/Лук.svg";
import icon4 from "../images/svgs/Повар.svg";
import icon5 from "../images/svgs/докрашенный листок.svg";
import icon6 from "../images/svgs/бицепс.svg";
import icon7 from "../images/svgs/без молока.svg";
import icon8 from "../images/svgs/авакадо.svg";
import icon9 from "../images/svgs/старбакс.svg";
import img1 from "../images/pizza/1.jpg";
import img2 from "../images/pizza/2.jpg";
import img3 from "../images/pizza/3.jpg";
import img4 from "../images/pizza/4.jpg";
import img5 from "../images/pizza/5.jpg";
import img6 from "../images/pizza/6.jpg";
import img7 from "../images/pizza/7.jpg";
import img8 from "../images/pizza/8.jpg";
import img9 from "../images/pizza/9.jpg";
import img10 from "../images/pizza/10.svg";
import img11 from "../images/pizza/11.jpg";
import img12 from "../images/pizza/12.jpg";
import img13 from "../images/pizza/13.jpg";
import img14 from "../images/pizza/14.jpg";
import img15 from "../images/pizza/15.jpg";
import img16 from "../images/pizza/16.jpg";
import Advice from "../components/Advice";
import axios from "axios";
import Test from "../routes/Test";
import { useLanguage } from "../functions/languageContext";

function MenuPizza() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  let getCategory = localStorage.getItem("category");

  const [selectedCategory, setSelectedCategory] = useState(
    categories[Number(getCategory)]
  );
  const [categoryChange, setCategoryChange] = useState(false);
  const [notF, setNotF] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dishes, setDishes] = useState([]);
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const res = await axios.get(
          `${
            selectedLanguage === "Русский"
              ? "https://michelle-kg.ru/dishes/"
              : selectedLanguage === "English"
              ? "https://michelle-kg.ru/englishdishes/"
              : selectedLanguage === "Кыргызча"
              ? "https://michelle-kg.ru/kyrgyzdishes/"
              : selectedLanguage === "Türkçe"
              ? "https://michelle-kg.ru/turkishdishes/"
              : null
          }
          `
        );
        setDishes(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDishes();
  }, []);
  const filteredData = dishes.filter((item) => {
    switch (selectedLanguage) {
      case "Русский":
        return item.category === 48;
      case "English":
        return item.category === 29;
      case "Кыргызча":
        return item.category === 31;
      case "Türkçe":
        return item.category === 8;
      default:
        return false;
    }
  });

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    getCategory = category.id;
    localStorage.setItem("category", category.id);
    setCategoryChange(true);
  };

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
        <div className="menu-main-content">
          <div className="menu-stick">
            <SliderMenu
              onSelectCategory={handleSelectCategory}
              categoryI={Number(getCategory)}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></div>
          </div>
          <>
            {selectedLanguage === "Русский" ||
            selectedLanguage === "Кыргызча" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>ПИЦЦА</div>
                </div>
              </header>
            ) : selectedLanguage === "English" ||
              selectedLanguage === "Türkçe" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>PIZZA</div>
                </div>
              </header>
            ) : null}
          </>
          <div className="salad-flex">
            {filteredData.map((item) => (
              <Test
                key={item.id}
                data={item}
                title={item.title}
                img={item.image}
                text={item.text}
                weight={item.weight}
                price={item.price}
                icon={item.svgs}
              />
            ))}
          </div>
          {selectedLanguage === "Русский" ? (
            <>
              <Advice
                text={
                  "Спагетти мы можем приготовить из безглютеновой лапши. Глютен (содержится в пшенице) мешает работе ворсинок кишечника, отвечающих за функцию всасывания витаминов и полезных минералов из пищи! Приготовление безглютеновых позиций занимает больше стандартного времени."
                }
                style={{ marginTop: "20px" }}
              />
              <Advice
                text={"Ко всем пиццам мы подаём наш фирменный бейби перчик"}
              />
              <Advice
                text={
                  "Пиццу в Италии готовят по Римскому и Неаполитанскому рецептам. Между этими двуми стилями существуют явные отличия: неаполитанскую пиццу готовят на более толстом тесте с выраженными бортами и томатным вкусом, тогда как римская пицца, которую мы подаём, использует меньшее содержание дрожжей, в результате чего она получается тонкой и хрустящей. Оба рецепта по-своему восхитительны, и их выбирают ценители пиццы во всём мире.  Приятного аппетита!"
                }
              />
              <Advice
                text={
                  "Нашу пасту мы готовим Al Dente — дословный перевод с итальянского «на зубок», что подразумевает лёгкое прилипание пасты к зубам. Правильно сваренная паста Al Dente сохраняет внутреннюю твёрдость, а снаружи она мягкая."
                }
              />
              <Advice
                text={
                  "Спагетти мы можем приготовить из безглютеновой лапши. Глютен (содержится в пшенице) мешает работе ворсинок кишечника, отвечающих за функцию всасывания витаминов и полезных минералов из пищи! Приготовление безглютеновых позиций занимает больше стандартного времени."
                }
              />
            </>
          ) : selectedLanguage === "English" ? (
            <>
              <Advice
                text={"Tüm pizzalarımızı özel baby bíberímízle servís edíyoruz"}
                style={{ marginTop: "20px" }}
              />

              <Advice
                text={
                  "Pizza in Italy is prepared using either Roman or Neapolitan recipes. There are distinct differences between the two styles, with Neapolitan pizza featuring a thicker crust and a more pronounced tomato flavor, while Roman pizza that we serve typically uses less yeast, resulting in a thin and crispy crust. Both are delicious in their way and are enjoyed by pizza lovers all over the world. Buon appetito!"
                }
              />
              <Advice
                text={
                  "Our pasta is cooked al dente, retaining its inner hardness while being soft on the outside."
                }
              />
              <Advice
                text={
                  "We can prepare gluten-free spaghetti for you. However, please note that it will take longer to prepare."
                }
              />
            </>
          ) : selectedLanguage === "Türkçe" ? (
            <>
              <Advice
                text={"Tüm pizzalarımızı özel baby bíberímízle servís edíyoruz"}
                style={{ marginTop: "20px" }}
              />

              <Advice
                text={
                  "Pizza in Italy is prepared using either Roman or Neapolitan recipes. There are distinct differences between the two styles, with Neapolitan pizza featuring a thicker crust and a more pronounced tomato flavor, while Roman pizza that we serve typically uses less yeast, resulting in a thin and crispy crust. Both are delicious in their way and are enjoyed by pizza lovers all over the world. Buon appetito!"
                }
              />
              <Advice
                text={
                  "Our pasta is cooked al dente, retaining its inner hardness while being soft on the outside."
                }
              />
              <Advice
                text={
                  "We can prepare gluten-free spaghetti for you. However, please note that it will take longer to prepare."
                }
              />
            </>
          ) : selectedLanguage === "Кыргызча" ? (
            <>
              <Advice
                text={
                  "Спагетти мы можем приготовить из безглютеновой лапши. Глютен (содержится в пшенице) мешает работе ворсинок кишечника, отвечающих за функцию всасывания витаминов и полезных минералов из пищи! Приготовление безглютеновых позиций занимает больше стандартного времени."
                }
                style={{ marginTop: "20px" }}
              />
              <Advice
                text={"Ко всем пиццам мы подаём наш фирменный бейби перчик"}
              />
              <Advice
                text={
                  "Пиццу в Италии готовят по Римскому и Неаполитанскому рецептам. Между этими двуми стилями существуют явные отличия: неаполитанскую пиццу готовят на более толстом тесте с выраженными бортами и томатным вкусом, тогда как римская пицца, которую мы подаём, использует меньшее содержание дрожжей, в результате чего она получается тонкой и хрустящей. Оба рецепта по-своему восхитительны, и их выбирают ценители пиццы во всём мире.  Приятного аппетита!"
                }
              />
              <Advice
                text={
                  "Нашу пасту мы готовим Al Dente — дословный перевод с итальянского «на зубок», что подразумевает лёгкое прилипание пасты к зубам. Правильно сваренная паста Al Dente сохраняет внутреннюю твёрдость, а снаружи она мягкая."
                }
              />
              <Advice
                text={
                  "Спагетти мы можем приготовить из безглютеновой лапши. Глютен (содержится в пшенице) мешает работе ворсинок кишечника, отвечающих за функцию всасывания витаминов и полезных минералов из пищи! Приготовление безглютеновых позиций занимает больше стандартного времени."
                }
              />
            </>
          ) : null}

          <div style={{ paddingBottom: "200px" }}></div>
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

export default MenuPizza;
