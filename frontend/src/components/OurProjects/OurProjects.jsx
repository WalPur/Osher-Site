import "./style.css"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function OurProjects() {
    return(
        <div className="ourProjects">
            <Container>
                <h2 className="ProjectsTitle SecondaryFrameTitle">
                    Наши проекты
                    <div className="FrameTitleLine"></div>
                </h2>
                <div className="ProjectsContent">
                    <Row className="ProjectsDesc">
                        <Col sm={6} className="ProjectsDescLeft">
                            Мы разрабатываем web-сайты и интернет-порталы, 
                            оказываем услуги по seo-продвижению и технической 
                            поддержке. Cоздаем фирменные стили компаний 
                            и разрабатываем мобильные версии и приложения.
                        </Col>
                        <Col sm={6} className="ProjectsDescRight">
                            В каждой новой разработке корпоративного сайта мы 
                            подтверждаем уровень и качество работ. Выполняем 
                            проекты для ведущих веб-студий и агентств Москвы 
                            в качестве субподрядчиков. Ключевой состав команды 
                            работает с момента основании компании. Мы 
                            гарантируем индивидуальный подход к каждому новому 
                            web-сайту.
                        </Col>
                    </Row>
                    <Row className="ProjectsRow">
                        <Col sm={7} className="ProjectsMobivetBanner">
                            <Row className="ProjectsBanner">
                                <Col sm={6} className="ProjectsMobivetInfo">
                                    <img
                                        src="images/Projects/mobivet/logo.svg"
                                        width="102"
                                        height="116"
                                        className="
                                            d-inline-block 
                                            align-top 
                                            MobivetLogo
                                        "
                                        alt="Mobivet Logo"
                                    />
                                    <h3 className="ProjectsMobivetHeader">
                                        MOBIVET
                                    </h3>
                                    <p className="ProjectsMobivetText">
                                        Мы в ответе за того, кого приручили
                                    </p>
                                </Col>
                                <Col sm={6} className="ProjectsMobivetSonofbitch">
                                    <img
                                        src="images/Projects/mobivet/sonofbitch3.png"
                                        width="294"
                                        height="424"
                                        className="
                                            d-inline-block 
                                            align-top 
                                            Sonofbitch05 
                                            SonofbitchLeft
                                        "
                                        alt="Mobivet Logo"
                                    />
                                    <img
                                        src="images/Projects/mobivet/sonofbitch1.png"
                                        width="294"
                                        height="424"
                                        className="
                                            d-inline-block 
                                            align-top 
                                            Sonofbitch1 
                                            SonofbitchCenter
                                        "
                                        alt="Mobivet Logo"
                                    />
                                    <img
                                        src="images/Projects/mobivet/sonofbitch2.png"
                                        width="294"
                                        height="424"
                                        className="
                                            d-inline-block 
                                            align-top 
                                            Sonofbitch05 
                                            SonofbitchRight
                                        "
                                        alt="Mobivet Logo"
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={5} className="ProjectsOncoBanner ProjectsBanner">
                            <div className="ProjectsOncoContent">
                                <div className="ProjectsOncoInfo">
                                    <h3 className="ProjectsOncoHeader">
                                        ОНКОПОИСКСАХА
                                    </h3>
                                    <p className="ProjectsOncoText">
                                        Скрининг и ранняя диагностика рака в Якутии
                                    </p>
                                </div>
                                <div className="ProjectsOncoContainerSlider">
                                    <div className="ProjectsOncoSlider">
                                        <div className="ProjectsOncoSliderElem">
                                            <img
                                                src="images/Projects/onco/slider/elem1.png"
                                                width="142.14"
                                                height="142.14"
                                                className="
                                                    d-inline-block 
                                                    align-top 
                                                    oncoSliderElem
                                                "
                                                alt="Легкие"
                                            />
                                        </div>
                                        <div className="ProjectsOncoSliderElem">
                                            <img
                                                src="images/Projects/onco/slider/elem2.png"
                                                width="142.14"
                                                height="142.14"
                                                className="
                                                    d-inline-block 
                                                    align-top 
                                                    oncoSliderElem
                                                "
                                                alt="Простата"
                                            />
                                        </div>
                                        <div className="ProjectsOncoSliderElem">
                                            <img
                                                src="images/Projects/onco/slider/elem3.png"
                                                width="142.14"
                                                height="142.14"
                                                className="
                                                    d-inline-block 
                                                    align-top 
                                                    oncoSliderElem
                                                "
                                                alt="Печень"
                                            />
                                        </div>
                                        <div className="ProjectsOncoSliderElem">
                                            <img
                                                src="images/Projects/onco/slider/elem4.png"
                                                width="142.14"
                                                height="142.14"
                                                className="
                                                    d-inline-block 
                                                    align-top 
                                                    oncoSliderElem
                                                "
                                                alt="Ободочная кишка"
                                            />
                                        </div>
                                        <div className="ProjectsOncoSliderElem">
                                            <img
                                                src="images/Projects/onco/slider/elem5.png"
                                                width="142.14"
                                                height="142.14"
                                                className="
                                                    d-inline-block 
                                                    align-top 
                                                    oncoSliderElem
                                                "
                                                alt="Молочная железа"
                                            />
                                        </div>
                                        <div className="ProjectsOncoSliderElem">
                                            <img
                                                src="images/Projects/onco/slider/elem6.png"
                                                width="142.14"
                                                height="142.14"
                                                className="
                                                    d-inline-block 
                                                    align-top 
                                                    oncoSliderElem
                                                "
                                                alt="Шейка матки"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img
                                src="images/Projects/onco/background.png"
                                width="923"
                                height="560"
                                className="
                                    d-inline-block 
                                    align-top 
                                    OncoBackground
                                "
                                alt="Onco background"
                            />
                        </Col>
                    </Row>
                    <Row className="
                        ProjectsTrackerBanner
                        ProjectsBanner
                        ProjectsRow
                    ">
                        <img
                            src="images/Projects/tracker/Group1.svg"
                            className="TrackerChaos TrackerChaos1"
                            alt=""
                        />
                        <img
                            src="images/Projects/tracker/Group2.svg"
                            className="TrackerChaos TrackerChaos2"
                            alt=""
                        />
                        <div className="ProjectsTrackerContent">
                            <div className="ProjectsTrackerInfo">
                                <h3 className="ProjectsTrackerHeader">
                                    Трекер Здоровья
                                </h3>
                                <div className="ProjectsTrackerText">
                                    <p className="ProjectsTrackerText1">
                                        Мобильные технологии на страже вашего 
                                        здоровья.
                                    </p>
                                    <p className="ProjectsTrackerText2">
                                        Следите за своим здоровьем!
                                    </p>
                                </div>
                            </div>
                            <div className="ProjectsTrackerContainerPhone">
                                <img
                                    src="images/Projects/tracker/phone.png"
                                    className="TrackerPhone"
                                    alt="Скриншоты трекера"
                                />
                            </div>
                        </div>
                    </Row>
                    <Row className="ProjectsRow">
                        <Col sm={5} className="ProjectsBanner ProjectsMyWork">
                            <div className="ProjectsMyWorkBackground">
                                <img
                                    src="images/Projects/mywork/background.png"
                                    className="MyWorkBackground"
                                    alt="Фоновая картинка Моя Работа"
                                />
                            </div>
                            <div className="ProjectsMyWorkSymbol">
                                <img
                                    src="images/Projects/mywork/symbol.svg"
                                    className="MyWorkSymbol"
                                    alt=""
                                />
                            </div>
                            <div className="ProjectsMyWorkContent">
                                <img
                                    src="images/Projects/mywork/logo.png"
                                    className="MyWorkLogo"
                                    alt="Логотип Моя Работа"
                                />
                                <h3 className="ProjectsMyWorkHeader">
                                    Работа в Якутии
                                </h3>
                                <p className="ProjectsMyWorkDesc">
                                    Найдите работу мечты в любой точке Якутии
                                </p>
                            </div>
                        </Col>
                        <Col sm={7} className="ProjectsBanner ProjectsEagleGo">
                            <div className="ProjectsEagleGoContent">
                                <img
                                    src="images/Projects/eaglego/logo.svg"
                                    className="EagleGoLogo"
                                    alt="Логотип Eagle Go"
                                />
                                <p className="ProjectsEagleGoDesc">
                                    Агрегатор курьерской службы
                                </p>
                            </div>
                            <img
                                src="images/Projects/eaglego/girl.png"
                                className="EagleGoGirl"
                                alt=""
                            />
                        </Col> 
                    </Row>
                    <Row className="ProjectsRow">
                        <Col sm={7} className="ProjectsBanner ProjectsVivat">
                            <div className="ProjectsVivatContent">
                                <div className="ProjectsVivatInfo">
                                    <img
                                        src="images/Projects/vivat/logo.png"
                                        className="VivatLargeLogo"
                                        alt="Логотип Виват"
                                    />
                                    <div className="ProjectsVivatDesc">
                                        Аптека у Вас в кармане
                                    </div>
                                </div>
                                <img
                                    src="images/Projects/vivat/symbols.png"
                                    className="VivatSymbols"
                                    alt=""
                                />
                            </div>
                            <div className="ProjectsVivatScreen">
                                <img
                                    src="images/Projects/vivat/screen.png"
                                    className="VivatScreen"
                                    alt="Скриншот вивата"
                                />
                            </div>
                        </Col>
                        <Col sm={5} className="ProjectsBanner ProjectsYNL">
                            <div className="ProjectsYNLContent">
                                <div className="ProjectsYNLText">
                                    <h3 className="ProjectsYNLHeader">
                                        ТЫ НЕ ОДИН
                                    </h3>
                                    <div className="ProjectsYNLDesc">
                                        АНКЕТИРОВАНИЕ И ПОДДЕРЖКА ОНКОБОЛЬНЫХ РС(Я)
                                    </div>
                                </div>
                                <img
                                    src="images/Projects/YNL/background.png"
                                    className="YNLbackground"
                                    alt=""
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className="ProjectsRow">
                        <Col sm={5} className="ProjectsBanner ProjectsGlaucoma">
                            <h3 className="ProjectsGlaucomaContent">
                                Скрининговый сервис по выявлению глаукомы
                            </h3>
                            <img
                                src="images/Projects/glaucoma/background.png"
                                className="GlaucomaBackground"
                                alt=""
                            />
                        </Col>
                        <Col sm={7} className="ProjectsBanner ProjectsFemale">
                            <div className="ProjectsFemaleContent">
                                <div className="ProjectsFemaleInfo">
                                    <h3 className="ProjectsFemaleHeader">
                                        Женское здоровье
                                    </h3>
                                    <p className="ProjectsFemaleDesc">
                                        Проект «Женское здоровье» разработан 
                                        для сохранения и укрепления здоровья 
                                        женского населения Республики Саха 
                                        (Якутия).
                                    </p>
                                </div>
                                <div className="ProjectsFemaleLogo">
                                    <img
                                        src="images/Projects/female/logo.png"
                                        className="FemaleLogo"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="ProjectsFemaleBackground">
                                <img
                                    src="images/Projects/female/background shape.png"
                                    className="FemaleBackgroundShape"
                                    alt=""
                                />
                                <img
                                    src="images/Projects/female/roses.png"
                                    className="FemaleBackgroundRoses"
                                    alt=""
                                />
                                <img
                                    src="images/Projects/female/screens.png"
                                    className="FemaleBackgroundScreens"
                                    alt=""
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default OurProjects;