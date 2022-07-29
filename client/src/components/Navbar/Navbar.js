import './Navbar.css';
import EmailIcon from '../Link-Icons/Email';
import PhoneIcon from '../Link-Icons/Phone';
import Facebook from '../Link-Icons/Facebook';
import Instagram from '../Link-Icons/Instagram';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

// To what are those classes link to?
function Navigation() {
  return (
    <Container fluid>
      <Row>
        <Col xs={6}>
          <PhoneIcon />
        </Col>

        <Col xs={6} className="email">
          <EmailIcon />
        </Col>

        <Col xs={3}>
          <Facebook />
        </Col>

        <Col xs={3}>
          <Instagram />
        </Col>

        <Col xs={6}>
          <Navbar expand="lg">
            <Navbar.Brand href="/home">
              {/* Show Logo on Navbar only if not on Home Page */}
              {/* <img src={Logo} width="100" height="70" /> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/reviews">Reviews</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default Navigation;
