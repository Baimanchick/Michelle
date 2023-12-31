import React, { useEffect, useState } from "react";
import "../css/salad.scss";
import axios from "axios";

function CardSalad({ style, img, title, text, price, weight, icon }) {
  const [svgs, setSvgs] = useState([]);

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const res = await axios.get("https://michelle-kg.ru/svgs/");
        setSvgs(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSvg();
  }, []);

  const filterSvgsByIds = (ids) => {
    return svgs.filter((svg) => ids?.includes(svg.id));
  };

  const filteredSvgs = filterSvgsByIds(icon);

  return (
    <div className="salad-card-main">
      <div className="salad-card-container">
        <div className="salad-card">
          <div className="salad-card-img">
            <img src={img} alt="" />
            <div className="white-block"></div>
            <div className="salad-card-absolute" style={style}>
              <div className="salad-card-title">
                <div>{title}</div>
                <span>{Number(weight).toFixed().toString()} г</span>
                <p>{text}</p>
              </div>
              <div className="salad-card-utils">
                <div className="salad-card-utils-wrapper-left">
                  {filteredSvgs.map((svg) => (
                    <img
                      key={svg.id}
                      src={svg.svg_file}
                      alt={`SVG ${svg.id}`}
                    />
                  ))}
                </div>
                <div className="salad-card-utils-wrapper-right">
                  <span>{Number(price).toFixed().toString()} С</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSalad;
