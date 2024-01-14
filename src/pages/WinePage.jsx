import React, { useEffect, useState } from "react";
import "../css/drinks.scss";
import { useNavigate } from "react-router-dom";
import SliderMenu, { categories } from "../components/SliderMenu";
import TeaSquare from "../components/TeaSquare";
import img1 from "../images/drinks/1.png";
import SmuziSquaer from "../components/SmuziSquaer";
import WineSquare from "../components/WineSquare";
import { useLanguage } from "../functions/languageContext";

function WinePage() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  let getCategory = localStorage.getItem("category");

  const [selectedCategory, setSelectedCategory] = useState(
    categories[Number(getCategory)]
  );
  const [categoryChange, setCategoryChange] = useState(false);
  const [notF, setNotF] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  const navigate = useNavigate();

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    getCategory = category.id;
    localStorage.setItem("category", category.id);
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
          {selectedLanguage === "Русский" ? (
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
                  text2={
                    "Сорт винограда: Chardonnay. Mavasia. Trebiano Toscano"
                  }
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
          ) : selectedLanguage === "English" ? (
            <div className="drinks-main">
              <header
                style={{ margin: "30px 0px 30px 0px" }}
                className="tea-header"
              >
                <div className="tea-header-title">
                  <h2>Wine map</h2>
                  <span>Red Wine</span>
                </div>
              </header>
              <>
                <WineSquare
                  title1={"Stranero Dolce "}
                  price1={""}
                  price2={"2515 KGS"}
                  title2={"Red sweet (Italy)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "The aroma emanates hints of vanilla, mature sweet cherries, and honeyed plums."
                  }
                  text2={"Grape variety: Merlot, Cabernet Sauvignon"}
                  style={{ backgroundColor: "#FEE2DA" }}
                />
                <WineSquare
                  title1={"Chianti Priore DOCG"}
                  price1={""}
                  price2={"2115 KGS"}
                  title2={"Red dry (Italy)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "Ruby red wine with dark purple and lilac reflections has an intense and persistent aroma. The top notes are of violet, cherry, and red fruits, followed by subtle spices."
                  }
                  text2={"Grape variety: Sangiovese, Cabernet Sauvignon"}
                  style={{ backgroundColor: "#FEE2DA" }}
                />
                <WineSquare
                  title1={"Bordeaux rouge Marquis des Dougles"}
                  price1={""}
                  price2={"2315 KGS"}
                  title2={"Red dry (France)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "The wine is refined with delicate aromas of black and red fruits. The palate is well-balanced, powerful, and tannic."
                  }
                  text2={
                    "Grape variety: Cabernet Sauvignon, Cabernet Franc, Merlot "
                  }
                  style={{ backgroundColor: "#FEE2DA" }}
                />
                <WineSquare
                  title1={"Ser Mariotto Chianti Riserve"}
                  price1={""}
                  price2={"2915 KGS"}
                  title2={"Red dry (Italy)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "Multifaceted and intense aroma with hints of cherry and geranium. An elegant and harmonious wine with a tobacco finish."
                  }
                  text2={"Grape variety: Sangiovese, Cabernet Sauvignon"}
                  style={{ backgroundColor: "#FEE2DA" }}
                />
                <WineSquare
                  title1={"Bearjolais "}
                  price1={""}
                  price2={"2915 KGS"}
                  title2={"Red dry (France)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "Seductive and fruity with a crunchy texture. Offers aromas of red and black fruit with subtle tannins."
                  }
                  text2={"Grape variety: Gamay"}
                  style={{ backgroundColor: "#FEE2DA" }}
                />
                <WineSquare
                  title1={"Cotes-du-Rhone"}
                  price1={""}
                  price2={"2015 KGS"}
                  title2={"Red dry (France)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "Medium-intensity aromas of ripe dark fruits such as plums and blackberries, accompanied by spicy notes. The taste is characterized by flavors of black cherry, black currant, blueberry, and licorice, with a strong and long-lasting aftertaste."
                  }
                  text2={"Grape variety: Shiraz/Syrah, Grenache, Mourvedre"}
                  style={{ backgroundColor: "#FEE2DA" }}
                />
                <WineSquare
                  title1={"Appassionante rosso"}
                  price1={""}
                  price2={"3015 KGS"}
                  title2={"Red dry (Italy)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "The taste notes include red fruits followed by a finish of cocoa and cinnamon."
                  }
                  text2={"Grape variety: Merlot, Corvina, Sangiovese"}
                  style={{ backgroundColor: "#FEE2DA" }}
                />
                <WineSquare
                  title1={"Arome de France  "}
                  price1={"360 KGS"}
                  price2={"1715 KGS"}
                  title2={"Red semi-sweet (France)"}
                  weight1={" 150 ml"}
                  weight2={" 750 ml"}
                  text1={"Light red wine with the taste of ripe currants.."}
                  text2={"Grape variety: Grenache"}
                  style={{ backgroundColor: "#FEE2DA" }}
                />
                <WineSquare
                  title1={"Kindzmarauli Marani   "}
                  price1={"400 KGS"}
                  price2={"1915 KGS"}
                  title2={"Red semi-sweet (Georgia)"}
                  weight1={" 150 ml"}
                  weight2={" 750 ml"}
                  text1={
                    "Delicate, full-bodied taste with a velvety texture and a typical varietal aroma. The fresh scent carries varietal tones, hints of cherry pit, and black currant."
                  }
                  text2={"Grape variety: Sappers"}
                  style={{ backgroundColor: "#FEE2DA" }}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>WHITE WINES</span>
                  </div>
                </header>
                <WineSquare
                  title1={"Petit Chablis    "}
                  price1={""}
                  price2={"3115 KGS"}
                  title2={"White dry (France)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "Light in body, this flavor profile has citrus notes and bright acidity, followed by a tropical fruit aftertaste."
                  }
                  text2={"Grape variety: Chardonnay"}
                  style={{ backgroundColor: "#FFFAE6" }}
                />
                <WineSquare
                  title1={"Sauivignon Blanc"}
                  price1={""}
                  price2={"1815 KGS"}
                  title2={"White dry (Italy)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "The wine has a pleasant fruity flavor, which is not too strong. It has a smooth and creamy texture with a rich taste."
                  }
                  text2={"Grape variety: Sauvignon blanc"}
                  style={{ backgroundColor: "#FFFAE6" }}
                />
                <WineSquare
                  title1={"Lya Toscano Bianco "}
                  price1={""}
                  price2={"2315 KGS"}
                  title2={"White dry (Italy)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "The taste is refreshing with bright citrus notes. The aftertaste is juicy with flavors of peach, pear, and melon."
                  }
                  text2={"Grape variety: Chardonnay. Mavasia. Trebiano Toscano"}
                  style={{ backgroundColor: "#FFFAE6" }}
                />
                <WineSquare
                  title1={"Pinot Grigio   "}
                  price1={""}
                  price2={"2915 KGS"}
                  title2={"White dry (Italy)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "The scent is mainly characterized by the scent of green apples, lime, and hints of pear and honey."
                  }
                  text2={"Grape variety: Pinot Gris"}
                  style={{ backgroundColor: "#FFFAE6" }}
                />
                <WineSquare
                  title1={"Arome de France "}
                  price1={"360 KGS"}
                  price2={"1715 KGS"}
                  title2={"White semi-sweet (France)"}
                  weight1={" 150 ml"}
                  weight2={" 750 ml"}
                  text1={
                    "The wine has a fruity aroma with subtle floral notes."
                  }
                  text2={"Grape variety: Chardonnay"}
                  style={{ backgroundColor: "#FFFAE6" }}
                />
                <WineSquare
                  title1={"Tsinandali Marani "}
                  price1={"330 KGS"}
                  price2={"1515 KGS"}
                  title2={"White dry (Georgia)"}
                  weight1={" 150 ml"}
                  weight2={" 750 ml"}
                  text1={
                    "The wine's aroma is dominated by tones of lime, grapefruit, orange blossom, melon, peach, and bread crust."
                  }
                  text2={"Grape variety: Rkatsiteli and Mtsvane"}
                  style={{ backgroundColor: "#FFFAE6" }}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>PINK WINES</span>
                  </div>
                </header>
                <WineSquare
                  title1={"Maria carlotta    "}
                  price1={""}
                  price2={"2215 KGS"}
                  title2={"Dry rose (Italy)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "An interesting combination of flavors with hints of red cherry and sweet citrus, finishing with a light tannin. A refreshing and fruity wine."
                  }
                  text2={"Grape variety: Cabernet Sauvignon, Sangiovese"}
                  style={{ backgroundColor: "#FFF4F1" }}
                />
                <WineSquare
                  title1={"Arome de France"}
                  price1={"360 KGS"}
                  price2={"1715 KGS"}
                  title2={"Rose semi-sweet (France)"}
                  weight1={" 150 ml"}
                  weight2={" 750 ml"}
                  text1={
                    "The wine's aroma is characterized by fruity notes and a delicate floral scent."
                  }
                  text2={"Grape variety: Merlot "}
                  style={{ backgroundColor: "#FFF4F1" }}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>SPARKLING WINES</span>
                  </div>
                </header>
                <WineSquare
                  title1={"Mionetto Prosecco "}
                  price1={""}
                  price2={"1815 KGS"}
                  title2={"Sparkling white dry (Italy)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "The wine has a creamy texture and a long, dry, sweet aftertaste with light mineral nuances. The aroma of the wine exudes notes of Golden apples, pears, vanilla, minerals, citrus, and tropical fruits. "
                  }
                  text2={"Grape variety: Glera"}
                  style={{ backgroundColor: "#FFFCF1" }}
                />
                <WineSquare
                  title1={"Martini Asti D.O.C.G. "}
                  price1={""}
                  price2={"3315 KGS"}
                  title2={"Sparkling white sweet (Italy)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "Sweet hints of apple, peach, orange, and honey with a light round aftertaste."
                  }
                  text2={"СGrape variety: White Muscat"}
                  style={{ backgroundColor: "#FFFCF1" }}
                />
                <WineSquare
                  title1={"Martini Prosecco D.O.C.  "}
                  price1={""}
                  price2={"3315 KGS"}
                  title2={"Sparkling white dry wine (Italy)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "The wine has a fruity aroma with fresh apple and pear notes and a hint of floral tones."
                  }
                  text2={"Grape variety: Glera"}
                  style={{ backgroundColor: "#FFFCF1" }}
                />
              </>
            </div>
          ) : selectedLanguage === "Türkçe" ? (
            <div className="drinks-main">
              <header
                style={{ margin: "30px 0px 30px 0px" }}
                className="tea-header"
              >
                <div className="tea-header-title">
                  <h2>Sarap</h2>
                  <span>Kırmızı şarap</span>
                </div>
              </header>
              <>
                <WineSquare
                  title1={"Stranero Dolce "}
                  price1={""}
                  price2={"2515 KGS"}
                  title2={"Red sweet (Italy)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "The aroma emanates hints of vanilla, mature sweet cherries, and honeyed plums."
                  }
                  text2={"Grape variety: Merlot, Cabernet Sauvignon"}
                  style={{ backgroundColor: "#FEE2DA" }}
                />
                <WineSquare
                  title1={"Chianti Priore DOCG"}
                  price1={""}
                  price2={"2115 KGS"}
                  title2={"Red dry (Italy)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "Ruby red wine with dark purple and lilac reflections has an intense and persistent aroma. The top notes are of violet, cherry, and red fruits, followed by subtle spices."
                  }
                  text2={"Grape variety: Sangiovese, Cabernet Sauvignon"}
                  style={{ backgroundColor: "#FEE2DA" }}
                />
                <WineSquare
                  title1={"Bordeaux rouge Marquis des Dougles"}
                  price1={""}
                  price2={"2315 KGS"}
                  title2={"Red dry (France)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "The wine is refined with delicate aromas of black and red fruits. The palate is well-balanced, powerful, and tannic."
                  }
                  text2={
                    "Grape variety: Cabernet Sauvignon, Cabernet Franc, Merlot "
                  }
                  style={{ backgroundColor: "#FEE2DA" }}
                />
                <WineSquare
                  title1={"Ser Mariotto Chianti Riserve"}
                  price1={""}
                  price2={"2915 KGS"}
                  title2={"Red dry (Italy)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "Multifaceted and intense aroma with hints of cherry and geranium. An elegant and harmonious wine with a tobacco finish."
                  }
                  text2={"Grape variety: Sangiovese, Cabernet Sauvignon"}
                  style={{ backgroundColor: "#FEE2DA" }}
                />
                <WineSquare
                  title1={"Bearjolais "}
                  price1={""}
                  price2={"2915 KGS"}
                  title2={"Red dry (France)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "Seductive and fruity with a crunchy texture. Offers aromas of red and black fruit with subtle tannins."
                  }
                  text2={"Grape variety: Gamay"}
                  style={{ backgroundColor: "#FEE2DA" }}
                />
                <WineSquare
                  title1={"Cotes-du-Rhone"}
                  price1={""}
                  price2={"2015 KGS"}
                  title2={"Red dry (France)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "Medium-intensity aromas of ripe dark fruits such as plums and blackberries, accompanied by spicy notes. The taste is characterized by flavors of black cherry, black currant, blueberry, and licorice, with a strong and long-lasting aftertaste."
                  }
                  text2={"Grape variety: Shiraz/Syrah, Grenache, Mourvedre"}
                  style={{ backgroundColor: "#FEE2DA" }}
                />
                <WineSquare
                  title1={"Appassionante rosso"}
                  price1={""}
                  price2={"3015 KGS"}
                  title2={"Red dry (Italy)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "The taste notes include red fruits followed by a finish of cocoa and cinnamon."
                  }
                  text2={"Grape variety: Merlot, Corvina, Sangiovese"}
                  style={{ backgroundColor: "#FEE2DA" }}
                />
                <WineSquare
                  title1={"Arome de France  "}
                  price1={"360 KGS"}
                  price2={"1715 KGS"}
                  title2={"Red semi-sweet (France)"}
                  weight1={" 150 ml"}
                  weight2={" 750 ml"}
                  text1={"Light red wine with the taste of ripe currants.."}
                  text2={"Grape variety: Grenache"}
                  style={{ backgroundColor: "#FEE2DA" }}
                />
                <WineSquare
                  title1={"Kindzmarauli Marani   "}
                  price1={"400 KGS"}
                  price2={"1915 KGS"}
                  title2={"Red semi-sweet (Georgia)"}
                  weight1={" 150 ml"}
                  weight2={" 750 ml"}
                  text1={
                    "Delicate, full-bodied taste with a velvety texture and a typical varietal aroma. The fresh scent carries varietal tones, hints of cherry pit, and black currant."
                  }
                  text2={"Grape variety: Sappers"}
                  style={{ backgroundColor: "#FEE2DA" }}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>WHITE WINES</span>
                  </div>
                </header>
                <WineSquare
                  title1={"Petit Chablis    "}
                  price1={""}
                  price2={"3115 KGS"}
                  title2={"White dry (France)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "Light in body, this flavor profile has citrus notes and bright acidity, followed by a tropical fruit aftertaste."
                  }
                  text2={"Grape variety: Chardonnay"}
                  style={{ backgroundColor: "#FFFAE6" }}
                />
                <WineSquare
                  title1={"Sauivignon Blanc"}
                  price1={""}
                  price2={"1815 KGS"}
                  title2={"White dry (Italy)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "The wine has a pleasant fruity flavor, which is not too strong. It has a smooth and creamy texture with a rich taste."
                  }
                  text2={"Grape variety: Sauvignon blanc"}
                  style={{ backgroundColor: "#FFFAE6" }}
                />
                <WineSquare
                  title1={"Lya Toscano Bianco "}
                  price1={""}
                  price2={"2315 KGS"}
                  title2={"White dry (Italy)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "The taste is refreshing with bright citrus notes. The aftertaste is juicy with flavors of peach, pear, and melon."
                  }
                  text2={"Grape variety: Chardonnay. Mavasia. Trebiano Toscano"}
                  style={{ backgroundColor: "#FFFAE6" }}
                />
                <WineSquare
                  title1={"Pinot Grigio   "}
                  price1={""}
                  price2={"2915 KGS"}
                  title2={"White dry (Italy)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "The scent is mainly characterized by the scent of green apples, lime, and hints of pear and honey."
                  }
                  text2={"Grape variety: Pinot Gris"}
                  style={{ backgroundColor: "#FFFAE6" }}
                />
                <WineSquare
                  title1={"Arome de France "}
                  price1={"360 KGS"}
                  price2={"1715 KGS"}
                  title2={"White semi-sweet (France)"}
                  weight1={" 150 ml"}
                  weight2={" 750 ml"}
                  text1={
                    "The wine has a fruity aroma with subtle floral notes."
                  }
                  text2={"Grape variety: Chardonnay"}
                  style={{ backgroundColor: "#FFFAE6" }}
                />
                <WineSquare
                  title1={"Tsinandali Marani "}
                  price1={"330 KGS"}
                  price2={"1515 KGS"}
                  title2={"White dry (Georgia)"}
                  weight1={" 150 ml"}
                  weight2={" 750 ml"}
                  text1={
                    "The wine's aroma is dominated by tones of lime, grapefruit, orange blossom, melon, peach, and bread crust."
                  }
                  text2={"Grape variety: Rkatsiteli and Mtsvane"}
                  style={{ backgroundColor: "#FFFAE6" }}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>PINK WINES</span>
                  </div>
                </header>
                <WineSquare
                  title1={"Maria carlotta    "}
                  price1={""}
                  price2={"2215 KGS"}
                  title2={"Dry rose (Italy)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "An interesting combination of flavors with hints of red cherry and sweet citrus, finishing with a light tannin. A refreshing and fruity wine."
                  }
                  text2={"Grape variety: Cabernet Sauvignon, Sangiovese"}
                  style={{ backgroundColor: "#FFF4F1" }}
                />
                <WineSquare
                  title1={"Arome de France"}
                  price1={"360 KGS"}
                  price2={"1715 KGS"}
                  title2={"Rose semi-sweet (France)"}
                  weight1={" 150 ml"}
                  weight2={" 750 ml"}
                  text1={
                    "The wine's aroma is characterized by fruity notes and a delicate floral scent."
                  }
                  text2={"Grape variety: Merlot "}
                  style={{ backgroundColor: "#FFF4F1" }}
                />
                <header
                  style={{ margin: "30px 0px 30px 0px" }}
                  className="tea-header"
                >
                  <div className="tea-header-title">
                    <span>SPARKLING WINES</span>
                  </div>
                </header>
                <WineSquare
                  title1={"Mionetto Prosecco "}
                  price1={""}
                  price2={"1815 KGS"}
                  title2={"Sparkling white dry (Italy)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "The wine has a creamy texture and a long, dry, sweet aftertaste with light mineral nuances. The aroma of the wine exudes notes of Golden apples, pears, vanilla, minerals, citrus, and tropical fruits. "
                  }
                  text2={"Grape variety: Glera"}
                  style={{ backgroundColor: "#FFFCF1" }}
                />
                <WineSquare
                  title1={"Martini Asti D.O.C.G. "}
                  price1={""}
                  price2={"3315 KGS"}
                  title2={"Sparkling white sweet (Italy)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "Sweet hints of apple, peach, orange, and honey with a light round aftertaste."
                  }
                  text2={"СGrape variety: White Muscat"}
                  style={{ backgroundColor: "#FFFCF1" }}
                />
                <WineSquare
                  title1={"Martini Prosecco D.O.C.  "}
                  price1={""}
                  price2={"3315 KGS"}
                  title2={"Sparkling white dry wine (Italy)"}
                  weight1={""}
                  weight2={" 750 ml"}
                  text1={
                    "The wine has a fruity aroma with fresh apple and pear notes and a hint of floral tones."
                  }
                  text2={"Grape variety: Glera"}
                  style={{ backgroundColor: "#FFFCF1" }}
                />
              </>
            </div>
          ) : selectedLanguage === "Кыргызча" ? (
            <div className="drinks-main">
              <header
                style={{ margin: "30px 0px 30px 0px" }}
                className="tea-header"
              >
                <div className="tea-header-title">
                  <h2>Шарап</h2>
                  <span>Кызыл Шарап</span>
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
                  text2={
                    "Сорт винограда: Chardonnay. Mavasia. Trebiano Toscano"
                  }
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

export default WinePage;
