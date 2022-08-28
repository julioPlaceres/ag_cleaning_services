import "./Appointment.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function Appointment() {
  function bookAppointment() {
    window.open("https://www.agappoiments.com/", "_blank");
  }

  return (
    <>
      <Container fluid>
        <Row className="mt-4" style={{ textAlign: "center" }}>
          <Col>
            <p>Book an appointment with us online</p>
            <Button variant="success" onClick={bookAppointment}>
              Book now
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Appointment;
