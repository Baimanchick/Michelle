import React, { useState } from "react";
import "../css/coffe.scss";
import SliderMenu, { categories } from "../components/SliderMenu";
import { useNavigate } from "react-router-dom";
import Square from "../components/Square";
import squareI from "../images/coffe/Vector.svg";
import LongSqaure from "../components/LongSquare";
import img1 from "../images/coffe/image-1.png";
import img2 from "../images/coffe/image-2.png";

function MenuCoffe() {
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

  const navigate = useNavigate();
  return (
    <>
      <div className="coffe-main-content">
        <div className="menu-stick">
          <SliderMenu onSelectCategory={handleSelectCategory} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          </div>
        </div>
        <header className="menu-salad-header">
          <div className="menu-salad-title-container">
            <div>КОФЕ</div>
            <span>БОДРЯЩИЙ КОФЕ</span>
          </div>
        </header>
        <div className="square-main-content">
          <Square title={"Эспрессо"} weight={"40 мл"} price={"175 с"} />
          <Square
            title={"Американо"}
            weight={"200/400 мл"}
            price={"140/190 с"}
          />
          <Square
            title={"Капучино"}
            weight={"200/400 мл"}
            price={"190/240 с"}
          />
          <Square title={"Латте"} weight={"200/400 мл"} price={"190/260 с"} />
          <Square title={"Мокко"} weight={"200 мл"} price={"260 с"} />
          <Square title={"Флэт Уайт"} weight={"200 мл"} price={"260 с"} />
          <LongSqaure
            title={"Латте крем-брюле маршмеллоу"}
            weight={"200 мл"}
            price={"340 c"}
            squareI={squareI}
          />
          <LongSqaure
            title={"Миндальный латте со взбитыми сливками"}
            weight={"200 мл"}
            price={"340 c"}
            squareI={squareI}
          />
          <LongSqaure
            title={"Бананово-карамельный капучино"}
            weight={"200/400 мл"}
            price={"230/280 с"}
            squareI={squareI}
          />
          <LongSqaure
            title={"Эспрессо тоник"}
            weight={"250 мл"}
            price={"255 с"}
          />
          <Square title={"Айс капучино"} weight={"350 мл"} price={"260 с"} />
          <Square title={"Айс латте"} weight={"350 мл"} price={"280 с"} />
          <Square title={"Айс американо"} weight={"350 мл"} price={"200 с"} />
          <Square
            title={"Фраппучино"}
            weight={"350 мл"}
            price={"340 с"}
            squareI={squareI}
          />
          <LongSqaure
            title={"Бамбл кофе на апельсиновом соке/фреше"}
            weight={"250 мл"}
            price={"210/310 с"}
            squareI={squareI}
          />
          <Square title={"Раф кофе"} weight={"330 мл"} price={"290 с"} />
          <Square
            title={"Эспрессо экстра шот"}
            weight={"25 мл"}
            price={"70 с"}
          />
          <Square title={"Айриш кофе"} weight={"250 мл"} price={"310 с"} />
          <Square title={"Фреш кофе"} weight={"200 мл"} price={"310 с"} />
          <LongSqaure
            title={"Аффогато безалкольный/ алкогольный"}
            weight={"200 мл"}
            price={"360/550 с"}
            squareI={squareI}
          />
        </div>
        <div className="menu-coffe-images">
          <img className="coffe-img" src={img1} alt="" />
          <img className="coffe-img-2" src={img2} alt="" />
        </div>
      </div>
    </>
  );
}

export default MenuCoffe;
