import { getSelectedLanguage } from "../helpers/functions/getLanguagesTitle/getSelectedLanguage"
import imgTerTR from "../assets/termos/termos_TR.7335134ba6a180be1f1d.png";
import imgTerEN from "../assets/termos/termos_mobile_EN.d8676255e52649602e81.png";
import imgTerRU from "../assets/termos/termos_mobile.5293df54a295c5a39733.png";
import imgTerKG from "../assets/termos/termos_kg.e852244d69740a34dd88.png";
import "../styles/main.scss"
import ArrowLeft from "../components/Arrow/ArrowLeft";
import SliderMenu from "../components/SliderMenu/SliderMenu";

function DiscountPage() {
    const selectedLanguage = getSelectedLanguage()
    return (
        <div className='menu-main-content'>
            <ArrowLeft />
            <SliderMenu />
            <>
                {selectedLanguage === "Русский"
                    ? (
                        <header>
                            <div>
                                <div style={{ fontSize: 32, textAlign: 'center' }}>СКИДКА -25% КОФЕ И ЧАЙ НА ВЫНОС</div>
                            </div>
                        </header>
                    ) : selectedLanguage === "Кыргызча" ? (
                        <header>
                            <div>
                                <div style={{ fontSize: 32, textAlign: 'center' }}>-25% АРЗАНДАТУУ КОФЕ ЖАНА ЧАЙГА</div>
                            </div>
                        </header>
                    ) : selectedLanguage === "English"
                        ? (
                            <header>
                                <div>
                                    <div style={{ fontSize: 32, textAlign: 'center' }}>-25% DISCOUNT FOR TAKEAWAY COFFEE AND TEA</div>
                                </div>
                            </header>
                        ) : selectedLanguage === "Türkçe" ? (
                            <header>
                                <div>
                                    <div style={{ fontSize: 32, textAlign: 'center' }}>PAKET KAHVE VE ÇAYDA -25% İNDİRİM</div>
                                </div>
                            </header>
                        ) : null}
            </>

            {selectedLanguage === "Русский" ? (
                <>
                    <img src={imgTerRU} style={{ height: "auto", width: '100%', marginTop: 20 }} alt="" />
                </>
            ) : selectedLanguage === "English" ? (
                <>
                    <img src={imgTerEN} style={{ height: "auto", width: '100%', marginTop: 20 }} alt="" />
                </>
            ) : selectedLanguage === "Türkçe" ? (
                <>
                    <img src={imgTerTR} style={{ height: "auto", width: '100%', marginTop: 20 }} alt="" />
                </>
            ) : selectedLanguage === "Кыргызча" ? (
                <>
                    <img src={imgTerKG} style={{ height: "auto", width: '100%', marginTop: 20 }} alt="" />
                </>
            ) : null}

        </div>
    )
}

export default DiscountPage