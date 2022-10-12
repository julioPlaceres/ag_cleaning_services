import './Link-Icons.css';
import { MdEmail } from 'react-icons/md';

const Email = () => {
  return (
    <a href="mailto:ariadnagarcia522@outlook.com" className="link-icons">
      <MdEmail />
      Email us!
    </a>
  );
};

export default Email;
