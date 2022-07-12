import { Container, Row } from "react-bootstrap";
import AllReviews from "../components/Reviews/AllReviews";
import ReviewForm from "../components/Review-Form/ReviewForm";

const Reviews = () => {
  return (
    <Container fluid>
      <Row className="mb-5">
        <p className="text-header">Share your experience</p>
        <ReviewForm />
      </Row>

      <Row>
        <p className="text-header">See what our customers say</p>
        <AllReviews />
      </Row>
    </Container>
  );
};

export default Reviews;
