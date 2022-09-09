import './NavLink.css';
import { NavLink } from 'react-bootstrap';

const NavbarLink = (props) => {
  return <NavbarLink href={props.href}>{props.text}</NavbarLink>;
};

export default NavbarLink;
