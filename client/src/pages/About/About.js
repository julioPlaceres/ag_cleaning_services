import './About.css';
import { Container } from 'react-bootstrap';

function About() {
  return (
    <>
      <Container fluid className="mt-5 about-container">
        <h1 className="mt-3 about-title">
          {' '}
          About AG Organizing and Cleaning Services{' '}
        </h1>

        <p className="mt-3 about-p">
          Family owned and operated, AG Organizing and Cleaning Services was
          founded in 2022 with the mission of providing excellent cleaning
          services in the Syracuse, New York area. We offer service packages,
          including deep cleaning, regular cleaning, moving day cleaning, after
          parties/events, closet organization and more. You can find a complete
          list of everything we offer, including special discounts on our
          services page.
        </p>
      </Container>
    </>
  );
}
export default About;
