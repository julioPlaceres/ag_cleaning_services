import './Card-Services.css';
import { Card, Button, Container, Row } from 'react-bootstrap';

const CardServices = (props) => {
  return (
    <Container fluid>
      <Card
        border="light"
        style={{
          maxWidth: '20rem',
          borderRadius: '10px',
          height: 'auto',
          minHeight: '600px'
        }}
        className="mx-auto"
      >
        <Card.Img
          variant="top"
          src={props.src}
          alt="card image"
          style={{ maxWidth: '400px', padding: '0px' }}
        />
        <Card.Body className='flex-container card-body'>
          <Card.Title
            style={{ color: 'turquoise' }}
          >
            {' '}
            {props.title}
          </Card.Title>
          <Card.Text className='card-text' style={{ color: 'black' }}>
            {' '}
            {props.text}
          </Card.Text>
          <Row className='flex-container card-buttons'>

          <Button className='buttons' variant="info">
            {props.infoBtnText}
          </Button>

          
          <Button className='buttons' variant='warning'>
            {props.warningBtnText}
          </Button>
          
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CardServices;
