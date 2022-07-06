import { Container } from "react-bootstrap";

function Services() {
  return (
    <>
      <h1>Services</h1>
      <h3 style={{ margin: "5%" }}>
        Here's a comprehensive list of what we offer:
      </h3>
      <p>
        <Container
          className="services-list"
          style={{
            border: "3px solid gray",
            background: "lightblue",
            fontSize: "24px",
            font: "Calibri bold",
            margin: "0%",
            padding: "5%",
          }}
        >
          <tbody>
            <tr>Standard cleaning</tr>
            <tr>Deep cleaning of rooms, including garages. </tr>
            <tr>Moving-related cleaning </tr>
            <tr>Office and workplace cleaning </tr>
            <tr>Vacation rental and Airbnb cleaning</tr>
            <tr>After construction cleaning</tr>
            <tr>Apartment cleaning</tr>
            <tr>Wash, dry and fold laundry</tr>

            <tr>Cleaning areas include:</tr>
            <tr>
              Closet, attic, garage, basement and cabinet cleaning/organization
            </tr>
            <tr>Interior window cleaning</tr>
            <tr>Inside oven, refrigerator, microwave, sub-zero</tr>
            <tr>Baseboards</tr>
          </tbody>
        </Container>
      </p>
    </>
  );
}

export default Services;
