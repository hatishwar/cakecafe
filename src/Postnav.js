import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Postnav() {
  return (
    <div className='row' id='postnavrow'>
        {/* <h1></h1> */}
        <div className='col-10 offset-1'>
        <Navbar expand="lg" className="" id='postnav'>
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#link">PASTRIES</Nav.Link>
            <Nav.Link href="#link">STANDARD CAKES</Nav.Link>
            <Nav.Link href="#link">CUSTOMIZED CAKES</Nav.Link>
            <Nav.Link href="#link">FESTIVAL GIFTING</Nav.Link>
            <Nav.Link href="#link">PARTY MENUE</Nav.Link>
            <Nav.Link href="#link">REWARDS</Nav.Link>
            <Nav.Link href="#link">CONTACT US</Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Form inline>
        <Row>
          <Col xs="8">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="4">
            {/* <Button variant='dark' type="submit">Submit</Button> */}
            Sign In
          </Col>
        </Row>
      </Form>
    </Navbar>
        </div>
    </div>
  );
}

export default Postnav;