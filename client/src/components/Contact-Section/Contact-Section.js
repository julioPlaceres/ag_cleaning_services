import './Contact-Section.css';
import { Container } from 'react-bootstrap';
import OperationHours from '../Operation-Hours/OperationHours';

const ContactSection = () => {
  return (
    <Container fluid className="mt-5 container-contact-main">
      
      <h6 id='h6-contact-title'> AG Organizing &amp; Cleaning Services LLC</h6>
      <OperationHours />
      
    </Container>
  );
};

export default ContactSection;
