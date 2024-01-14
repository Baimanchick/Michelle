import React, { useEffect, useState } from "react";
import "../css/salad.scss";
import axios from "axios";

function Test({ title, img, text, weight, price, icon }) {
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
    <div className="news-card-container">
      <div className="news-card">
        <div className="news-card-img">
          <img src={img} />
        </div>
        <div className="white-block"></div>

        <div className="news-card-title">
          <div>{title}</div>
          <span className="news-date">
            {Number(weight).toFixed().toString() === "0"
              ? ""
              : Number(weight).toFixed().toString()}
            {Number(weight).toFixed().toString() === "0" ? "" : "г"}
          </span>
          <p className="news-paragraph">{text}</p>
          <div className="card-utils">
            <div className="card-utils-left">
              {filteredSvgs.map((svg) => (
                <img key={svg.id} src={svg.svg_file} alt={`SVG ${svg.id}`} />
              ))}
            </div>
            <div className="card-utils-right">
              <span>{Number(price).toFixed().toString()} С</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
