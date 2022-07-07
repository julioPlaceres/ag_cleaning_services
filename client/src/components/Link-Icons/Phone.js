import "./Link-Icons.css";
import { AiFillPhone } from "react-icons/ai";

const Phone = () => {
  return (
    <a href="tel:+1 (315) 380-6543" className="gap-3 link-icons-altern">
      <AiFillPhone />
      <small className="size">+1 (315) 380-6543</small>
    </a>
  );
};

export default Phone;
