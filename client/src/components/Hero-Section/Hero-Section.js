import './Hero-Section.css';
import Img1 from '../images/heroImg.jpg';
import { Container, Image } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <Container fluid className="main-img">
      <Image fluid src={Img1} alt="First slide" />
    </Container>
  );
};

export default HeroSection;
