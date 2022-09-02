import './Navbar.css';
import ContactInfo from '../Link-Icons/ContactInfo';
import SocialMedia from '../Link-Icons/SocialMediaIcons';
import { Container, Col, Navbar, Nav, Offcanvas } from 'react-bootstrap';

function Navigation() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-3 main-container" sticky='top'>
        <Container fluid>
          
          <Col className="icon-text">
            <ContactInfo />
          </Col>

          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />

          <Navbar.Offcanvas aria-labelledby="offcanvasNavbarLabel-expand-lg" placement='end'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>AG Organizing &amp; Cleaning Services LLC</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 Navbar-Styling">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/gallery">Gallery</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/reviews">Reviews</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <Col xs={12} sm={12}>
            <SocialMedia />
          </Col>

        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
