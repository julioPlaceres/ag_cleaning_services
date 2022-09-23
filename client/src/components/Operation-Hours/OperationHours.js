import './OperationHours.css';
import { Container, Row, Table } from 'react-bootstrap';

const OperationHours = () => {
  return (
    <Container fluid>
      <Row>
        {' '}
        <p id="p-operationHours">Hours of Operation</p>
      </Row>

      <Row className="row-operationHours-table">
        <Table borderless className="table-operationHours">
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
