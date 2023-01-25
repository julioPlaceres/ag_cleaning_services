import './Hero-Section.css';
import Img1 from '../images/heroImg.webp';
import Particle from '../Particles/Particle';
import { Container } from 'react-bootstrap';
import MyImage from '../images/lazyLoad';
import 'react-lazy-load-image-component/src/effects/blur.css';

const HeroSection = () => {
  return (
    <Container fluid className="container-hero-main">
      <MyImage src={Img1} alt="Company Logo" className="image-hero-logo" effect="blur" height="auto" width="auto"/>

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
