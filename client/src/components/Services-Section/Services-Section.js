import "./Services-Section.css";
import CardServices from "../Card/Card-Services";
import painting01 from "../images/Cleaning01.jpg";
import painting02 from "../images/Cleaning02.jpg";
import painting03 from "../images/Cleaning03.jpg";
import { Container, Row } from "react-bootstrap";

const ServicesSection = () => {
  function btnAction() {
    console.log("Button Click");
  }

  return (
    <>
      <h6 className="col-sm-12 col-md-12 col-lg-12 mb-5 mt-5 intro">
        What better than the fresh scent of a clean house!
      </h6>

      <CardServices
        title="Residential Cleaning"
        text="Feeling tired from a long day at work? Having visit and too busy preparing everything? let us do the cleaning. Not only 
      will you be able to focus on more important things, but your house will be cleaned with the utmost care and profesionalism.
       Satisfation garanteed."
        btnText="See more"
        src={painting01}
      />

      <CardServices
        title="Office &amp; workspace cleaning"
        text="Need help cleaning your bussiness? Don't let the dust and disorganization distract you from achiving your goals and the 
      company goals. Call us, with affordable places we will help you to have a workplace you will love."
        btnText="See more"
        src={painting02}
      />

      <CardServices
        title="General housekeeping"
        text="Deep Clean, Organizing closets, attics, garages and basement. Interior or exterior window cleaning. Wash, Dry and fold lundry.
      Deep cleaning of Ovens, Refrigerator and microwaves. You name it and we will do it. See our services section for more information."
        btnText="See more"
        src={painting03}
      />
    </>
  );
};

export default ServicesSection;
