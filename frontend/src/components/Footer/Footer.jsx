import "./style.css"

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <footer>
            <Container className="FooterContainer">
                <div className="FooterMain">
                    <img
                        src="images/Footer/logo.png"
                        className="FooterLogo"
                        alt="Osher Logo"
                    />
                    <Col sm={5} className="FooterProjects">
                        <div className="FooterTable">
                            <div className="FooterTableProjects">
                                <div className="
                                    FooterTableProjectsTitle FooterTableHeader
                                ">
                                    Проекты
                                </div>
                                <div className="FooterTableProjectsContent">
                                    <div className="FooterTableObject">
                                        Медтрекер
                                    </div>
                                    <div className="FooterTableObject">
                                        Mobivet
                                    </div>
                                    <div className="FooterTableObject">
                                        Vivat
                                    </div>
                                    <div className="FooterTableObject">
                                        Онкопоиск
                                    </div>
                                    <div className="FooterTableObject">
                                        Глаукома поиск
                                    </div>
                                    <div className="FooterTableObject">
                                        Женское здоровье
                                    </div>
                                    <div className="FooterTableObject">
                                        Ты не один
                                    </div>
                                    <div className="FooterTableObject">
                                        Работа в Якутии
                                    </div>
                                    <div className="FooterTableObject">
                                        Gogo курьер
                                    </div>
                                </div>
                            </div>
                            <div className="FooterTableCooperation">
                                <div className="
                                    FooterTableCooperationTitle FooterTableHeader
                                ">
                                    Сотрудничество
                                    </div>
                                <div className="FooterTableCooperationContent">
                                    <div className="FooterTableObject">
                                        Стажировка
                                    </div>
                                    <div className="FooterTableObject">
                                        Вакансии
                                    </div>
                                    <div className="FooterTableObject">
                                        Стать клиентом
                                    </div>
                                    <div className="FooterTableObject">
                                        Стать партнером
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <div className="FooterContacts">
                        <div className="FooterContactsSkolkovo">
                            <img
                                src="images/Footer/skolkovo.png"
                                className="FooterSkolkovo"
                                alt="Лого Сколково"
                            />
                        </div>
                        <div className="FooterContactsPhone">
                            <img
                                src="images/Footer/phone.png"
                                className="FooterPhone FooterIcon"
                                alt="Телефон"
                            />
                            +7 (999) 245 18-18
                        </div>
                        <div className="FooterContactsMail">
                            <img
                                src="images/Footer/mail.png"
                                className="FooterMail FooterIcon"
                                alt="Почта"
                            />
                            osher.tech@yandex.ru
                        </div>
                    </div>
                </div>
                <div className="FooterCopy">
                    2021-2022 «Ошер»
                </div>
            </Container>
        </footer>
    )
}

export default Footer;