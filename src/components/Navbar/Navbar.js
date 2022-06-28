import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../images/Logo.jpg";

function Navigation() {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/home">
            {/* Show Logo on Navbar only if not on Home Page */}
            {/* <img src={Logo} width="100" height="70" /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/reviews">Reviews</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
