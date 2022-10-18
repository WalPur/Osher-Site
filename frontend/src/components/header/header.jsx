import "./style.css"

import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function Header() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
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
              <Button 
                variant="outline-info" 
                className="headerButton mainButton"
                onClick={openModal}
              >
                Обсудить проект
              </Button>
              <Button variant="light" className="headerLang">Русский</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <Form>
          <Form.Group  controlId="clientsForm.ControlInput1">
            <Form.Label>ФИО</Form.Label>
            <Form.Control type="text" placeholder="Иванов Иван Иванович" />
          </Form.Group>
          <Form.Group  controlId="clientsForm.ControlInput1">
            <Form.Label>Телефон</Form.Label>
            <Form.Control type="text" placeholder="+7 (999) 999 99-99" />
          </Form.Group>
          <Form.Group  controlId="clientsForm.ControlInput1">
            <Form.Label>Компания</Form.Label>
            <Form.Control type="text" placeholder="Название компании" />
          </Form.Group>
          <Form.Group  controlId="clientsForm.ControlInput1">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Электронная почта" />
          </Form.Group>
          <Form.Group  controlId="clientsForm.ControlInput1">
            <Form.Label>Бюджет пректа</Form.Label>
            <Form.Select>
              <option value="<1">До 1 млн рублей</option>
              <option value="1:3">От 1 до 3 млн рублей</option>
              <option value="3:5">От 3 до 5 млн рублей</option>
              <option value="5:10">От 5 млн до 10 млн рублей</option>
              <option value=">10">От 10 млн рублей</option>
            </Form.Select>
          </Form.Group>
          <Form.Check
            type="checkbox"
            label="Нажимая на кнопку, вы соглашаетесь с Политикой 
            персональных данных"
          />
        </Form>
      </Modal>
    </header>
  )
}

export default Header;