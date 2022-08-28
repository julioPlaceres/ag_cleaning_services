import ReviewCard from '../reviews-card/reviewCard';
import React, { useState, useEffect } from 'react';

// Convert the date to the local date format
const setDate = (date) => {
  return new Date(date).toLocaleDateString('en-gb');
};

const AllReviews = () => {
  const [reviews = [], setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = () => {
    fetch('api/reviews')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setReviews(data);
      });
  };

  return (
    <>
      {reviews.map((review) => {
        return (
          <ReviewCard
            key={review._id}
            review_name={review.review_name}
            review_text={review.review_text}
            review_date={setDate(review.review_date)}
          />
        );
      })}
    </>
  );
};

export default AllReviews;
