import "./Contact-Section.css";
import OperationHours from "../Operation-Hours/OperationHours";
import Container from "react-bootstrap/Container";

const ContactSection = () => {
  return (
    <Container fluid className="mt-5 text-center">
      <p>AG Organizing &amp; Cleaning Services LLC</p>
      <OperationHours />
    </Container>
  );
};

export default ContactSection;
