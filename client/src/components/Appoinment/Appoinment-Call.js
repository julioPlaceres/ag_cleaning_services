import "./Appointment.css";
import Phone from "../Link-Icons/Phone";
import { Container, Row, Col } from "react-bootstrap";

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
