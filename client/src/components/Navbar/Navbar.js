import { Navbar, Nav } from "react-bootstrap";

// To what are those classes link to?
function Navigation() {
  return (
    <>
      <Navbar expand="lg" className="animate-nav">
        <Navbar.Brand href="/home">
          {/* Show Logo on Navbar only if not on Home Page */}
          {/* <img src={Logo} width="100" height="70" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="styling" href="/home">
              Home
            </Nav.Link>
            <Nav.Link className="styling" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="styling" href="/services">
              Services
            </Nav.Link>
            <Nav.Link className="styling" href="/reviews">
              Reviews
            </Nav.Link>
            <Nav.Link className="styling" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
