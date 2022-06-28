import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Appointment.css";

function Appoinment() {
  return (
    <>
      <Container className="mt-4 container">
        <Row className="mt-4" style={{ textAlign: "center" }}>
          <Col>
            <p>Book an appoinment with us online</p>
            <Button variant="success">Book now</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Appoinment;
