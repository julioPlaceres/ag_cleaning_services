import './Navbar.css';
import NavbarLink from '../Nav-Link/NavLink';
import ContactInfo from '../Link-Icons/ContactInfo';
import SocialMedia from '../Link-Icons/SocialMediaIcons';
import { Container, Col, Navbar, Nav, Offcanvas } from 'react-bootstrap';

function Navigation() {
  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        className="mb-3 main-container"
        sticky="top"
      >
        <Container fluid>
          <Col className="icon-text">
            <ContactInfo />
          </Col>

          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />

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
                <NavbarLink href="/home" text="Home"/>
                <NavbarLink href="/about" text="About"/>
                <NavbarLink href="/gallery" text="Gallery"/>
                <NavbarLink href="/services" text="Services"/>
                <NavbarLink href="/reviews" text="Reviews"/>
                <NavbarLink href="/contact" text="Contact"/>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <Col xs={12} sm={12} className='icon-text icon-social'>
            <SocialMedia />
          </Col>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
