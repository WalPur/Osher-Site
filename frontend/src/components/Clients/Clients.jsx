import "./style.css"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Clients() {
    return(
        <div className="Clients">
            <Container>
                <Row className="ClientsRow1 ClientsRow">
                    <img
                        src="images/Clients/11.png"
                        className="
                            ClientsLogo
                        "
                        alt="ЯРОД"
                    />
                    <img
                        src="images/Clients/12.png"
                        className="
                            ClientsLogo
                        "
                        alt="Минздрав РС(Я)"
                    />
                    <img
                        src="images/Clients/13.png"
                        className="
                            ClientsLogo
                        "
                        alt="ЯРМИЯЦ"
                    />
                    <img
                        src="images/Clients/14.png"
                        className="
                            ClientsLogo
                        "
                        alt="
                            Якутская Республиканская Офтальмологическая 
                            Клиническая Больница
                        "
                    />
                </Row>
                <Row className="ClientsRow2 ClientsRow">
                    <img
                        src="images/Clients/21.png"
                        className="
                            ClientsLogo
                        "
                        alt="Моя Работа Центр Занятости Населения РС(Я)"
                    />
                    <img
                        src="images/Clients/22.png"
                        className="
                            ClientsLogo
                        "
                        alt="Gogotechnology"
                    />
                    <img
                        src="images/Clients/23.png"
                        className="
                            ClientsLogo
                        "
                        alt="АОРСЯ"
                    />
                    <img
                        src="images/Clients/24.png"
                        className="
                            ClientsLogo
                        "
                        alt="Эсфераль"
                    />
                </Row>
                <Row className="ClientsRow3 ClientsRow">
                    <img
                        src="images/Clients/31.png"
                        className="
                            ClientsLogo
                        "
                        alt="РЦИТ"
                    />
                    <img
                        src="images/Clients/32.png"
                        className="
                            ClientsLogo
                        "
                        alt="ИТ ПАРК ЯКУТСК"
                    />
                </Row>
                <Button 
                    variant="outline-info" 
                    className="headerButton mainButton">
                        Стать клиентом
                </Button>
            </Container>
        </div>
    )
}

export default Clients;