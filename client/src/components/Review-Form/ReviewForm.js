import './ReviewForm.css';
import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Alerts from '../Alerts/Alert';
import ReviewCard from '../reviews-card/reviewCard'

const ReviewForm = () => {
  const [username, setUsername] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [displayMessage, setDisplayMessage] = useState(false);
  const [renderReview, setRenderedReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const setDate = (date) => {
    return new Date(date).toLocaleDateString('en-gb');
  };
  
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type set the state of either username or reviewText
    if (inputType === 'username') {
      setUsername(inputValue);
    } else if (inputType === 'reviewText') {
      setReviewText(inputValue);
    }

    setDisplayMessage(false);
  };

  const handleFormSubmit = (e) => {
    // Prevent the default behavious of the form submit (which is to refresh the page)
    e.preventDefault();
    // Check values are not empty
    if (username.trim() === '' || reviewText.trim() === '') {
      setAlertMessage('Please fill all fields');
      setDisplayMessage(true);
      return;
    }

    // Post Review
    postReviews();
    fetchReviews()

    // If no error is found, clear input after succesful registration
    setUsername('');
    setReviewText('');
    setAlertMessage('Hey got your ass saved');
    setDisplayMessage(true);
  };
  const fetchReviews = () => {
    fetch('api/reviews')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRenderedReviews(data);
      });
  };
  const postReviews = () => {
    const reviewOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        review_name: username,
        review_text: reviewText,
        review_date: new Date(),
      }),
    };
    fetch('api/reviews', reviewOptions)
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      })
      .finally();
    // This needs work, we need to find a way to do it without
    // refreshing the page.
    // window.location.reload();
  };

  return (
    <Container fluid>
      <Alerts text={alertMessage} show={displayMessage} />
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
          <Form.Text className="text-muted" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Review</Form.Label>
          <Form.Control
            as={'textarea'}
            rows={3}
            name="reviewText"
            value={reviewText}
            onChange={handleInputChange}
            placeholder="start typing your review"
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleFormSubmit}>
          Submit
        </Button>
      </Form>

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
    </Container>
  );
};

export default ReviewForm;
