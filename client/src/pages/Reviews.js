import { Container, Row } from 'react-bootstrap';
import ReviewForm from '../components/Review-Form/ReviewForm';

const Reviews = () => {
  return (
    <Container fluid>
      <Row className="mb-5">
        <p className="text-header">Share your experience</p>
        <ReviewForm />
      </Row>
    </Container>
  );
};

export default Reviews;
