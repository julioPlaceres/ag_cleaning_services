import "./Hero-Section.css";
import Img1 from "../images/heroImg.jpg";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";

const HeroSection = () => {
  return (
    <Container fluid className="main-img">
      {/* Image it's only being use as a placeholder, the actual image is set on the background */}
      <Image fluid src={Img1} alt="First slide" />
    </Container>
  );
};

export default HeroSection;
