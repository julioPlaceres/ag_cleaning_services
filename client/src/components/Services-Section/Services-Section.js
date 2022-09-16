import './Services-Section.css';
import CardServices from '../Card/Card-Services';
import painting01 from '../images/Cleaning01.jpg';
import painting02 from '../images/Cleaning02.jpg';
import painting03 from '../images/Cleaning03.jpg';
import { Container, Row, Col } from 'react-bootstrap';

const ServicesSection = () => {
  return (
    <Container fluid>
      <Row className="row-md" xs={12}>
        <h6 className="mb-5 header-styling mt-5">
          What's better than the fresh scent <br />
          of a clean house?
        </h6>
      </Row>

      <Row>
        <Col sm={12} md={6} lg={4}>
          <CardServices
            title="Residential Cleaning"
            text="Feeling tired from a long day at work? Having visitors but you're too busy to prepare everything? Let us do the cleaning. Not only 
      will you be able to focus on more important things, but your house will be cleaned with the utmost care and professionalism.
       Satisfaction guaranteed."
            infoBtnText="See Services"
            warningBtnText="See Gallery"
            src={painting01}
          />
        </Col>

        <Col sm={12} md={6} lg={4}>
          <CardServices
            title="Office &amp; workspace cleaning"
            text="Need help cleaning your business space? Don't let the dust and disorganization distract you from achieving your goals and your 
      company's goals. Call us, with affordable places we will help you to have a workplace you will love."
            infoBtnText="See Services"
            warningBtnText="See Gallery"
            src={painting02}
          />
        </Col>

        <Col sm={12} md={12} lg={4}>
          <CardServices
            title="General housekeeping"
            text="Deep Clean, organizing closets, attics, garages and basements. Interior or exterior window cleaning. Wash, dry and fold laundry.
      Deep cleaning of ovens, refrigerators and microwaves. You name it and we will do it. See our services section for more information."
            infoBtnText="See Services"
            warningBtnText="See Gallery"
            src={painting03}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ServicesSection;
