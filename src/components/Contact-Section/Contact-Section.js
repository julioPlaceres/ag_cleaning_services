import "./Contact-Section.css";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const ContactSection = () => {
  return (
    <Container fluid>
      <Row className="sepration-lines">
        <hr style={{ width: "85%" }} />
      </Row>

      <Row className="titles container">
        <h6>AG Organizing &amp; Cleaning Services LLC</h6>
      </Row>

      <Row className="titles container">
        <p>Hours of Operation</p>
      </Row>

      <Row className="sepration-lines">
        <hr style={{ width: "50%", color: "green", height: "2px" }} />
      </Row>

      <Row className="container">
        <Table borderless>
          <tr>
            <td>Sunday</td>
            <td>Closed</td>
          </tr>
          <tr>
            <td>Monday</td>
            <td>9:00 AM - 5:00 PM</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>9:00 AM - 5:00 PM</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>9:00 AM - 5:00 PM</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>9:30 AM - 8:00 PM</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>9:30 AM - 8:00 PM</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>10:00 AM - 6:00 PM</td>
          </tr>
        </Table>
      </Row>
    </Container>
  );
};

export default ContactSection;
