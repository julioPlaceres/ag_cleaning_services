import { Container } from "react-bootstrap";

function Services() {
    return (
      <>


      <h2 style={{margin: "5%", background: "#1BBC9B", color: "white", padding: "5%" }}>Let us help make your home like new again.</h2>
      <h4 style={{margin: "2%"}}>We offer discount packages for seniors and single mothers as well as free estimates on our one-time and/or recurring cleaning either weekly, bi-weekly or monthly</h4>
      
      <h4 style={{margin: "5%"}}>Here's a comprehensive list of our services:</h4>
      <p>
 
        <Container className="services-list" style={{border: "3px solid #1BBC9B", background: "lightgray", fontSize: "24px", font: "Calibri bold", margin: "0%", padding: "5%" }}>
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
        <li>Closet, attic, garage, basement and cabinet cleaning/organization</li>
        <li>Interior/exterior window cleaning</li>
        <li>Inside oven, refrigerator, dishwasher, microwave, sub-zero</li>
        <li>Baseboards</li>
        <li>Vacuuming</li>
        <li>Dusting, wipe-down of surfaces</li>
        </ul>

   

        </Container>
      </p>
      </>
    );
  }
  
  export default Services;
  