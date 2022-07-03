import "./ReviewForm.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

// Display Reviews by Customers
// Give option to leave Review
// When Clickling the button, display form to write review.
// On submit post review and hide form.

const ReviewForm = () => {
  return (
    <Container fluid>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter your name" />
          <Form.Text className="text-muted">
            Enter the name you want to be display on the review
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="forminfo">
          <Form.Label>Review</Form.Label>
          <Form.Control
            as={"textarea"}
            placeholder="start typing your review"
            rows={3}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ReviewForm;
