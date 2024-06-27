import "../../styles/coffe.scss"
import { SquareProps } from "./Square.props";

function Square({ title, weight, price, squareI }: SquareProps) {
    return (
        <>
            <div className="square-main">
                <div className="square-container">
                    <div className="square">
                        <div className="square-title-container">
                            <div className="sqaure-wrapper-left">
                                <div className="square-title">{title}</div>
                            </div>
                            <div className="sqaure-wrapper-right">
                                <div className="square-weight">{weight}</div>
                            </div>
                        </div>
                        <div className="square-utils-container">
                            <img src={squareI} />
                            <div className="square-price">{price}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Square;
