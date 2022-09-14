import "./Locations.css";
import { Container, Row, Col } from "react-bootstrap";

function Locations() {
  return (
    <>
      <Container fluid className="mt-4">
        <Row className="locations">
          <p id="area-header" className="locations">Area we services</p>
          <Col className="col-locations">
            <ul>
              <li>Liverpool, NY</li>
              <li>Cazenovia, NY</li>
              <li>Central Square, NY</li>
              <li>Camillus, NY</li>
              <li>Brewerton, NY</li>
              <li>Fairmount, NY</li>
              <li>Manlius, NY</li>
              <li>Cicero, NY</li>
              <li>Clay, NY</li>
            </ul>
            <ul>
              <li>Syracuse, NY</li>
              <li>Fayetteville, NY</li>
              <li>Baldwinsville, NY</li>
              <li>North Syracuse, NY</li>
              <li>Bridgeport, NY</li>
              <li>Kirkville, NY</li>
              <li>Chittenango, NY</li>
              <li>Lakeport, NY</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Locations;
