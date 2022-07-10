import "./Pages.css";
import Locations from "../components/Locations/Locations";
import AppointmentCall from "../components/Appoinment/Appoinment-Call";
import AppointmentOnline from "../components/Appoinment/Appoinment-Online";

function Contact() {
  return (
    <>
      <AppointmentCall />
      <AppointmentOnline />
      <Locations />
    </>
  );
}

export default Contact;
