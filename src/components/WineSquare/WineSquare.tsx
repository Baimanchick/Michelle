import React from "react";
import "../../styles/wine.scss";
import { WineSquareProps } from "./Win.props";

function WineSquare({
    title1,
    price1,
    price2,
    title2,
    weight1,
    weight2,
    text1,
    text2,
    style,
}: WineSquareProps) {
    return (
        <>
            <div style={style} className="wine-main">
                <div className="wine-container">
                    <div className="wine">
                        <div className="wine-title-container">
                            <div>{title1}</div>
                            <span>{price1}</span>
                            <span>{price2}</span>
                        </div>
                        <div className="wine-title-container">
                            <h2>{title2}</h2>
                            <h3 className={weight1 === "" ? "emoji" : ""}>{weight1}</h3>
                            <h4>{weight2}</h4>
                        </div>
                        <div className="wine-text">
                            <div>{text1}</div>
                        </div>
                        <div className="wine-text">
                            <div>{text2}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WineSquare;
