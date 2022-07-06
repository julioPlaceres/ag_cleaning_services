import "./Contact-Section.css";
import OperationHours from "../Operation-Hours/OperationHours";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const ContactSection = () => {
  return (
    <Container fluid className="mt-5 text-center">
      <h6>AG Organizing &amp; Cleaning Services LLC</h6>
      <OperationHours />
    </Container>
  );
};

export default ContactSection;
