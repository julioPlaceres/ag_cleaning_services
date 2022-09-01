import './Navbar.css';
import EmailIcon from '../Link-Icons/Email';
import PhoneIcon from '../Link-Icons/Phone';
import Facebook from '../Link-Icons/Facebook';
import Instagram from '../Link-Icons/Instagram';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

function Navigation() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Col xs={6} sm={6} md={2} className="phone">
            <PhoneIcon />
          </Col>

          <Col xs={6} sm={6} md={2} className="email">
            <EmailIcon />
          </Col>

          <Row xs={6}>
            <Col>
              <Facebook />
            </Col>
            <Col>
              <Instagram />
            </Col>
          </Row>

          <Col xs="auto">
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={handleClick}
              children={click ? <AiOutlineClose /> : <GiHamburgerMenu />}
            />
          </Col>

          <Col lg={6}>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/gallery">Gallery</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/reviews">Reviews</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
