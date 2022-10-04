import "./style.css"

import Container from 'react-bootstrap/Container';

function Directions() {
    return (
        <div className="Directions">
            <img
                src="images/FlyingPhones1.svg"
                width="488"
                height="267"
                className="d-inline-block align-top DirectionsPhones DirectionsPhones1"
                alt=""
            />
            <Container className="DirectionsContainer">
                <h2 className="DirectionsTitle SecondaryFrameTitle">
                    Направления
                    <div className="FrameTitleLine"></div>
                </h2>
                <div className="DirectionsContent">
                    <div className="DirectionsList">
                        <div className="DirectionsListElem DirectionsListElem1">
                            <div className="DirectionsListElemNum">01</div>
                            <div className="DirectionsListElemText">Разработка WEB и мобильное приложение</div>
                        </div>
                        <div className="DirectionsListElem DirectionsListElem2">
                            <div className="DirectionsListElemNum">02</div>
                            <div className="DirectionsListElemText">UX / UI Дизайн</div>
                        </div>
                        <div className="DirectionsListElem DirectionsListElem3">
                            <div className="DirectionsListElemNum">03</div>
                            <div className="DirectionsListElemText">SEO / SERM / контент-маркетинг</div>
                        </div>
                        <div className="DirectionsListElem DirectionsListElem4">
                            <div className="DirectionsListElemNum">04</div>
                            <div className="DirectionsListElemText">Брендинг</div>
                        </div>
                        <div className="DirectionsListElem DirectionsListElem5">
                            <div className="DirectionsListElemNum">05</div>
                            <div className="DirectionsListElemText">Аналитика</div>
                        </div>
                        <div className="DirectionsListElem DirectionsListElem6">
                            <div className="DirectionsListElemNum">06</div>
                            <div className="DirectionsListElemText">Поддержка и развитие</div>
                        </div>
                    </div>
                </div>
            </Container>
            <img
                src="images/FlyingPhones2.svg"
                width="488"
                height="267"
                className="d-inline-block align-top DirectionsPhones DirectionsPhones2"
                alt=""
            />
        </div>
    )
}

export default Directions