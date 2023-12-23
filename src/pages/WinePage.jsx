import React, { useEffect, useState } from "react";
import "../css/drinks.scss";
import { useNavigate } from "react-router-dom";
import SliderMenu, { categories } from "../components/SliderMenu";
import TeaSquare from "../components/TeaSquare";
import img1 from "../images/drinks/1.png";
import SmuziSquaer from "../components/SmuziSquaer";
import WineSquare from "../components/WineSquare";

function WinePage() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [categoryChange, setCategoryChange] = useState(false);
  const [notF, setNotF] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCategoryChange(true);
  };

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
            <SliderMenu onSelectCategory={handleSelectCategory} />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></div>
          </div>
          <div className="drinks-main">
            <header
              style={{ margin: "30px 0px 30px 0px" }}
              className="tea-header"
            >
              <div className="tea-header-title">
                <h2>ВИННАЯ КАРТА</h2>
                <span>КРАСНОЕ ВИНО</span>
              </div>
            </header>
            <>
              <WineSquare
                title1={"Stranero Dolce "}
                price1={""}
                price2={"2515 с"}
                title2={"Красное сладкое (Италия) "}
                weight1={""}
                weight2={" 750 мл"}
                text1={
                  "В аромате раскрываются нотки ванили, спелой сладкой черешни и медовой сливы."
                }
                text2={"Сорт винограда: Merlot, Cabernet Sauvignon"}
                style={{ backgroundColor: "#FEE2DA" }}
              />
              <WineSquare
                title1={"Chianti Priore DOCG"}
                price1={""}
                price2={"2115 с"}
                title2={"Красное сухое (Италия) "}
                weight1={""}
                weight2={" 750 мл"}
                text1={
                  "Рубиново-красное вино с темно-фиолетовыми и лиловыми отблесками.  Аромат интенсивный и удивительно стойкий. Начальные ноты: фиалка, вишня и красные фрукты. Затем чувствуются тонки пряности."
                }
                text2={"Сорт винограда: Sangiovese, Cabernet Sauvignon"}
                style={{ backgroundColor: "#FEE2DA" }}
              />
              <WineSquare
                title1={"Bordeaux rouge Marquis des Dougles"}
                price1={""}
                price2={"2315 с"}
                title2={"Красное сухое (Франция) "}
                weight1={""}
                weight2={" 750 мл"}
                text1={
                  "Нежный аромат черных и красных фруктов делает это вино очень изысканным. Во вкусе дубильное, мощное и хорошо сбалансированное."
                }
                text2={
                  "Сорт винограда: Cabernet Sauvignon, Cabernet Franc, Merlot "
                }
                style={{ backgroundColor: "#FEE2DA" }}
              />
              <WineSquare
                title1={"Ser Mariotto Chianti Riserve"}
                price1={""}
                price2={"2915 с"}
                title2={"Красное сухое (Италия) "}
                weight1={""}
                weight2={" 750 мл"}
                text1={
                  "Многогранный и интенсивный аромат с нотами вишни и герани. Элегантное и гармоничное вино с табачным послевкусием."
                }
                text2={"Сорт винограда: Sangiovese, Cabernet Sauvignon"}
                style={{ backgroundColor: "#FEE2DA" }}
              />
              <WineSquare
                title1={"Bearjolais "}
                price1={""}
                price2={"2915 с"}
                title2={"Красное сухое (Франция) "}
                weight1={""}
                weight2={" 750 мл"}
                text1={
                  "Соблазнительное, фруктовое и хрустящее. Он предлагает ароматы красных и черных фруктов с очень тонкими танинами."
                }
                text2={"Сорт винограда: Gamay"}
                style={{ backgroundColor: "#FEE2DA" }}
              />
              <WineSquare
                title1={"Cotes-du-Rhone"}
                price1={""}
                price2={"2015 с"}
                title2={"Красное сухое (Франция) "}
                weight1={""}
                weight2={" 750 мл"}
                text1={
                  "Ароматы средней интенсивности спелых темных фруктов, сливы, ежевики, специй. Во вкусе — черная вишня, черная смородина, черника, лакрица. Сильное и продолжительное послевкусие."
                }
                text2={"Сорт винограда: Shiraz/Syrah, Grenache, Mourvedre"}
                style={{ backgroundColor: "#FEE2DA" }}
              />
              <WineSquare
                title1={"Appassionante rosso"}
                price1={""}
                price2={"3015 с"}
                title2={"Красное сухое (Италия) "}
                weight1={""}
                weight2={" 750 мл"}
                text1={"Ноты красных фруктов с послевкусием какао и корицы."}
                text2={"Сорт винограда: Merlot, Corvina, Sangiovese"}
                style={{ backgroundColor: "#FEE2DA" }}
              />
              <WineSquare
                title1={"Arome de France  "}
                price1={"360 с"}
                price2={"1715 с"}
                title2={"Красное полусладкое (Франция) "}
                weight1={" 150 мл"}
                weight2={" 750 мл"}
                text1={"Лёгкое красное вино со вкусом спелой смородины ."}
                text2={"Сорт винограда: Grenache"}
                style={{ backgroundColor: "#FEE2DA" }}
              />
              <WineSquare
                title1={"Kindzmarauli Marani   "}
                price1={"400 с"}
                price2={"1915 с"}
                title2={"Красное полусладкое (Грузия) "}
                weight1={" 150 мл"}
                weight2={" 750 мл"}
                text1={
                  "Нежный, полный, бархатистый вкус и типичный сортовой букет. Аромат свежий сортовыми тонами, оттенки: вишнёвая косточка, чёрная смородина."
                }
                text2={"Сорт винограда: Sappers"}
                style={{ backgroundColor: "#FEE2DA" }}
              />
              <header
                style={{ margin: "30px 0px 30px 0px" }}
                className="tea-header"
              >
                <div className="tea-header-title">
                  <span>БЕЛОЕ ВИНО</span>
                </div>
              </header>
              <WineSquare
                title1={"Petit Chablis    "}
                price1={""}
                price2={"3115 с"}
                title2={"Белое сухое (Франция)"}
                weight1={""}
                weight2={" 750 мл"}
                text1={
                  "Лёгкое, с цитрусовыми нотками, яркая кислотность с послевкусием тропических фруктов."
                }
                text2={"Сорт винограда: Chardonnay"}
                style={{ backgroundColor: "#FFFAE6" }}
              />
              <WineSquare
                title1={"Sauivignon Blanc"}
                price1={""}
                price2={"1815 с"}
                title2={"Белое сухое (Италия)"}
                weight1={""}
                weight2={" 750 мл"}
                text1={
                  "Фруктовое в меру, с бостаточно мягким и насыщенным вкусом. "
                }
                text2={"Сорт винограда: Sauvignon blanc"}
                style={{ backgroundColor: "#FFFAE6" }}
              />
              <WineSquare
                title1={"Lya Toscano Bianco "}
                price1={""}
                price2={"2315 с"}
                title2={"Белое сухое (Италия)"}
                weight1={""}
                weight2={" 750 мл"}
                text1={
                  "Освежающий вкус, с яркими цитрусовыми нотками, в послевкусии можно ошутить сочность фруктов, например, персика, груши или же дыни. "
                }
                text2={"Сорт винограда: Chardonnay. Mavasia. Trebiano Toscano"}
                style={{ backgroundColor: "#FFFAE6" }}
              />
              <WineSquare
                title1={"Pinot Grigio   "}
                price1={""}
                price2={"2915 с"}
                title2={"Белое сухое (Италия)"}
                weight1={""}
                weight2={" 750 мл"}
                text1={
                  "В аромате доминируют зелёные яблоки и лайм, груша и медовые нотки. "
                }
                text2={"Сорт винограда: Pinot Gris"}
                style={{ backgroundColor: "#FFFAE6" }}
              />
              <WineSquare
                title1={"Arome de France "}
                price1={"360 с"}
                price2={"1715 с"}
                title2={"Белое полусладкое (Франция) "}
                weight1={" 150 мл"}
                weight2={" 750 мл"}
                text1={
                  "Аромат вина с фруктовыми нотками и тонким цветочным ароматом."
                }
                text2={"Сорт винограда: Chardonnay"}
                style={{ backgroundColor: "#FFFAE6" }}
              />
              <WineSquare
                title1={"Tsinandali Marani "}
                price1={"330 с"}
                price2={"1515 с"}
                title2={"Белое сухое (Грузия)"}
                weight1={" 150 мл"}
                weight2={" 750 мл"}
                text1={
                  "Аромат вина — яркий, лёгкий, утончённый, в нём доминируют тона лайма, грейпфрута, цветов апельсина, нотки дыни и персика, а также изысканные нюансы хлебной корочки. "
                }
                text2={"Сорт винограда: Rkatsiteli and Mtsvane"}
                style={{ backgroundColor: "#FFFAE6" }}
              />
              <header
                style={{ margin: "30px 0px 30px 0px" }}
                className="tea-header"
              >
                <div className="tea-header-title">
                  <span>РОЗОВОЕ ВИНО</span>
                </div>
              </header>
              <WineSquare
                title1={"Maria carlotta    "}
                price1={""}
                price2={"2215 с"}
                title2={"Розовое сухое (Италия) "}
                weight1={""}
                weight2={" 750 мл"}
                text1={
                  "Интересное сочетание вкусовых шлейфов красной вишни и сладких цитрусов, с довольно лёгкой танниностью в послевкусии. Очень освежающее, фруктовое вино."
                }
                text2={"Сорт винограда: Cabernet Sauvignon, Sangiovese"}
                style={{ backgroundColor: "#FFF4F1" }}
              />
              <WineSquare
                title1={"Arome de France"}
                price1={"360 с"}
                price2={"1715 с"}
                title2={"Розовое полусладкое (Франция)"}
                weight1={" 150 мл"}
                weight2={" 750 мл"}
                text1={
                  "Аромат вина с фруктовыми нотками и тонким цветочным ароматом."
                }
                text2={"Сорт винограда: Merlot "}
                style={{ backgroundColor: "#FFF4F1" }}
              />
              <header
                style={{ margin: "30px 0px 30px 0px" }}
                className="tea-header"
              >
                <div className="tea-header-title">
                  <span>ИГРИСТОЕ ВИНО</span>
                </div>
              </header>
              <WineSquare
                title1={"Mionetto Prosecco "}
                price1={""}
                price2={"1815 с"}
                title2={"Игристое белое сухое (Италия)"}
                weight1={""}
                weight2={" 750 мл"}
                text1={
                  "Вино имеет сливочную текстуру и долгое сухое сладковатое послевкусие с лёгкими минеральными нюансами. Аромат вина источает нотки яблок сорта Голден, груши, ванили, минералов, цитрусовых и тропических фруктов. "
                }
                text2={"Сорт винограда: Glera"}
                style={{ backgroundColor: "#FFFCF1" }}
              />
              <WineSquare
                title1={"Martini Asti D.O.C.G. "}
                price1={""}
                price2={"3315 с"}
                title2={"Игристое белое сладкое (Италия) "}
                weight1={""}
                weight2={" 750 мл"}
                text1={
                  "Сладкий, с оттенками яблока, персика, апельсина и мёда. Послевкусие — лёгкое и округлое. "
                }
                text2={"Сорт винограда: Белый Мускат"}
                style={{ backgroundColor: "#FFFCF1" }}
              />
              <WineSquare
                title1={"Martini Prosecco D.O.C.  "}
                price1={""}
                price2={"3315 с"}
                title2={"Игристое белое сухое (Италия)"}
                weight1={""}
                weight2={" 750 мл"}
                text1={
                  "Вино обладает манящим фруктовым ароматом, в котором ярко чувствуются мотивы свежих яблок, груш с цветочными оттенками. "
                }
                text2={"Сорт винограда: Glera"}
                style={{ backgroundColor: "#FFFCF1" }}
              />
            </>
          </div>
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

export default WinePage;
