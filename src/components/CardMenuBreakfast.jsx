import React from "react";
import cardIcon1 from "../images/card-icon-1.svg";
import cardIcon2 from "../images/card-icon-2.svg";
import img1 from "../images/card-1.png";
import img2 from "../images/card-2.png";
import img3 from "../images/card-3.png";
import img4 from "../images/card-4.png";
import img5 from "../images/card-5.png";
import img6 from "../images/card-6.png";
import img7 from "../images/card-7.png";
import img8 from "../images/card-8.png";
import img9 from "../images/card-9.png";
import img10 from "../images/card-10.png";
import img11 from "../images/card-11.png";
import img12 from "../images/card-12.png";
import img13 from "../images/card-13.png";
import img14 from "../images/card-14.png";
import img15 from "../images/card-15.png";
import img16 from "../images/card-16.png";
import img17 from "../images/card-17.png";
import img18 from "../images/card-18.png";
import img19 from "../images/card-19.png";
import img20 from "../images/card-20.png";
import img21 from "../images/card-21.png";
import img22 from "../images/card-22.png";
import img23 from "../images/card-23.png";
import img24 from "../images/card-24.png";
import img25 from "../images/card-25.png";
import img26 from "../images/card-26.png";
import img27 from "../images/card-27.png";
import img28 from "../images/card-28.png";

import blin from "../images/blin.png";
import "../css/menu.scss";

function CardMenuBreakfast() {
  return (
    <>
      <div className="main-card-break">
        <div className="menu-card-main">
          <div className="menu-card-container">
            <div className="menu-card">
              <div className="menu-card-img">
                <img src={img1} alt="" />
                <div className="white-block"></div>

                <div className="menu-card-absolute">
                  <div className="menu-card-title">
                    <div>Рисовая каша</div>
                    <span>250 г</span>
                    <p>
                      Состав: рис, молоко, сливки, сгущённое молоко, банан,
                      смородина, фисташки, миндаль
                    </p>
                  </div>
                  <div className="menu-card-utils">
                    <div className="card-utils-wrapper-left">
                      <img
                        style={{ marginTop: "5px" }}
                        src={cardIcon1}
                        alt=""
                      />
                      <img
                        style={{ marginLeft: "5px" }}
                        src={cardIcon2}
                        alt=""
                      />
                    </div>
                    <div className="card-utils-wrapper-right">
                      <span>230 С</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-card-main">
          <div className="menu-card-container">
            <div className="menu-card">
              <div className="menu-card-img">
                <img src={img2} alt="" />
                <div className="white-block"></div>
                <div className="menu-card-absolute">
                  <div className="menu-card-title">
                    <div>Гречневая каша</div>
                    <span>250 г</span>
                    <p>
                      Состав: рис, молоко, сливки, сгущённое молоко, банан,
                      смородина, фисташки, миндаль
                    </p>
                  </div>
                  <div className="menu-card-utils">
                    <div className="card-utils-wrapper-left">
                      <img
                        style={{ marginTop: "5px" }}
                        src={cardIcon1}
                        alt=""
                      />
                      <img
                        style={{ marginLeft: "5px" }}
                        src={cardIcon2}
                        alt=""
                      />
                    </div>
                    <div className="card-utils-wrapper-right">
                      <span>230 С</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardMenuBreakfast;
