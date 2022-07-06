import { Container } from "react-bootstrap";

function Services() {
    return (
      <>


      <h2 style={{margin: "5%", background: "teal", color: "white", padding: "5%" }}>Let us help make your home like new again.</h2>
      <h4 style={{margin: "5%"}}>Here's a comprehensive list of what we offer:</h4>
      <p>
        
        <Container className="services-list" style={{border: "3px solid teal", background: "lightgray", fontSize: "24px", font: "Calibri bold", margin: "0%", padding: "5%" }}>
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
        <li>Interior window cleaning</li>
        <li>Inside oven, refrigerator, microwave, sub-zero</li>
        <li>Baseboards</li>
        </ul>

        </Container>
      </p>
      </>
    );
  }
  
  export default Services;
  