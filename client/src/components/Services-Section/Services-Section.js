import "./Services-Section.css";
import CardServices from "../Card/Card-Services";
import painting01 from "../images/Cleaning01.jpg";
import painting02 from "../images/Cleaning02.jpg";
import painting03 from "../images/Cleaning03.jpg";

const ServicesSection = () => {
  return (
    <>
      <h6 className="  mb-5 mt-5">
        What's better than the fresh scent of a clean house?
      </h6>

      <CardServices
        title="Residential Cleaning"
        text="Feeling tired from a long day at work? Having guests and are too busy preparing everything? Let us do the cleaning. Not only 
      will you be able to focus on more important things, but your house will be cleaned with the utmost care and professionalism.
       Satisfaction guaranteed."
        btnText="See more"
        src={painting01}
      />

      <CardServices
        title="Office &amp; Workspace Cleaning"
        text="Need help cleaning your office or place of business? Don't let the dust and disorganization distract you from achieving your professional goals. With affordable places, we will help you create a workplace you will love."
        btnText="See more"
        src={painting02}
      />

      <CardServices
        title="General Housekeeping"
        text="Deep cleaning, organizing closets, attics, garages and basements. Interior and/or exterior window cleaning. Wash, Dry and fold laundry.
      Deep cleaning of ovens, refrigerators and microwaves. You name it and we will do it. See our services section for more information."
        btnText="See more"
        src={painting03}
      />
    </>
  );
};

export default ServicesSection;
