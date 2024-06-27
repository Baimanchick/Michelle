import { LongSquareProps } from "./LongSquare.props";
import "../../styles/coffe.scss"

function LongSqaure({ title, weight, price, squareI }: LongSquareProps) {
    return (
        <>
            <div className="Long-main">
                <div className="Long-container">
                    <div className="Long">
                        <div className="Long-title-container">
                            <div className="sqaure-wrapper-left">
                                <div className="Long-title">{title}</div>
                            </div>
                            <div className="sqaure-wrapper-right">
                                <div className="Long-weight">{weight}</div>
                            </div>
                        </div>
                        <div className="Long-utils-container">
                            <img src={squareI} />
                            <div className="Long-price">{price}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LongSqaure;
