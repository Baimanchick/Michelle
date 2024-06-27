import React from "react";
import "../../styles/smuzi.scss";
import { SmuziSquareProps } from "./SmuziSquare.props";

function SmuziSquaer({ style, title, price }: SmuziSquareProps) {
    return (
        <>
            <div style={style} className="smuzi-square-main">
                <div className="smuzi-square-container">
                    <div className="smuzi-square-title">{title}</div>
                    <div className="smuzi-square-price">{price}</div>
                </div>
            </div>
        </>
    );
}

export default SmuziSquaer;
