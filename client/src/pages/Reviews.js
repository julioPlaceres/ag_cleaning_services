import ReviewForm from "../components/Review-Form/ReviewForm";
import { Container, Row } from "react-bootstrap";
import AllReviews from "../components/Reviews/AllReviews";

const Reviews = () => {
  return (
    <Container fluid>
      <Row className="mb-5">
        <p className="text-header">Share your experience</p>
        <ReviewForm />
      </Row>

      <Row>
        <p className="text-header">See what our customer's say</p>
        <AllReviews />
      </Row>
    </Container>
  );
};

export default Reviews;
