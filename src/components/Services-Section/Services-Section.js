import "./Services-Section.css";
import { Container } from "react-bootstrap";
import CardServices from "../Card/Card-Services";
import painting from "../images/profile picture.jpg";

const ServicesSection = () => {
  return (
    <Container className="d-flex justify-content-center">
      <h2 style={{color: "brown"}} className="col-sm-12 col-md-12 col-lg-12 mb-5 mt-5">The services we provide</h2>

      <CardServices title="Cabinet Painting"
      text="Top Tier provides excellent cabinet painting/repairing service. With high-quality paint and
      equipment, your cabinets will look new.  See our gallery for photos of our work."
      btnText="See more"
      src={painting}/>

    </Container>
  );
};

export default ServicesSection;
