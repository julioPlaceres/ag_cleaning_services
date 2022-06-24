import Phone from "../components/Link-Icons/Phone";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Pages.css";

function Contact() {
  return (
    <>
      <Container className="mt-4 container">
        <Row className="mb-4">
          <Col style={{ textAlign: "center" }}>
            <h6>We are just one call away</h6>
            <Phone />
          </Col>
        </Row>

        <Row className="mt-4" style={{ textAlign: "center" }}>
          <Col>
            <p>Book an appoinment with us online</p>
            <Button variant="success">Book now</Button>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <h6>We provide services to the following areas</h6>
          </Col>
        </Row>

        <Row className="locations">
          <Col>
            <ul>
              <li>Liverpool, NY</li>
              <li>Cazenovia, NY</li>
              <li>Central Square, NY</li>
              <li>Camillus, NY</li>
              <li>Brewerton, NY</li>
              <li>Fairmount, NY</li>
              <li>Manlius, NY</li>
              <li>Cicero, NY</li>
              <li>Clay, NY</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>Syracuse, NY</li>
              <li>Fayetteville, NY</li>
              <li>Baldwinsville, NY</li>
              <li>North Syracuse, NY</li>
              <li>Bridgeport, NY</li>
              <li>Kirkville, NY</li>
              <li>Chittenango, NY</li>
              <li>Lakeport, NY</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
