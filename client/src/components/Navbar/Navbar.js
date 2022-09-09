import './Navbar.css';
import ContactInfo from '../Link-Icons/ContactInfo';
import SocialMedia from '../Link-Icons/SocialMediaIcons';
import { Container, Col, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import NavbarLink from '../Nav-Link/NavLink';

// To what are those classes link to?
function Navigation() {
  return (
    <>
      <Navbar
        style={{ background: 'F9F9F9' }}
        // sbg="secondary"
        expand="lg"
        className="mb-3 main-container"
        sticky="top"
      >
        <Container fluid>
          <Col className="icon-text">
            <ContactInfo />
          </Col>

          <Navbar.Offcanvas
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                AG Organizing &amp; Cleaning Services LLC
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 Navbar-Styling">
                <NavbarLink href="/home">Home</NavbarLink>
                <NavbarLink href="/about">About</NavbarLink>
                <NavbarLink href="/gallery">Gallery</NavbarLink>
                <NavbarLink href="/services">Services</NavbarLink>
                <NavbarLink href="/reviews">Reviews</NavbarLink>
                <NavbarLink href="/contact">Contact</NavbarLink>
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
