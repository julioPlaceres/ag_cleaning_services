import { Container, Col, Row } from "react-bootstrap";
import EmailIcon from "../Link-Icons/Email";
import PhoneIcon from "../Link-Icons/Phone";
import Facebook from "../Link-Icons/Facebook";
import Twitter from "../Link-Icons/Twitter";
import Instagram from "../Link-Icons/Instagram";
import Linkedin from "../Link-Icons/Linkedin";
import Youtube from "../Link-Icons/Youtube";
import "./TopNavBar.css";

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

        <Col xs={3} className="twitter icon">
          <Twitter className={"size: 42px"} />
        </Col>

        <Col xs={2} className="instagram icon">
          <Instagram />
        </Col>

        <Col xs={2} md={1} className="linkedin icon">
          <Linkedin />
        </Col>

        <Col xs={2} md={1} className="youtube icon">
          <Youtube />
        </Col>
      </Row>
    </Container>
  );
};

export default TopNavBar;
