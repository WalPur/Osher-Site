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
                    <Row>
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
                    <Row className="ProjectsTrackerBanner ProjectsBanner">

                    </Row>
                    <Row>

                    </Row>
                    <Row>

                    </Row>
                    <Row>

                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default OurProjects;