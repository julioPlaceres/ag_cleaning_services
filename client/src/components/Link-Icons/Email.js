import './Link-Icons.css';
import { MdEmail } from 'react-icons/md';

const Email = () => {
  return (
    <a href="mailto:agarcia@gmail.com" className="link-icons">
      <MdEmail />
      <small>agarcia@gmail.com</small>
    </a>
  );
};

export default Email;
