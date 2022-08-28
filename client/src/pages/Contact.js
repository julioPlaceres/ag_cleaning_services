import "./Pages.css";
import Locations from "../components/Locations/Locations";
import AppointmentCall from "../components/Appointment/Appointment-Call";
import AppointmentOnline from "../components/Appointment/Appointment-Online";

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
