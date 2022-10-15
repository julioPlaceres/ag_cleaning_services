import './Reviews.css';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Container, Row } from 'react-bootstrap';
import ReviewCard from '../reviews-card/reviewCard';

const Reviews = () => {
  const [renderReview, setRenderedReviews] = useState([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '80%',
  });

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
      <h5 className="mt-5 mb-3 header-reviews-home">
        What others say about us
      </h5>
      {renderReview.map((review, index) => {
        const even = index % 2 === 0;
        return (
          <div key={review._id}>
            {even ? (
              <Container
                ref={ref}
                fluid
                className={`container-reviews-main1 ${
                  inView ? ' cardAnimation1' : ' none'
                }`}
              >
                <Row className="row-reviews-cards">
                  <ReviewCard
                    review_name={review.review_name}
                    review_text={review.review_text}
                    review_date={setDate(review.review_date)}
                    headerClassName="card-review-header1"
                  />
                </Row>
              </Container>
            ) : (
              <Container
                ref={ref}
                fluid
                className={`container-reviews-main2 ${
                  inView ? ' cardAnimation2' : ' none'
                }`}
              >
                <Row className="row-reviews-cards">
                  <ReviewCard
                    review_name={review.review_name}
                    review_text={review.review_text}
                    review_date={setDate(review.review_date)}
                    headerClassName="card-review-header2"
                  />
                </Row>
              </Container>
            )}
          </div>
        );
      })}
    </>
  );
};
export default Reviews;
