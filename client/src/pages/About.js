import './Pages.css';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <>
      <Container fluid style={{ background: 'white', padding: '4%' }}>
        <h1
          className="mt-3"
          style={{
            textAlign: 'center',
            color: '#54BAB9',
            fontSize: '50px',
            fontWeight: 'bold',
          }}
        >
          About AG Organizing and Cleaning Services
        </h1>
      </Container>
      {/* Remove green borders to make paragraph look clean */}
      <Container className="mt-5" fluid>
        <Row>
          <Col>
            <p
              // I changed the font size, also I justify the text for a better look
              // Also I used the typography that combines the header and paragraph in the better looking way for the audience, and I used line height to separate text
              className="mt-3"
              style={{
                textAlign: 'justify',
                fontSize: '20px',
                maxWidth: '70%',
                marginBottom: '200px',
                paddingLeft: '655px',
                lineHeight: '250%',
              }}
            >
              Family owned and operated, AG Organizing and Cleaning Services was
              founded in 2022 with the mission of providing excellent cleaning
              services in the Syracuse, New York area. We offer service
              packages, including deep cleaning, regular cleaning, moving day
              cleaning, after parties/events, closet organization and more. You
              can find a complete list of everything we offer, including special
              discounts on our services page.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default About;
