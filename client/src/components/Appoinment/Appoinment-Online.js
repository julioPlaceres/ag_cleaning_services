import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Appointment.css";

function Appoinment() {
  function bookAppointment() {
    window.open("https://www.agappoiments.com/", "_blank");
  }

  return (
    <>
      <Container fluid>
        <Row className="mt-4" style={{ textAlign: "center" }}>
          <Col>
            <p>Book an appoinment with us online</p>
            <Button variant="success" onClick={bookAppointment}>
              Book now
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Appoinment;
