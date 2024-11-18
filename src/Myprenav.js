import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Myprenav() {
  return (
    <Navbar expand="lg" id="prenav">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href=''>TIME TO TRY SOMETHING NEW!</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#home"><FaFacebook /></Nav.Link>
            <Nav.Link href="#link"><FaTwitter /></Nav.Link>
            <Nav.Link href="#link"><FaInstagram /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Myprenav;
