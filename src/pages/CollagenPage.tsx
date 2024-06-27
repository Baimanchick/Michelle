import "../styles/collagen.scss";
import ArrowLeft from "../components/Arrow/ArrowLeft";
import { getSelectedLanguage } from "../helpers/functions/getLanguagesTitle/getSelectedLanguage";
import SliderMenu from "../components/SliderMenu/SliderMenu";

function CollagenPage() {
    const selectedLanguage = getSelectedLanguage()
    return (
        <>
            <div className="menu-main-content">
                <ArrowLeft />
                <SliderMenu />
                {selectedLanguage === "Русский" ? (
                    <>
                        <div className="collagen-main">
                            <header className="collagen-header">
                                <h2>КОЛЛАГЕН</h2>
                                <p>
                                    для всех ценителей <br /> здорового образа жизни и красоты!
                                </p>
                            </header>
                            <div className="collagen-container">
                                <div className="collagen-rectangle-main">
                                    <div className="collagen-rectangle-container">
                                        <div className="collagen-rectangle-title">
                                            <p>
                                                Коллаген — это белок, который играет ключевую роль в
                                                нашем организме.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="collagen-rectangle-main">
                                    <div className="collagen-rectangle-container">
                                        <div className="collagen-rectangle-title">
                                            <p>
                                                Главная сила коллагена — его свойство поддерживать
                                                тонус и молодость кожи, а также здоровье суставов
                                                и опорно-двигательного аппарата .
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="collagen-rectangle-main">
                                    <div className="collagen-rectangle-container">
                                        <div className="collagen-rectangle-title">
                                            <p>
                                                Благодаря коллагену сохраняется оптимальный уровень
                                                воды в организме, ускоряются процессы регенерации
                                                кожи, уменьшается болевой синдром, снижается ломкость
                                                волос, ногтей и многое другое!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="collagen-title">
                            <div>
                                Ощути всю пользу <br /> коллагена!
                            </div>
                        </div>
                        <div >
                            <div className="collagen-main-2">
                                <div className="collagen-container-2">
                                    <div className="collagen-wrapper-left">
                                        + добавить коллаген для красоты, молодости и здоровья
                                    </div>
                                    <div className="collagen-wrapper-right">
                                        <span>20г</span>
                                        <h5>150c</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : selectedLanguage === "English" ? (
                    <>
                        <div className="collagen-main">
                            <header className="collagen-header">
                                <h2>Exclusively at Michelle</h2>
                                <p>
                                    Collagen is a must-have for anyone who <br /> values a
                                    healthy lifestyle and beauty.
                                </p>
                            </header>
                            <div className="collagen-container">
                                <div className="collagen-rectangle-main">
                                    <div className="collagen-rectangle-container">
                                        <div className="collagen-rectangle-title">
                                            <p>
                                                It is a vital protein that is crucial in maintaining
                                                the body's overall health.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="collagen-rectangle-main">
                                    <div className="collagen-rectangle-container">
                                        <div className="collagen-rectangle-title">
                                            <p>
                                                Collagen's primary function is to keep the skin
                                                looking youthful and firm while also promoting joint
                                                and musculoskeletal system health.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="collagen-rectangle-main">
                                    <div className="collagen-rectangle-container">
                                        <div className="collagen-rectangle-title">
                                            <p>
                                                It helps maintain the optimal water level in the body,
                                                accelerates skin regeneration, reduces pain, decreases
                                                hair and nail brittleness, and provides numerous other
                                                benefits.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="collagen-title">
                            <div>
                                Experience the advantages of <br /> collagen today and feel
                                the <br />
                                difference it can bring to your life!
                            </div>
                        </div>
                        <div >
                            <div className="collagen-main-2">
                                <div className="collagen-container-2">
                                    <div className="collagen-wrapper-left">
                                        + add collagen for beauty and health
                                    </div>
                                    <div className="collagen-wrapper-right">
                                        <span>20 ml</span>
                                        <h5>150 KGS</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : selectedLanguage === "Türkçe" ? (
                    <>
                        <div className="collagen-main">
                            <header className="collagen-header">
                                <h2>Yalnızca Michelle'de</h2>
                                <p>
                                    Kolajen, <br /> değer veren herkesin sahip olması gereken
                                    bir maddedir sağlıklı yaşam tarzı ve güzellik.
                                </p>
                            </header>
                            <div className="collagen-container">
                                <div className="collagen-rectangle-main">
                                    <div className="collagen-rectangle-container">
                                        <div className="collagen-rectangle-title">
                                            <p>
                                                korunmasında çok önemli olan hayati bir proteindir.
                                                vücudun genel sağlığı.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="collagen-rectangle-main">
                                    <div className="collagen-rectangle-container">
                                        <div className="collagen-rectangle-title">
                                            <p>
                                                Kolajenin birincil işlevi cildi korumaktır. genç ve
                                                sağlam görünmenin yanı sıra eklemlenmeyi de teşvik
                                                ediyor ve kas-iskelet sistemi sağlığı.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="collagen-rectangle-main">
                                    <div className="collagen-rectangle-container">
                                        <div className="collagen-rectangle-title">
                                            <p>
                                                Vücuttaki optimum su seviyesinin korunmasına yardımcı
                                                olur, cilt yenilenmesini hızlandırır, ağrıyı azaltır,
                                                azaltır saç ve tırnakların kırılganlığını artırır ve
                                                diğer birçok faydalar.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="collagen-title">
                            <div>
                                Kolajenin avantajlarını bugün <br /> deneyimleyin ve hissedin
                                <br />
                                hayatınıza getirebileceği fark!
                            </div>
                        </div>
                        <div >
                            <div className="collagen-main-2">
                                <div className="collagen-container-2">
                                    <div className="collagen-wrapper-left">
                                        + güzellik ve sağlık için kolajen ekleyin
                                    </div>
                                    <div className="collagen-wrapper-right">
                                        <span>20 ml</span>
                                        <h5>150 KGS</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : selectedLanguage === "Кыргызча" ? (
                    <>
                        <div className="collagen-main">
                            <header className="collagen-header">
                                <h2>КОЛЛАГЕН</h2>
                                <p>
                                    сергек жашоо жана сулуулук <br /> бардык билгендер үчүн!
                                </p>
                            </header>
                            <div className="collagen-container">
                                <div className="collagen-rectangle-main">
                                    <div className="collagen-rectangle-container">
                                        <div className="collagen-rectangle-title">
                                            <p>
                                                Коллаген негизги ролду ойнойт белок болуп саналат
                                                биздин денебиз.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="collagen-rectangle-main">
                                    <div className="collagen-rectangle-container">
                                        <div className="collagen-rectangle-title">
                                            <p>
                                                Коллагендин негизги күчү - анын колдоо жөндөмдүүлүгү
                                                теринин өңү жана жаштар, ошондой эле биргелешкен ден
                                                соолук жана таяныч-кыймыл аппараты.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="collagen-rectangle-main">
                                    <div className="collagen-rectangle-container">
                                        <div className="collagen-rectangle-title">
                                            <p>
                                                Коллагендин аркасында организмдеги суунун оптималдуу
                                                деңгээли сакталат, теринин регенерация процесстери
                                                тездетет, оору азаят, чачтын жана тырмактардын
                                                морттугу азаят жана башка көптөгөн нерселер!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="collagen-title">
                            <div>
                                Коллагендин <br /> бардык артыкчылыктарын сезиңиз!
                            </div>
                        </div>
                        <div >
                            <div className="collagen-main-2">
                                <div className="collagen-container-2">
                                    <div className="collagen-wrapper-left">
                                        + сулуулук, жаштык жана ден соолук үчүн коллаген кошуу
                                    </div>
                                    <div className="collagen-wrapper-right">
                                        <span>20г</span>
                                        <h5>150c</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}
            </div>

        </>
    );
}

export default CollagenPage;
