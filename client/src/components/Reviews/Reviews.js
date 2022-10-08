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
    <>
      <h5 className="mt-5 mb-3 header-reviews-home">What others say about us</h5>
      {renderReview.map((review, index) => {
        const even = index % 2 === 0;
        return (
          <>
            {even ? (
              <Container fluid className="container-reviews-main1">
                <Row className="row-reviews-cards">
                  <ReviewCard
                    key={review._id}
                    review_name={review.review_name}
                    review_text={review.review_text}
                    review_date={setDate(review.review_date)}
                    headerClassName="card-review-header1"
                    cardClassName="card-review-container card-review-even"
                  />
                </Row>
              </Container>
            ) : (
              <Container fluid className="container-reviews-main2">
                <Row className="row-reviews-cards">
                  <ReviewCard
                    key={review._id}
                    review_name={review.review_name}
                    review_text={review.review_text}
                    review_date={setDate(review.review_date)}
                    headerClassName="card-review-header2"
                    cardClassName="card-review-container card-review-odd"
                  />
                </Row>
              </Container>
            )}
          </>
        );
      })}
    </>
  );
};
export default Reviews;
