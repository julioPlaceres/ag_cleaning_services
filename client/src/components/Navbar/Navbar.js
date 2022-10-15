import './Navbar.css';
import ContactInfo from '../Link-Icons/ContactInfo';
import SocialMedia from '../Link-Icons/SocialMediaIcons';
import { Container, Col, Navbar, Nav, Offcanvas } from 'react-bootstrap';

function Navigation() {
  return (
    <>
      <Navbar
        style={{ backgroundColor: 'whitesmoke' }}
        expand="lg"
        className="mb-3 container-main-navbar"
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
            <Offcanvas.Header
              closeButton
              style={{ backgroundColor: 'whiteSmoke' }}
            >
              <Offcanvas.Title>
                AG Organizing &amp; Cleaning Services LLC
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body style={{ backgroundColor: 'whiteSmoke' }}>
              <Nav className="justify-content-end flex-grow-1 pe-3 Navbar-Styling">
                <Nav.Link href="/home">
                  <h4 className="link-color">Home</h4>
                </Nav.Link>
                <Nav.Link href="/about">
                  <h4 className="link-color">About</h4>
                </Nav.Link>
                <Nav.Link href="/gallery">
                  <h4 className="link-color">Gallery</h4>
                </Nav.Link>
                <Nav.Link href="/services">
                  <h4 className="link-color">Services</h4>
                </Nav.Link>
                <Nav.Link href="/reviews">
                  <h4 className="link-color">Reviews</h4>
                </Nav.Link>
                <Nav.Link href="/contact">
                  <h4 className="link-color">Contact</h4>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <Col xs={12} sm={12} className="icon-text icon-social">
            <SocialMedia />
          </Col>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
