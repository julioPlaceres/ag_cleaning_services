import Phone from "../Link-Icons/Phone";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Appointment.css";

function AppoinmentCall() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <h6>We are just one call away</h6>
            <Phone />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AppoinmentCall;
