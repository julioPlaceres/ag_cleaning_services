import './Card-Services.css';
import { Card, Button, Container, Row, React } from 'react-bootstrap';

const CardServices = (props) => {
  return (
    <Container fluid className="container-cardServices-main">
      <Card border="light" className="card-cardServices">
        <Card.Img
          className="img-cardServices"
          variant="top"
          alt="card image"
          src={props.src}
        />
        <Card.Body className="flex-container">
          <Card.Title className="title-cardServices-card">
            {' '}
            {props.title}
          </Card.Title>
          <Card.Text className="card-text"> {props.text}</Card.Text>

          <Row className="flex-container card-buttons">
            <Button className="buttons" variant="info" href="/services">
              {props.infoBtnText}
            </Button>
            <Button className="buttons" variant="warning" href="/gallery">
              {props.warningBtnText}
            </Button>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CardServices;
