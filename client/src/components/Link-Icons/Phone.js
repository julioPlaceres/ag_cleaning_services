import './Link-Icons.css';
import { AiFillPhone } from 'react-icons/ai';

const Phone = () => {
  return (
    <a href="tel:+1 (315) 380-6543" className="link-icons">
      <AiFillPhone />
      Give us a call
    </a>
  );
};

export default Phone;
