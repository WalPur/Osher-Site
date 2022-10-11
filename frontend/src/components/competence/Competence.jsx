import "./style.css"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function Competence() {
    return(
        <div className="Competence">
            <Container>
                <h2 className="CompetenceTitle SecondaryFrameTitle">
                    Техническая компетенция
                    <div className="FrameTitleLine"></div>
                </h2>
                <div className="Comptences">
                    <Button className="CompetenceButton">
                        Мобильная разработка
                        <div className="feedbackUnderline"></div>
                    </Button>
                    <Button className="CompetenceButton">
                        Front-end
                        <div className="feedbackUnderline"></div>
                    </Button>
                    <Button className="CompetenceButton">
                        Back-end
                        <div className="feedbackUnderline"></div>
                    </Button>
                    <Button className="CompetenceButton">
                        Проектирование
                        <div className="feedbackUnderline"></div>
                    </Button>
                    <Button className="CompetenceButton">
                        Дизайн
                        <div className="feedbackUnderline"></div>
                    </Button>
                    <Button className="CompetenceButton">
                        Поддержка
                        <div className="feedbackUnderline"></div>
                    </Button>
                </div>
            </Container>
        </div>
    )
}

export default Competence;