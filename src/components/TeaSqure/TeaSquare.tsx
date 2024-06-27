import "../../styles/tea.scss";
import { TeaProps } from "./Tea.props";

function TeaSquare({ title, weight, price, extra, style }: TeaProps) {
    return (
        <>
            <div style={style} className="tea-container">
                <div className="tea">
                    <div className="tea-second-container">
                        <div className="tea-wrapper-left">
                            <div>{title}</div>
                            <span>{extra}</span>
                        </div>
                        <div className="tea-wrapper-right">{weight}</div>
                    </div>
                </div>
                <div className="tea-price">
                    <span>{price}</span>
                </div>
            </div>
        </>
    );
}

export default TeaSquare;
