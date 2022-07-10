import "./Contact-Section.css";
import { Container } from "react-bootstrap";
import OperationHours from "../Operation-Hours/OperationHours";

const ContactSection = () => {
  return (
    <Container fluid className="mt-5 text-center">
      <p>AG Organizing &amp; Cleaning Services LLC</p>
      <OperationHours />
    </Container>
  );
};

export default ContactSection;
