import "./style.css"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
              <img
                src="images/logo.svg"
                width="100"
                height="37"
                className="d-inline-block align-top"
                alt="Osher logo"
              />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">О компании</Nav.Link>
              <Nav.Link href="#link">Проекты</Nav.Link>
              <Nav.Link href="#link">Клиенты</Nav.Link>
              <Nav.Link href="#link">Команда</Nav.Link>
            </Nav>
            <Nav>
              <Button variant="outline-info" className="headerButton">Обсудить проект</Button>
              <Button variant="light" className="headerLang">Русский</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;