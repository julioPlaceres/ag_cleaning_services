import "./Link-Icons.css";
import { MdEmail } from "react-icons/md";

const Email = () => {
  return (
    <a href="mailto:agarcia@gmail.com" className="gap-3 link-icons-altern">
      <MdEmail />
      <small className="size">agarcia@gmail.com</small>
    </a>
  );
};

export default Email;
