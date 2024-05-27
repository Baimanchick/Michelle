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
import ArrowLeft from "../components/ArrowLeft";

function PastaPage() {
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
        return item.category === 59;
      case "English":
        return item.category === 40;
      case "Кыргызча":
        return item.category === 42;
      case "Türkçe":
        return item.category === 40;
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
          <ArrowLeft />
          <>
            {selectedLanguage === "Русский" ||
            selectedLanguage === "Кыргызча" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>ПАСТА</div>
                  <div className="menu-title-container">
                    <hr style={{ width: "auto" }} />
                    <h2 style={{ margin: "10px 0px 0px 0px", fontSize: "17px" }}>BELLISSIMO</h2>
                    <hr style={{ width: "auto" }} />
                  </div>
                </div>
              </header>
            ) : selectedLanguage === "English" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>PASTA</div>
                  <div className="menu-title-container">
                    <hr style={{ width: "auto" }} />
                    <h2 style={{ margin: "10px 0px 0px 0px", fontSize: "17px" }}>BELLISSIMO</h2>
                    <hr style={{ width: "auto" }} />
                  </div>
                </div>
              </header>
            )
            : selectedLanguage === "Türkçe" ? (
              <header className="menu-salad-header">
                <div className="menu-salad-title-container">
                  <div>MAKARNA</div>
                </div>
              </header>
            ) : null}
          </>
          <div className="salad-flex">
            {filteredData.map((item, index) => (
              <div key={index} style={ index === 2 ? { display: "contents" }: {} }>
                { index === 2 ? (
                  selectedLanguage === "Русский" ? (
                    <>
                      <Advice
                        text={
                          "Нашу пасту мы готовим Al Dente — дословный перевод с итальянского «на зубок», что подразумевает лёгкое прилипание пасты к зубам. Правильно сваренная паста Al Dente сохраняет внутреннюю твёрдость, а снаружи она мягкая."
                        }
                      />
                    </>
                  ) : selectedLanguage === "English" ? (
                    <>
                      <Advice
                        text={
                          "Our pasta is cooked al dente, retaining its inner hardness while being soft on the outside."
                        }
                      />
                    </>
                  ) : selectedLanguage === "Türkçe" ? (
                    <>
                      <Advice
                        text={
                          "Makarnalarimızı Al Dente hazırlıyoruz - İtalyanca'dan 'díşe' kelímesínín tam anlamıyla bír çevírísí, bu da makarnanın díşlere kolayca yapışması anlamına gelíyor. Düzgün bír şekílde kaynatılmış Al Dente makarna íç sertlíğíní korur ve dış kısmı yumuşaktır."
                        }
                      />
                    </>
                  ) : selectedLanguage === "Кыргызча" ? (
                    <>
                      <Advice
                        text={
                          "Биз пастаны Al Dente даярдайбыз - итальян тилинен сөзмө-сөз 'тишке' деп которулат жана пастанын тишке оңой жабышышын билдирет. Туура бышырылган Al Dente пастасы ички катуулугун сактайт, ал эми сырты жумшак болот."
                        }
                      />
                    </>
                  ) : null
                ) : (null) }
                <Test
                  data={item}
                  title={item.title}
                  img={item.image}
                  text={item.text}
                  weight={item.weight}
                  price={item.price}
                  icon={item.svgs}
                />
              </div>
            ))}
          </div>
          {selectedLanguage === "Русский" ? (
            <>
              <Advice
                text={
                  "Нашу пасту мы готовим Al Dente — дословный перевод с итальянского «на зубок», что подразумевает лёгкое прилипание пасты к зубам. Правильно сваренная паста Al Dente сохраняет внутреннюю твёрдость, а снаружи она мягкая."
                }
                style={{ marginTop: "20px" }}
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
                text={
                  "We can prepare gluten-free spaghetti for you. However, please note that it will take longer to prepare."
                }
                style={{ marginTop: "20px" }}
              />
            </>
          ) : selectedLanguage === "Türkçe" ? (
            <>
              <Advice
                text={
                  "Sizin için glutensiz spagetti hazırlayabiliriz. Ancak hazırlanmanın daha uzun süreceğini lütfen unutmayın."
                }
                style={{ marginTop: "20px" }}
              />
            </>
          ) : selectedLanguage === "Кыргызча" ? (
            <>
              <Advice
                text={
                  "Спагеттини биз глютенсиз камырдан жасай алабыз. Глютен (буудайда кездешет) тамак-аштан витаминдерди жана пайдалуу минералдарды сиңирүү функциясы үчүн жооптуу ичеги түктөрүнүн иштешине тоскоол болот. Глютенсиз позицияларды бышыруу стандарттуу убакыттан көбүрөөк убакытты алат."
                }
                style={{ marginTop: "20px" }}
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

export default PastaPage;
