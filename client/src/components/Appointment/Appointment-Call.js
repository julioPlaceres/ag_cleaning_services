import "./Appointment.css";
import Phone from "../Link-Icons/Phone";
import { Container, Row, Col } from "react-bootstrap";

function AppointmentCall() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col id="app-call-col">
            <h6 id="app-call-title">We are just one call away</h6>
            <Phone />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AppointmentCall;
