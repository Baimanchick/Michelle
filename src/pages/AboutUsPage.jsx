import React, { useEffect, useState } from "react";
import "../css/about.scss";
import { useLanguage } from "../functions/languageContext";
import SliderMenu, { categories } from "../components/SliderMenu";
import { useNavigate } from "react-router-dom";
import img1 from "../images/about/ru.png";
import img2 from "../images/about/tk.png";
import img3 from "../images/about/kg.png";
import img4 from "../images/about/english.png";

function AboutUsPage() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [categoryChange, setCategoryChange] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dishes, setDishes] = useState([]);
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
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
            {/* <SliderMenu onSelectCategory={handleSelectCategory} /> */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></div>
          </div>

          {selectedLanguage === "Русский" ? (
            <>
              <div className="about-main">
                <div className="about-container">
                  <div className="about">
                    <div className="about-first">
                      <div>
                        <h2>О НАС</h2>
                        <p>
                          Мишель — это больше чем кофейня или коммерческая
                          организация.
                        </p>
                        <p>
                          Это — олицетворение добра, любви и заботы о природе и
                          людях. Следуя за своей мечтой, основательница кофейни
                          Мишель решила создать мирок, где люди чтят Её
                          Величество «Матушку Землю» и не нарушают гармонию с
                          природой.
                        </p>
                        <p>
                          Мы гордимся тем, что оказались в рядах экологически
                          сознательных компаний и в соответствии с этим видением
                          следуем определённым принципам:
                        </p>
                        <p>
                          - Отказ от одноразового пластика и пластиковых бутылок
                          - Использование экологичного и бесконтактного QR-меню
                          - Сортировка отходов - Подача эко-трубочек
                          осуществляется только по индивидуальному запросу гостя
                          - Ежегодная высадка деревьев в столице -
                          Эко-просвещение населения - Стимуляция использования
                          сушилок для рук - Использование энергосберегающих
                          печей - Использование водосберегающей посудомоечной
                          машины - Использование умных диспенсеров для туалетной
                          бумаги
                        </p>
                      </div>
                    </div>
                    <div className="about-second">
                      <div>
                        <p>
                          Кофейня богата большим разнообразием живых растений,
                          создающих непринуждённую и успокаивающую атмосферу.
                          Природные цвета интерьера подчёркивают трепетное
                          отношение к природе и её ресурсам. Благодаря
                          панорамным окнам и прозрачным дверям в кофейне много
                          света и воздуха. Два вместительных зала, а также
                          отдельная VIP-комната для особых встреч.
                        </p>
                        <p>
                          В 2022 году наша основательница Мишель расширила свои
                          горизонты, переехав на прекрасное Средиземное море. И
                          теперь она с радостью делится всеми удивительными
                          рецептами, которые открыла для себя в этой невероятной
                          местности.
                        </p>
                        <p>
                          Позвольте ей взять вас с собой в гастрономическое
                          путешествие!
                        </p>
                        <p>
                          В заключение, мы хотим напомнить вам о том, что как
                          сильно бы мы не стремились радовать вас чем-то новым и
                          особенным, неизменным остаётся одно: всё, что мы
                          делаем, мы делаем с любовью и заботой к Природе и
                          Человеку.
                        </p>
                      </div>
                    </div>
                    <div className="about-first">
                      <div>
                        <p>
                          Для лиц с особенным рационом питания мы создали
                          уникальные символы.
                        </p>
                        <p>
                          Если у вас есть аллергия или непереносимость на
                          какие-либо продукты, пожалуйста, сообщите менеджеру.
                        </p>
                      </div>
                    </div>
                    <div className="about-images">
                      <img src={img1} className="about-img" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : selectedLanguage === "English" ? (
            <>
              <div className="about-main">
                <div className="about-container">
                  <div className="about">
                    <div className="about-first">
                      <div>
                        <h2>ABOUT US</h2>
                        <p>
                          Dear guests, welcome to MICHELLE’s Coffee and Kitchen,
                          which is not only a place where good food and coffee
                          are served, but it is also the embodiment of kindness,
                          love, and care for both nature and people. Our
                          founder, Michelle, followed her dream of creating a
                          little world where people honor Mother Earth and do
                          not disrupt the harmony with nature.
                        </p>
                        <p>
                          We pride ourselves on being environmentally conscious
                          and in line with this vision, the company follows
                          certain principles to fulfill the green dream:
                        </p>
                        <p>
                          - Avoiding the use of single-use plastic - Providing a
                          metallic QR menu instead of a paper menu - Promoting
                          recycling - Providing paper straws on request only -
                          Planting trees annually in the capital city -
                          Educating local people about environmental
                          friendliness - Encouraging the use of hand dryers
                          instead of paper towels - Using energy-saving stoves -
                          Using water-saving dishwashers - Using smart toilet
                          paper dispensers that dosage paper by a certain amount
                        </p>
                      </div>
                    </div>
                    <div className="about-second">
                      <div>
                        <p>
                          Our premises are adorned with an impressive array of
                          living plants that create a natural and calming
                          atmosphere. The walls and furniture are designed with
                          natural colors that accentuate our reverence for
                          nature and its resources. Our panoramic windows allow
                          plenty of light and air to circulate, creating a
                          pleasant environment to enjoy your time.
                        </p>
                        <p>
                          We also provide two spacious rooms for guests and a
                          separate VIP room for special meetings with up to ten
                          guests.
                        </p>
                        <p>
                          In 2022, our founder Michelle has expanded her
                          horizons by moving to the beautiful Mediterranean Sea.
                          She is now excited to share with you all the amazing
                          new recipes she has discovered in that incredible
                          area. Let her take you on a journey of culinary
                          exploration!
                        </p>
                        <p>
                          To conclude, we want to remind you how strongly we are
                          committed to delighting you with new and varying
                          experiences. However, our unwavering value of nature
                          and humanity will always remain constant: everything
                          we create is infused with love and care for both the
                          environment and people.
                        </p>
                      </div>
                    </div>
                    <div className="about-first">
                      <div>
                        <p>
                          We have designed unique symbols for those on a special
                          diet. Please inform the manager of any allergies or
                          intolerances.
                        </p>
                      </div>
                    </div>
                    <div className="about-images">
                      <img src={img4} className="about-img" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : selectedLanguage === "Turkce" ? (
            <>
              <div className="about-main">
                <div className="about-container">
                  <div className="about">
                    <div className="about-first">
                      <div>
                        <h2>HAKKIMIZDA</h2>
                        <p>
                          Míchelle bír kahvehaneden veya tícarí bír
                          organizasyondan daha fazlasıdır.
                        </p>
                        <p>
                          Bu, íyílíğin, bakımın ve doğaya olan sevgínín
                          somutlaşmasıdır. Kahvehanenín kurucusu Míșel, hayalíne
                          sadık kalarak, ínsanların "Toprak Anası"nı saygıyla
                          karşıladığı ve doğayla uyumu bozmadığı bír dünya
                          yaratmaya karar verdí.
                        </p>
                        <p>
                          Gurur duyuyoruz kí, çevre dostu şírketler arasında yer
                          aldık ve bu vízyon doğrultusunda belírlí prensíplere
                          uymaktayız:
                        </p>
                        <p>
                          — Tek kullanımlık plastík ve plastík şíşelerdí
                          reddetme— Ekolojík ve temassız QR-menü kullanımı —
                          Atıkları ayırma — Ekolojík pípetler sadece mísafírín
                          bíreysel talepleríne göre sağlanır— Başkentte yıllık
                          ağaç díkímí — Halkın ekolojík bílínçlendírílmesí — El
                          kurulama makínelerínín kullanımını teşvík etme— Enerjí
                          tasarruflu fırınların kullanımı — Su tasarruflu
                          bulaşık makínesí kullanımı— Akıllı tuvalet kağıdı
                          dağiticilarin kullanımı
                        </p>
                      </div>
                    </div>
                    <div className="about-second">
                      <div>
                        <p>
                          Kahvehane bírçok farklı canlı bítkí íle zengíndír.
                          Doğal íç mekan renklerí, doğaya ve kaynaklarına
                          duyulan saygının vurgusunu yapar. Kafe íçíndekí
                          panoramík pencereler ve şeffaf kapılar sayesínde bol
                          míktarda ışık ve hava bulunmaktadır. İkí geníş salon
                          ve bír VIP odası özel buluşmalar íçín mevcuttur.
                        </p>
                        <p>
                          2022 yılında kurucumuz Míșel, güzel Akdeníz'e
                          taşınarak vízyonunu geníşlettí. Şímdí bu muazzam
                          bölgede keşfettíğí tüm haríka taríflerí memnuníyetle
                          paylaşıyor.
                        </p>
                        <p>
                          Sízí onunla bírlíkte gastronomík bír yolculuğa
                          çıkarmasına ízín verín!
                        </p>
                        <p>
                          Sonuç olarak hatırlatmak ísteríz kí, sízí yeni ve özel
                          şeylerle ne kadar memnun etmeye çalışsak da, bír şey
                          değíşmeden kalır: yaptığımız her şeyí, Doğaya ve
                          İnsana olan sevgí ve özenle yapıyoruz.
                        </p>
                      </div>
                    </div>
                    <div className="about-first">
                      <div>
                        <p>
                          özel beslenme düzeníne sahíp kíşíler íçín benzersíz
                          semboller oluşturduk.
                        </p>
                        <p>
                          Eğer bír alerjíníz veya belírlí bír ürüne karşı
                          toleransınız varsa, lütfen menajere bíldírín.
                        </p>
                      </div>
                    </div>
                    <div className="about-images">
                      <img src={img2} className="about-img" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : selectedLanguage === "Кыргызча" ? (
            <>
              <div className="about-main">
                <div className="about-container">
                  <div className="about">
                    <div className="about-first">
                      <div>
                        <h2>БИЗ ЖӨНҮНДӨ</h2>
                        <p>
                          Мишель - кофе үйүнөн же коммерциялык уюмдан да артык.
                        </p>
                        <p>
                          Бул - жакшылыктын, сүйүүнүн жана жаратылышка,
                          адамдарга кам көрүүнүн так өзү. Кыялдарынын артынан,
                          кофе үйүнүн негиздөөчүсү Айгеля-Мишель, адамдар
                          жер-энени урматтаган, жаратылыш менен гармонияны
                          бузбаган кичинекей дүйнөнү түзүүнү чечкен.
                        </p>
                        <p>
                          Биз экологиялык компаниялардын катарына киргенибизге
                          жана ушул көз карашка ылайык белгилүү бир принциптерди
                          карманганыбыз менен сыймыктанабыз:
                        </p>
                        <p>
                          — Бир жолу колдонулуучу пластик жана желим
                          бөтөлкөлөрдөн баш тартуу— Экологиялык жана контактсыз
                          QR менюсуну колдонуу— Калдыктарды сорттоо—
                          Эко-түтүктөрдү берүү коноктун жеке талабы боюнча гана
                          жүргүзүлөт. — Ар жыл сайын борбор калаага бак-дарак
                          отургузуу— Кол кургаткычтарды колдонуу— Калкты
                          эко-агартуу— Энергияны үнөмдөөчү мештерди колдонуу—
                          Суу үнөмдөөчү идиш жуугучту колдонуу— Акылдуу даарат
                          кагаз диспенсерлерин колдонуу
                        </p>
                      </div>
                    </div>
                    <div className="about-second">
                      <div>
                        <p>
                          Кофе үйү адамды тынчтандыруучу атмосфераны түзгөн ар
                          кандай өсүмдүктөргө бай. Интерьердин табигый тустөрү
                          жаратылышка жана анын ресурстарына болгон аяр мамилени
                          баса белгилейт. Кофе үйүндө панорамдык терезелер жана
                          эшиктер болгондуктан жарык жана аба көп. Эки кенен зал
                          жана өзгөчө жолугушуулар үчүн өзүнчө отуруучу VIP
                          бөлмө бар.
                        </p>
                        <p>
                          2022-жылы биздин негиздөөчүбүз Мишель, өзүнүн
                          горизонтун кеңейтип, Жер Ортолук деңизге карай көчүп
                          кеткен. Эми ал бул аймакта тапкан бардык укмуштуудай
                          рецепттер менен бөлүшүүгө кубанычта.
                        </p>
                        <p>
                          Мишель өзү менен кошо сизди тамак-аш саякатына
                          чакырат!
                        </p>
                        <p>
                          Жыйынтыктап айтканда, биз сизди жаңы жана өзгөчө бир
                          нерсе менен кубантууга канчалык аракет кылбасак дагы,
                          бир нерсе туруктуу бойдон кала берет: биз жасаган
                          нерселердин бардыгын Жаратылышка жана Адамга болгон
                          сүйүү жана камкордук менен жасайбыз.
                        </p>
                      </div>
                    </div>
                    <div className="about-first">
                      <div>
                        <p>
                          Ошондой эле өзгөчө тамактанган адамдар үчүн биз
                          уникалдуу символдорду түздүк.
                        </p>
                        <p>
                          Эгерде сизде кандайдыр бир тамак-ашка аллергияңыз
                          болсо, cураныч, менеджерге кабарлаңыз.
                        </p>
                      </div>
                    </div>
                    <div className="about-images">
                      <img src={img3} className="about-img" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}

          <div style={{ paddingBottom: "200px" }}></div>
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

export default AboutUsPage;
