import './Reviews.css';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ReviewCard from '../reviews-card/reviewCard';

const Reviews = () => {
  const [renderReview, setRenderedReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const setDate = (date) => {
    return new Date(date).toLocaleDateString('en-gb');
  };

  const fetchReviews = () => {
    fetch('api/reviews/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRenderedReviews(data);
      });
  };

  return (
    <Container fluid className="container-reviews-main">
      <Row className="row-reviews-cards">
        <h5 className="mt-5 mb-3">What others say about us</h5>
        {renderReview.map((review) => {
          return (
            <ReviewCard
              key={review._id}
              review_name={review.review_name}
              review_text={review.review_text}
              review_date={setDate(review.review_date)}
            />
          );
        })}
      </Row>
    </Container>
  );
};
export default Reviews;
