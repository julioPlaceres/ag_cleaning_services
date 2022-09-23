import './Services.css';
import { Container } from 'react-bootstrap';

function Services() {
  return (
    <>
      <h2 className="h2-services-title text-services">
        Let us help make your home like new again.
      </h2>

      <h4 className="h4-services-subtitle text-services">
        Here's a comprehensive list of our services:
      </h4>

      <Container fluid className="container-services-main">
        <ul>
          <li>Standard full area cleaning</li>
          <li>Deep cleaning of rooms, including garages. </li>
          <li>Moving-related cleaning </li>
          <li>Office and workplace cleaning </li>
          <li>Vacation rental and Airbnb cleaning</li>
          <li>After construction cleaning</li>
          <li>Apartment cleaning</li>
          <li>Wash, dry and fold laundry</li>
          <li>Cleaning areas include:</li>
          <li>
            Closet, attic, garage, basement and cabinet cleaning/organization
          </li>
          <li>Interior/exterior window cleaning</li>
          <li>Inside oven, refrigerator, dishwasher, microwave, sub-zero</li>
          <li>Baseboards</li>
          <li>Vacuuming</li>
          <li>Dusting, wipe-down of surfaces</li>
        </ul>
      </Container>

      <p className="p-services-note">
        We also offer discount packages for seniors and single mothers as well
        as free estimates on our one-time and/or recurring cleaning either
        weekly, bi-weekly or monthly. Contact us to request an estimate and/or
        appointment!
      </p>
    </>
  );
}

export default Services;
