import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Pages.css";

function About() {
  return (
    <>
      <Container fluid style={{ background: "#1BBC9B", padding: "4%" }} >
        <h1 className="mt-3" style={{ textAlign: "center", color: "white" }}>
          About AG Organizing and Cleaning Services
        </h1>
        </Container>
      <Container className="mt-5" fluid style={{ background: "lightgray", marginLeft: "1%", marginRight:"1%", marginBottom: "5%", border: "3px solid #1BBC9B" }}>
        <Row>
          <Col>
            <p className="mt-3" style={{textAlign: "center" }}>
              Family owned and operated, AG Organizing and Cleaning Services was
              founded in 2022 with the mission of providing excellent cleaning
              services in the Syracuse, New York area. We offer service
              packages, including deep cleaning, regular cleaning, moving day
              cleaning, after parties/events, closet organization and more. You can
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
