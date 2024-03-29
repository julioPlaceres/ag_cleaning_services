import './Hero-Section.css';
import Img1 from '../images/heroImg-small.webp';
import Particle from '../Particles/Particle';
import { Container, Image } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <Container fluid className="container-hero-main">
      <Image fluid src={Img1} alt="Company Logo" className="image-hero-logo" />

      <div className="particles-home-container">
        <h6 className="h6-hero-title">
          <Particle />
          What's better than the fresh scent <br />
          of a clean house?
        </h6>
      </div>
    </Container>
  );
};

export default HeroSection;
