import ReviewCard from "../reviews-card/reviewCard";
import React, { useState, useEffect } from "react";
import axios from "axios";

const setDate = (date) => {
  return new Date(date).toLocaleDateString("en-gb");
};

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = () => {
    axios
      .get("api/reviews")
      .then((res) => {
        console.log(res.data);
        setReviews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {reviews.map((review) => {
        return (
          <ReviewCard
            key={review.review_id}
            name={review.name}
            review_text={review.review_text}
            review_date={setDate(review.review_date)}
          />
        );
      })}
    </>
  );
};

export default AllReviews;
