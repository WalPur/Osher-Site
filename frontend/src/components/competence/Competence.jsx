import "./style.css"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState } from "react";

import Backend from "./competences/back";
import Design from "./competences/Design";
import Front from "./competences/Front";
import Mobile from "./competences/Mobile";
import Support from "./competences/Support";
import Project from "./competences/project";

function Competence() {
    const [tab, setTab] = useState("Mobile")
    function change() {
        if (tab === "Mobile") {
            return <Mobile/>;
        } else if (tab === "Front-end") {
            return <Front/>;
        } else if (tab === "Back-end") {
            return <Backend/>
        } else if (tab === "Project") {
            return <Project/>
        } else if (tab === "Design") {
            return <Design/>
        } else if (tab === "Support") {
            return <Support/>
        }
    }
    return(
        <div className="Competence">
            <Container>
                <h2 className="CompetenceTitle SecondaryFrameTitle">
                    Техническая компетенция
                    <div className="FrameTitleLine"></div>
                </h2>
                <div className="Comptences">
                    <div className="CompentenceList">   
                        <Button 
                            onClick={() => setTab("Mobile")} 
                            className="CompetenceButton"
                        >
                            Мобильная разработка
                            <div className="feedbackUnderline"></div>
                        </Button>
                        <Button
                            onClick={() => setTab("Front-end")}
                            className="CompetenceButton"
                        >
                            Front-end
                            <div className="feedbackUnderline"></div>
                        </Button>
                        <Button
                            onClick={() => setTab("Back-end")}
                            className="CompetenceButton"
                        >
                            Back-end
                            <div className="feedbackUnderline"></div>
                        </Button>
                        <Button 
                            onClick={() => setTab("Project")}
                            className="CompetenceButton"
                        >
                            Проектирование
                            <div className="feedbackUnderline"></div>
                        </Button>
                        <Button 
                            onClick={() => setTab("Design")}
                            className="CompetenceButton"
                        >
                            Дизайн
                            <div className="feedbackUnderline"></div>
                        </Button>
                        <Button 
                            onClick={() => setTab("Support")}
                            className="CompetenceButton"
                        >
                            Поддержка
                            <div className="feedbackUnderline"></div>
                        </Button>
                    </div>
                    <div className="CompetenceScreen">
                        {change()}
                        {/* <Mobile /> */}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Competence;