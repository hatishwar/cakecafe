import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BsPersonCircle } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { RiShoppingBag4Line } from "react-icons/ri";

import logo from './assets/cake-cafe-logo.png';

function Mynavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src={logo}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">ABOUT US</Nav.Link>
            <Nav.Link href="#link">GIFTS CARD</Nav.Link>
            <Nav.Link href="#link">INSTAGRAM</Nav.Link>
            
          </Nav>
          <Nav className="ms-auto">
          <Nav.Link href="#home"><BsPersonCircle /> Log In</Nav.Link>
          <Nav.Link href="#home"><BsHeart /></Nav.Link>
          <Nav.Link href="#home"><RiShoppingBag4Line /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mynavbar;