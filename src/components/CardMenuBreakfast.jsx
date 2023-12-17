import React, { useState } from "react";
import img1 from "../images/card-1.png";
import img2 from "../images/card-2.png";
import "../css/menu.scss";
import CardMenu from "./CardMenu";
import img3 from "../images/ovs.jpeg";
import img4 from "../images/Frame 2.png";
import img5 from "../images/Frame 3.png";
import img6 from "../images/card-4.png";
import img7 from "../images/card-5.png";
import img8 from "../images/card-6.png";
import img9 from "../images/pos-blin.jpeg";
import img10 from "../images/card-8.png";
import img11 from "../images/card-9.png";
import img12 from "../images/card-10.png";
import img13 from "../images/card-11.png";
import img14 from "../images/card-12.png";
import img15 from "../images/card-13.png";
import img16 from "../images/card-14.png";
import img17 from "../images/card-15.png";
import img18 from "../images/card-16.png";
import img19 from "../images/card-17.png";
import img20 from "../images/card-18.png";
import img21 from "../images/card-19.png";
import img22 from "../images/card-20.png";
import img23 from "../images/card-21.png";
import img24 from "../images/card-22.png";
import img25 from "../images/card-23.png";
import img26 from "../images/card-24.png";
import img27 from "../images/card-25.png";
import img28 from "../images/card-26.png";
import img29 from "../images/card-27.png";
import img30 from "../images/card-28.png";
import SliderMenu, { categories } from "./SliderMenu";
import { useNavigate } from "react-router-dom";
import FullscreenMenu from "./FullscreenMenu";

function CardMenuBreakfast() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [categoryChange, setCategoryChange] = useState(false);
  const [notF, setNotF] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCategoryChange(true);
  };

  const handleNotF = (category) => {
    if (category.name !== "ЗАВТРАКИ") {
      setNotF(true);
      navigate("/notf");
    } else {
      setNotF(false);
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="menu-stick">
        <SliderMenu onSelectCategory={handleNotF} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{ marginTop: "10px" }}
            className="btn-more"
            onClick={() => navigate("/categories")}
          >
            ВЕРНУТЬСЯ
          </button>
        </div>
      </div>
      <div className="main-card-break">
        <CardMenu
          img={img1}
          title={"Рисовая каша"}
          text={
            "Состав: рис, молоко, сливки, сгущённое молоко, банан, смородина, фисташки, миндаль"
          }
          price={"230 С"}
        />
        <CardMenu
          img={img2}
          title={"Гречневая каша"}
          text={
            "Состав: рис, молоко, сливки, сгущённое молоко, банан, смородина, фисташки, миндаль"
          }
          price={"230 С"}
        />
        <CardMenu
          img={img3}
          title={"Овсяная каша"}
          text={
            "Состав: овсяные хлопья, молоко, сливки, сгущённое молоко, банан, смородина, фисташки, миндаль"
          }
          price={"230 С"}
        />
        <div className="category-mini-blocks">
          <div className="category-mini-block">
            <img src={img4} />
          </div>
          <div className="category-mini-block">
            <img src={img5} />
          </div>
        </div>
      </div>
      <div className="title-2">БЛИНЫ</div>
      <div className="text-2">пшенично-гречневые</div>
      <div className="main-card-break">
        <CardMenu
          img={img6}
          title={"Со сметаной"}
          text={"Состав: пшеничная мука, гречневая мука, яйцо, молоко, сметана"}
          price={"200 с"}
        />
        <CardMenu
          img={img7}
          title={"С творогом"}
          text={
            "Состав: пшеничная мука, гречневая мука, яйцо, молоко, творог, сметана"
          }
          price={"330 с"}
        />
        <CardMenu
          img={img8}
          title={"С куриным паштетом"}
          text={
            "Состав: пшеничная мука, гречневая мука, яйцо, молоко, куриный паштет"
          }
          price={"200 с"}
        />
        <CardMenu
          img={img9}
          title={"C малосольной сёмгой"}
          text={
            "Состав: пшеничная мука, гречневая мука, яйцо, молоко, малосольная сёмга, творожный сыр"
          }
          price={"200 с"}
        />
      </div>
      <div className="title-2">Мясные яичницы</div>
      <div className="main-card-break">
        <CardMenu
          img={img10}
          title={"Яичница с языком"}
          text={"Состав: яйца, говяжий язык, зелёный лук"}
          price={"300 с"}
        />
        <CardMenu
          img={img11}
          title={"Яичница с курицей"}
          text={"Состав: яйца, куриная грудка"}
          price={"200 с"}
        />
        <CardMenu
          img={img12}
          title={"Деревенский завтрак"}
          text={
            "Состав: яйца, говяжьи колбаски , картофель, томаты , болгарский перец, руккола"
          }
          price={"330 с"}
        />
        <CardMenu
          img={img13}
          title={"Необычная яичница"}
          text={
            "Состав: яйца, греческий йогурт, томаты черри, шампиньоны, шпинат, багет на закваске"
          }
          price={"330 с"}
        />
        <CardMenu
          img={img14}
          title={"Картофельный драник"}
          text={
            "Состав: яйцо пашот, малосольная сёмга, авокадо, картофель , томаты черри, соус Голландез "
          }
          price={"595 с"}
        />
        <CardMenu
          img={img15}
          title={"Блинный завтрак"}
          text={
            "Состав: яйцо, блин, малосольная сёмга, творожный сыр, авокадо, микрозелень"
          }
          price={"465 с"}
        />
        <CardMenu
          img={img16}
          title={"Японский омлет"}
          text={"Состав: яйца, малосольная сёмга, микрозелень, соевый соус"}
          price={"465 с"}
        />
      </div>
      <header className="menu-header">
        <div className="menu-title-container">
          <hr />
          <h2>ПОЛЕЗНЫЕ</h2>
          <hr />
        </div>
        <div className="menu-title-span">
          <span>ДЛЯ ПОДДЕРЖАНИЯ ФОРМЫ</span>
        </div>
      </header>
      <div className="main-card-break">
        <CardMenu
          img={img17}
          title={"Оладьи кабачково"}
          text={
            "Состав: овсяные хлопья, малосольная сёмга, творожный сыр, яйцо, кабачки, микрозелень"
          }
          price={"400 с"}
        />
        <CardMenu
          img={img18}
          title={"Боул завтрак"}
          text={
            "Состав: тигровые креветки, авокадо , томаты черри, огурцы , фиолетовый лук, нут, микс салатов, бальзамический крем-соус"
          }
          price={"505 с"}
        />
        <CardMenu
          img={img19}
          title={"Протеиновый завтрак"}
          text={
            "Состав: яйца, творог, томаты черри, оливки, маслины, микс салатов, клубника, смородина, грецкий орех, йогурт"
          }
          price={"595 с"}
        />
        <CardMenu
          img={img20}
          title={"Кето завтрак с сёмгой"}
          text={
            "Состав: яйцо пашот, малосольная сёмга, творожный сыр, авокадо, томаты черри, огурцы, микс салатов, кедровый орех"
          }
          price={"545 с"}
        />
        <CardMenu
          img={img21}
          title={"Кето завтрак с креветкой"}
          text={
            "Состав: яйца-скрэмбл, тигровые креветки, творожный сыр, авокадо, томаты черри, огурцы, микс салатов, кедровый орех"
          }
          price={"545 с"}
        />
        <CardMenu
          img={img22}
          title={"Омлет с луком и авокадо"}
          text={
            "Состав: яйца, сыр, авокадо, томаты черри, огурцы, микс салатов, зелёный лук"
          }
          price={"545 с"}
        />
      </div>
      <header style={{ margin: "20px 0px" }} className="menu-header">
        <div className="menu-title-container">
          <hr />
          <h2>CЛАДКИЕ</h2>
          <hr />
        </div>
        <div className="menu-title-span">
          <span>для настроения</span>
        </div>
      </header>
      <div className="main-card-break">
        <CardMenu
          img={img23}
          title={"Творожный боул клубничный"}
          text={
            "Состав: творог, сметана, клубника, смородина, фисташки, миндаль"
          }
          price={"435 с"}
        />
        <CardMenu
          img={img24}
          title={"Императорские сырники"}
          text={
            "Состав: яйца, творог, сметана, смородина, фисташки, миндаль, джем на выбор"
          }
          price={"435 с"}
        />
        <CardMenu
          img={img25}
          title={"Вафли с ягодами и со сгущёнкой"}
          text={
            "Состав: бельгийские вафли, сгущённое молоко, смородина, фисташки, миндаль"
          }
          price={"270 с"}
        />
        <CardMenu
          style={{ top: "125px" }}
          img={img26}
          title={"Вафли с мороженым и шоколадом"}
          text={
            "Состав: бельгийские вафли, сливочное мороженое, шоколад, фисташки, миндаль"
          }
          price={"545 с"}
        />
      </div>
      <header style={{ margin: "20px 0px" }} className="menu-header">
        <div className="menu-title-container">
          <hr />
          <h2>СЫТНЫЕ</h2>
          <hr />
        </div>
        <div className="menu-title-span">
          <span>мировые</span>
        </div>
      </header>
      <div className="main-card-break" style={{ paddingBottom: "150px" }}>
        <CardMenu
          img={img27}
          title={"Английский завтрак"}
          text={
            "Состав: яйца, говяжьи колбаски , фасоль в томате, корнишоны, перец халапеньо, руккола, тостерный хлеб"
          }
          price={"380 с"}
        />
        <CardMenu
          img={img28}
          title={"Немецкий завтрак"}
          text={
            "Состав: яйца, говяжьи колбаски, картофель, томаты, шампиньоны, тостерный хлеб"
          }
          price={"380 с"}
        />
        <CardMenu
          img={img29}
          title={"Бельгийский завтрак"}
          text={
            "Состав: бельгийские вафли, малосольная сёмга, творожный сыр, микрозелень"
          }
          price={"435 с"}
        />
        <CardMenu
          img={img30}
          title={"Турецкий завтрак"}
          text={
            "Состав: яйца, говяжьи колбаски, сузьма, сыр, сливочное масло, томаты, огурцы, оливки, маслины, зелень, лаваш, багет на закваске, мёд, джем"
          }
          price={"505 с"}
        />
      </div>
      {notF && (
        <div className="notf">
          <h1>УПС) Скоро все добавим : - )</h1>
        </div>
      )}
    </>
  );
}

export default CardMenuBreakfast;
