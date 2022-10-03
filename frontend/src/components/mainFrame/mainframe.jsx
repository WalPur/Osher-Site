import "./style.css"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function MainFrame() {
  return (
    <div className="mainFrame">
      <Container className="mainText">
        <h1>
          OSHER TECHNOLOGIES
        </h1>
        <h2>
          Разработка web сайтов и мобильных приложений для лидеров рынка
        </h2>
        <Button className="feedback">
          Связаться с нами
          <div className="feedbackUnderline"></div>
        </Button>
      </Container>

    </div>
  )
}

export default MainFrame;