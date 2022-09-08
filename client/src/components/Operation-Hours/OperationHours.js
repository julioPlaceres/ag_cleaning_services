import './OperationHours.css';
import { Container, Row, Table } from 'react-bootstrap';

const OperationHours = () => {
  return (
    <Container fluid>
      <Row>
        {/* I also increase font size and I give the match color for the header and paragraph */}
        <p style={{ fontSize: '2rem', color: '#F9F9F9' }}>Hours of Operation</p>
      </Row>
      {/* I increase the font size of the Operation hours */}
      <Row style={{ fontSize: '1.3rem', paddingTop: '50px' }}>
        {/* I apply width to adjust table the right way, and the most important the margin 0 to position the table in the middle */}
        <Table
          style={{
            width: '50%',
            borderColor: '#F9F9F9',
            justifyContent: 'center',
            margin: 'auto',
            color: '#F9F9F9',
          }}
        >
          <tbody>
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
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default OperationHours;
