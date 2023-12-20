import React, { useState } from "react";
import "../css/soap.scss";
import SliderMenu, { categories } from "../components/SliderMenu";
import { useNavigate } from "react-router-dom";
import CardSalad from "../components/CardSalad";
import icon1 from "../images/iconSalad/card-icon-1.svg";
import icon2 from "../images/iconSalad/card-icon-2.svg";
import icon3 from "../images/iconSalad/icon 5.svg";
import icon4 from "../images/iconSalad/icon-13.svg";
import icon5 from "../images/iconSalad/icon-14.svg";
import icon6 from "../images/iconSalad/icon-4.svg";
import icon7 from "../images/iconSalad/icon-7.svg";
import icon8 from "../images/iconSalad/icon-8.svg";
import icon9 from "../images/iconSalad/icon-9.svg";
import img1 from "../images/dinner/card-1.jpg";
import img2 from "../images/dinner/card-2.jpg";
import img3 from "../images/dinner/card-3.jpg";
import img4 from "../images/dinner/card-4.jpg";
import img5 from "../images/dinner/card-5.jpg";
import img6 from "../images/dinner/card-6.jpg";
import img7 from "../images/dinner/card-7.jpg";
import img8 from "../images/dinner/card-8.jpg";
import img9 from "../images/dinner/card-9.jpg";
import img10 from "../images/dinner/card-10.jpg";
import img11 from "../images/dinner/card-11.jpg";
import img12 from "../images/dinner/card-12.jpg";
import img13 from "../images/dinner/card-13.svg";
import img14 from "../images/dinner/card-14.jpg";
import img15 from "../images/dinner/card-15.jpg";
import img16 from "../images/dinner/card-16.jpg";
import img17 from "../images/dinner/card-17.svg";
import img18 from "../images/dinner/card-18.jpg";
import img19 from "../images/dinner/card-19.jpg";

function MenuDinner() {
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
      <div className="menu-main-content">
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
        <header className="soap-header">
          <div className="soap-title-container">
            <h3>РОЛЛЫ / БАГЕТ / БУТЕРБРОДЫ</h3>
            <h2>ПАЛЬЧИКИ ОБЛИЖЕШЬ</h2>
          </div>
        </header>
        <div className="main-card-break">
          <CardSalad
            img={img1}
            title={"Роллы цезарь с курицей"}
            text={
              "Состав: блинчик, яйцо, сёмга малосольная, авокадо, сыр творожный, кунжут"
            }
            style={{ top: '155px' }}
            price={"370 С"}
            // icon1={icon1} // пщеница
            // icon2={icon2} // листок
            //   icon3={icon3} лук
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img2}
            title={"Багет на закваске цезарь с курицей"}
            text={
              "Состав: куриная грудка, томаты, салат Айсберг, соус Цезарь, фри, кетчуп  "
            }
            price={"370 С"}
            style={{ top: '160px' }}
            // weight={"150 г"}
            // icon1={icon1} // пщеница
            // icon2={icon2} // листок
            //   icon3={icon3} лук
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img3}
            title={"Роллы цезарь с сёмгой"}
            text={
              "Состав: малосольная сёмга, томаты, салат Айсберг, соус Цезарь, фри, кетчуп"
            }
            price={"535 с"}
            // icon1={icon1} // пщеница
            //   icon3={icon3} лук
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
            style={{ top: '155px' }}
          />
          <CardSalad
            img={img4}
            title={"Багет на закваске цезарь с сёмгой"}
            text={
              "Состав: малосольная сёмга, томаты, салат Айсберг, соус Цезарь, фри, кетчуп"
            }
            price={"535 С"}
            style={{ top: '155px' }}
            // icon1={icon1} // пщеница
            //   icon3={icon3} лук
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img5}
            title={"Роллы с малосольной сёмгой"}
            text={
              "Состав: малосольная сёмга, томаты, шпинат, творожный соус, фри, кетчуп"
            }
            price={"565 С"}
            style={{ top: '145px' }}
            // icon1={icon1} // пщеница
            //   icon3={icon3} лук
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img6}
            title={"Багет на закваске с малосольной сёмгой"}
            text={
              "Состав: малосольная сёмга, томаты, шпинат, творожный соус, фри, кетчуп"
            }
            price={"565 С"}
            style={{ top: '145px' }}
            // icon1={icon1} // пщеница
            //   icon3={icon3} лук
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img7}
            title={"Хумус с багетом на закваске"}
            text={
              "Состав: куриная грудка, сыр, шампиньоны, болгарский перец, репчатый лук, пшеничная тортилья, томатный соус "
            }
            price={"505 С"}
            weight={"250 г"}
            // icon1={icon1} // пщеница
            //   icon3={icon3} лук
            style={{ top: '115px' }}
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img8}
            title={"Кесадилья веджи"}
            text={
              "Состав: сыр, фасоль, кукуруза, болгарский перец, пшеничная тортилья, томатный соус"
            }
            price={"455 С"}
            weight={"250 г"}
            // icon1={icon1} // пщеница
            //   icon3={icon3} лук
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img9}
            title={"Клаб-сэндвич с курицей"}
            text={
              "Состав: куриная грудка, омлет, сыр Чеддер, томаты, маринованные огурцы, листья салата, тостерный хлеб, соус, фри, кетчуп"
            }
            price={"435 С"}
            weight={"250 г"}
            style={{ top: '125px' }}
            // icon1={icon1} // пщеница
            // icon2={icon2} // листок
            //   icon3={icon3} лук
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />

          <div className="dinner-title">
            <span>VERY SMACHNO</span>
          </div>

          <CardSalad
            img={img10}
            title={"Круассан с сёмгой"}
            text={
              "Состав: малосольная сёмга, авокадо, помидор, листа салата, творожный соус "
            }
            price={"400 С"}
            weight={"170 г"}
            // icon1={icon1} // пщеница
            //   icon3={icon3} лук
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img11}
            title={"Круассан с тунцом "}
            text={
              "Состав: тунец, омлет, фиолетовый лук, лист салата, творожный соус"
            }
            price={"290 С"}
            weight={"170 г"}
            // icon1={icon1} // пщеница
            // icon2={icon2} // листок
            icon3={icon3} // onion

            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img12}
            title={"Круассан с курицей"}
            text={
              "Состав: куриная грудка, помидор, салат Айсберг, соус «Цезарь» "
            }
            price={"290 C"}
            weight={"170 г"}
            // icon1={icon1} // пщеница
            //   icon3={icon3} лук
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <img src={img13} className="dinner-image" alt="" />

          <div className="dinner-title">
            <span>БУРГЕРЫ ㅤ</span>
          </div>

          <CardSalad
            img={img14}
            title={"Классический Бургер с фри"}
            text={
              "Состав: говяжья котлета, сыр Чеддер, томаты, маринованные огурцы, соус"
            }
            price={"495 С"}
            weight={"250 г"}
            // icon1={icon1} // пщеница
            //   icon3={icon3} лук
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />

          <CardSalad
            img={img15}
            title={"Мексиканский Бургер с фри"}
            text={
              "Состав: говяжья котлета, сыр Чеддер, перец халапеньо, красный лук, соус"
            }
            price={"160 С"}
            weight={"250 г"}
            // icon1={icon1} // пщеница
            // icon2={icon2} // листок
            icon3={icon3} //лук
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img16}
            title={"Яичный бургер с фри "}
            text={
              "Состав: жареное яйцо, говяжья котлета, сыр Чеддер, яйцо, маринованные огурцы, красный лук, соус"
            }
            price={"495 С"}
            weight={"250 г"}
            // icon1={icon1} // пщеница
            // icon2={icon2} // листок
            icon3={icon3} //
            style={{ top: '125px' }}
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            //   icon6={icon6} бицепс
            icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <img src={img17} className="dinner-image" alt="" />
          <div className="dinner-title">
            <p>ЗЕЛЕНЫЕ БУРГЕРЫ</p>
          </div>
          <CardSalad
            img={img18}
            title={"Фитбургер"}
            text={
              "Состав: говяжья котлета, сыр Чеддер, томаты, маринованные огурцы, салат  Айсберг, соус"
            }
            price={"595 С"}
            weight={"250 г"}
            icon1={icon1} // пщеница
            // icon2={icon2} // листок
            //   icon3={icon3} лук
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            icon6={icon6}
            бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            //   icon9={icon9} старбакс
          />
          <CardSalad
            img={img19}
            title={"Мишель Бургер"}
            text={
              "Состав: сёмга малосольная, авокадо, томаты, огурцы , редис, салат Айсберг, творожный соус "
            }
            price={"535 С"}
            weight={"250 г"}
            // icon1={icon1} // пщеница
            // icon2={icon2} // листок
            //   icon3={icon3} лук
            //   icon4={icon4} повар
            // icon5={icon5} // докрашенный листок
            icon6={icon6} //бицепс
            // icon7={icon7} // без молока
            // icon8={icon8} // авакадо
            icon9={icon9} //старбакс
          />
        </div>
        <div style={{ marginTop: "200px" }}>.</div>
      </div>
    </>
  );
}

export default MenuDinner;
