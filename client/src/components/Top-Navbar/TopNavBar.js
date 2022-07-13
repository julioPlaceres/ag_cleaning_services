import './TopNavBar.css';
import EmailIcon from '../Link-Icons/Email';
import PhoneIcon from '../Link-Icons/Phone';
import Facebook from '../Link-Icons/Facebook';
import Instagram from '../Link-Icons/Instagram';
import { Container, Col, Row } from 'react-bootstrap';

const TopNavBar = () => {
  return (
    <Container className="background" fluid>
      <Row className="icon-row">
        <Col xs={6} md={3} lg={2} className="phone">
          <PhoneIcon />
        </Col>

        <Col xs={6} md={5} lg={3} className="email">
          <EmailIcon />
        </Col>

        <Col xs={3} className="facebook icon">
          <Facebook />
        </Col>

        <Col xs={2} className="instagram icon">
          <Instagram />
        </Col>
      </Row>
    </Container>
  );
};

export default TopNavBar;
