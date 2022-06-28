import Locations from "../components/Locations/Locations";
import AppointmentCall from "../components/Appoinment/Appoinment-Call";
import AppointmentOnline from "../components/Appoinment/Appoinment-Online";
import "./Pages.css";

function Contact() {
  return (
    <>
      <AppointmentCall />
        <Row className="mt-4" style={{ textAlign: "center" }}>
          <Col>
            <p>Book an appointment with us online</p>
            <Button variant="success">Book now</Button>
          </Col>
        </Row>
      <AppointmentOnline />
      <Locations />
    </>
  );
}

export default Contact;
