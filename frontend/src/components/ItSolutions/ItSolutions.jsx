import "./style.css"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function ItSolutions() {
    return (
        <div className="ItSolutions">
            <Container>
                <h2 className="SolutionsTitle SecondaryFrameTitle">
                    РАЗРАБАТЫВАЕМ IT-РЕШЕНИЯ
                    <div className="FrameTitleLine"></div>
                </h2>
                <div className="ItSolutionsContent">
                    <div className="ItSolutionsCompany">
                        <img
                            src="images/Vector.svg"
                            width="275"
                            height="53"
                            className="d-inline-block align-top ItSolutionsLogo"
                            alt="Osher logo animated"
                        />
                        <div className="ItSolutionsCompanyBottom">
                            <img
                                src="images/logo-skolkovo 1.svg"
                                width="147"
                                height="104"
                                className="d-inline-block align-top"
                                alt="Skolkovo participant"
                            />
                            <div className="ItSolutionsCompanyButtons">
                            <Button variant="outline-info" className="ItSolutionsButton mainButton">Стажировка</Button>
                            <Button variant="outline-info" className="ItSolutionsButton mainButton">Вакансии</Button>
                            </div>
                        </div>
                    </div>
                    <div className="ItSolutionsData">
                        <div className="ItSolutionsNumbers">
                            <div className="ItSolutionsNumber">
                                <div className="ItSolutionsNumberData">2021</div>
                                <div className="ItSolutionsNumberDataLine"></div>
                                <div className="ItSolutionsNumberText">НАЧАЛО</div>
                            </div>
                            <div className="ItSolutionsNumber">
                                <div className="ItSolutionsNumberData">23</div>
                                <div className="ItSolutionsNumberDataLine"></div>
                                <div className="ItSolutionsNumberText">ЧЕЛОВЕК В КОМАНДЕ</div>
                            </div>
                            <div className="ItSolutionsNumber">
                                <div className="ItSolutionsNumberData">9</div>
                                <div className="ItSolutionsNumberDataLine"></div>
                                <div className="ItSolutionsNumberText">ПРОЕКТОВ</div>
                            </div>
                        </div>
                        <div className="ItSolutionsLogos">
                            <div className="ItSolutionsLogo">
                                <img
                                    src="images/ItSolutionsLogos/Logo1.png"
                                    width="70"
                                    height="70"
                                    className="d-inline-block align-top VivatLogo"
                                    alt="Vivat"
                                />
                            </div>
                            <div className="ItSolutionsLogo">
                                <img
                                    src="images/ItSolutionsLogos/Logo2.png"
                                    width="70"
                                    height="70"
                                    className="d-inline-block align-top"
                                    alt="Yarod"
                                />
                            </div>
                            <div className="ItSolutionsLogo">
                                <img
                                    src="images/ItSolutionsLogos/Logo3.png"
                                    width="70"
                                    height="70"
                                    className="d-inline-block align-top"
                                    alt="Female health"
                                />
                            </div>
                            <div className="ItSolutionsLogo">
                                <img
                                    src="images/ItSolutionsLogos/Logo4.png"
                                    width="70"
                                    height="70"
                                    className="d-inline-block align-top"
                                    alt="Mobivet"
                                />
                            </div>
                            <div className="ItSolutionsLogo">
                                <img
                                    src="images/ItSolutionsLogos/Logo5.png"
                                    width="70"
                                    height="70"
                                    className="d-inline-block align-top"
                                    alt="Skolkovo participant"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ItSolutions