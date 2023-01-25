import './Services-Section.css';
import CardServices from '../Card/Card-Services';
import painting01 from '../images/Cleaning01.webp';
import painting02 from '../images/Cleaning02.webp';
import painting03 from '../images/Cleaning03.webp';
import { Container, Row, Col } from 'react-bootstrap';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const ServicesSection = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={6} xl={4}>
          <LazyLoadComponent>
          <CardServices
            title="Residential Cleaning"
            text="Feeling tired from a long day at work? Having visitors but you're too busy to prepare everything? Let us do the cleaning. Not only 
      will you be able to focus on more important things, but your house will be cleaned with the utmost care and professionalism.
       Satisfaction guaranteed."
            infoBtnText="See Services"
            warningBtnText="See Gallery"
            src={painting01}
          />
          </LazyLoadComponent>
        </Col>

        <Col sm={12} md={6} xl={4}>
        <LazyLoadComponent>
          <CardServices
            title="Office &amp; workspace cleaning"
            text="Need help cleaning your business space? Don't let the dust and disorganization distract you from achieving your goals and your 
      company's goals. Call us, with affordable places we will help you to have a workplace you will love."
            infoBtnText="See Services"
            warningBtnText="See Gallery"
            src={painting02}
          />
          </LazyLoadComponent>
        </Col>

        <Col sm={12} md={12} xl={4}>
          <LazyLoadComponent>
          <CardServices
            title="General housekeeping"
            text="Deep Clean, organizing closets, attics, garages and basements. Interior or exterior window cleaning. Wash, dry and fold laundry.
      Deep cleaning of ovens, refrigerators and microwaves. You name it and we will do it. See our services section for more information."
            infoBtnText="See Services"
            warningBtnText="See Gallery"
            src={painting03}
          />
          </LazyLoadComponent>
        </Col>
      </Row>
    </Container>
  );
};

export default ServicesSection;
