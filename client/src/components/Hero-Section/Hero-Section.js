import "./Hero-Section.css";
import Img1 from "../images/heroImg.jpg";
import { Container, Image } from "react-bootstrap";

const HeroSection = () => {
  return (
    <Container fluid className="main-img">
      {/* Image it's only being use as a placeholder, the actual image is set on the background */}
      <Image fluid src={Img1} alt="First slide" />
    </Container>
  );
};

export default HeroSection;
