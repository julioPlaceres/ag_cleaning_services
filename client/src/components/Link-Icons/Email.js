import './Link-Icons.css';
import { MdEmail } from 'react-icons/md';

const Email = () => {
  return (
    <a href="mailto:agarcia@gmail.com" className="link-icons">
      <MdEmail />
      agarcia@gmail.com
    </a>
  );
};

export default Email;
