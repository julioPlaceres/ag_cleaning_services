import "./Contact-Section.css";
import OperationHours from "../Operation-Hours/OperationHours";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const ContactSection = () => {
  return (
    <Container fluid style={{ background: "lightgray" }}>
      <Row>
        <h6 className="mt-3">AG Organizing &amp; Cleaning Services LLC</h6>
      </Row>

      <OperationHours />
    </Container>
  );
};

export default ContactSection;
