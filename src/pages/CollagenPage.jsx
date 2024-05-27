import React, { useEffect, useState } from "react";
import "../css/collagen.scss";
import { useNavigate } from "react-router-dom";
import SliderMenu, { categories } from "../components/SliderMenu";
import { useLanguage } from "../functions/languageContext";
import ArrowLeft from "../components/ArrowLeft";

function CollagenPage() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  let getCategory = localStorage.getItem("category");

  const [selectedCategory, setSelectedCategory] = useState(
    categories[Number(getCategory)]
  );
  const [categoryChange, setCategoryChange] = useState(false);
  const [notF, setNotF] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    getCategory = category.id;
    localStorage.setItem("category", category.id);
    setCategoryChange(true);
  };

  const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {windowWidth <= 1000 ? (
        <div className="menu-main-content">
          <div className="menu-stick">
            <SliderMenu
              onSelectCategory={handleSelectCategory}
              categoryI={Number(getCategory)}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></div>
          </div>
          <ArrowLeft />
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
              <div style={{ paddingBottom: "300px" }}>
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
              <div style={{ paddingBottom: "300px" }}>
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
              <div style={{ paddingBottom: "300px" }}>
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
                    Сергек жашоо образын жана <br/> сулуулукту сүйгөндөр үчүн!
                  </p>
                </header>
                <div className="collagen-container">
                  <div className="collagen-rectangle-main">
                    <div className="collagen-rectangle-container">
                      <div className="collagen-rectangle-title">
                        <p>
                          Коллаген — бул биздин организмде негизги ролду ойногон белок. 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="collagen-rectangle-main">
                    <div className="collagen-rectangle-container">
                      <div className="collagen-rectangle-title">
                        <p>
                          Коллагендин негизги күчү — теринин тонусун жана жаштыгын, ошондой эле муундардын жана таяныч-кыймыл аппаратынын ден-соолугун сактайт.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="collagen-rectangle-main">
                    <div className="collagen-rectangle-container">
                      <div className="collagen-rectangle-title">
                        <p>
                          Коллагендин аркасы менен денедеги суунун оптималдуу деңгээли сакталат, теринин регенерация процесстери тездейт, оору синдрому азаят, чачтын, тырмактын морттугу ж.б. азаят!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="collagen-title">
                <div>
                  Коллагендин пайдасын <br/> сезип көрүңүз!
                </div>
              </div>
              <div style={{ paddingBottom: "300px" }}>
                <div className="collagen-main-2">
                  <div className="collagen-container-2">
                    <div className="collagen-wrapper-left">
                      + сулуулук, жаштык жана ден-соолук үчүн коллагенди кошуңуз
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
      ) : (
        <>
          <div className="thousand-px">
            <h2>
              Данный сайт не потдерживает экраны больше 1000 px, пожалуйста
              уменьшите ваш экран, либо зайдите через мобильное устройство
            </h2>
          </div>
        </>
      )}
    </>
  );
}

export default CollagenPage;
