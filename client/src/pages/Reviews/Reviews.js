import './Reviews.css';
import { Container } from 'react-bootstrap';
import ReviewForm from '../../components/Review-Form/ReviewForm';

const Reviews = () => {
  return (
    <Container fluid className="container-review-main">
      <p className="p-review-header">Share your experience</p>
      <ReviewForm />
    </Container>
  );
};

export default Reviews;
