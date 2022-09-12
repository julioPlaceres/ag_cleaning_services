import './Card-Services.css';
import { Card, Button, Container } from 'react-bootstrap';

const CardServices = (props) => {
  return (
    <Container fluid>
      <Card
        border="light"
        style={{
          maxWidth: '20rem',
          borderRadius: '10px',
          height: '500px',
        }}
        className="mx-auto"
      >
        <Card.Img
          variant="top"
          src={props.src}
          alt="card image"
          // Add pading of 0px to adjust the size of the image to the cards
          style={{ maxWidth: '400px', padding: '0px' }}
        />
        <Card.Body>
          <Card.Title
            // Add adding turquoise color to the title which gives nice looking touch to the cards
            style={{ color: 'turquoise' }}
          >
            {' '}
            {props.title}
          </Card.Title>
          <Card.Text style={{ color: 'black' }}>
            {' '}
            {props.text}
          </Card.Text>
          <Button className="button" variant="info">
            {props.btnText}
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CardServices;
