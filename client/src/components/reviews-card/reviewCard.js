import './reviewCard.css';
import { Card, Container } from 'react-bootstrap';

const ReviewCard = (props) => {
  return (
    <Container fluid className="mb-4">
      <Card className="card-review">
        <Card.Header className={props.headerClassName}>
          {props.review_name}
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p> {props.review_text} </p>
            <footer className="blockquote-footer">{props.review_date}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ReviewCard;
