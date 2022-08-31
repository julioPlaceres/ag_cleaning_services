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

        <Col xs={1}>
          <Facebook />
        </Col>

        <Col xs={1}>
          <Instagram />
        </Col>
        
        <Col xs={6}>
          <Navbar
            collapseOnSelect
            fixed="top"
            expand="lg"
            bg="secondary"
            variant="dark"
            className="Navbar-Styling"
          >
            <Navbar.Brand href="/home">
              {/* Show Logo on Navbar only if not on Home Page */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/gallery">Gallery</Nav.Link>
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
