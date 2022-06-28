import Phone from "../components/Link-Icons/Phone";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Pages.css";

function About() {
  return (
    <>
      <Container fluid style={{ background: "lightblue" }}>
        <h1 style={{ textAlign: "center", border: "10px solid red" }}>
          About AG Organizing and Cleaning Services
        </h1>

        <Row className="mt-4 container">
          <Col className="mt-4" style={{ textAlign: "center" }}>
            <p>
              Family owned and operated, AG Organizing and Cleaning Services was
              founded in 2022 with the mission of providing excellent cleaning
              services in the Syracuse, New York area. We offer service
              packages, including deep cleaning, regular cleaning, moving day
              cleaning, parties/events, closet organization and more. You can
              find a complete list of everything we offer, including special
              discounts on our services page.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
