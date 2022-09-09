import './Contact-Section.css';
import { Container } from 'react-bootstrap';
import OperationHours from '../Operation-Hours/OperationHours';

const ContactSection = () => {
  return (
    <Container
      fluid
      className="mt-5 text-center"
      style={{
        paddingTop: '150px',
        backgroundColor: '#54BAB9',
        fontWeight: 'bold',
      }}
    >
      <p style={{ fontSize: '50px', color: '#F9F9F9' }}>
        AG Organizing &amp; Cleaning Services LLC
      </p>
      <OperationHours />
    </Container>
  );
};

export default ContactSection;
