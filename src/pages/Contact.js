import Locations from "../components/Locations/Locations";
import AppointmentCall from "../components/Appoinment/Appoinment-Call";
import AppointmentOnline from "../components/Appoinment/Appoinment-Online";
import "./Pages.css";

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
