import './NavLink.css';
import { NavLink } from 'react-bootstrap';

const NavbarLink = (props) => {
  return(
  <NavLink className='styling' href={props.href}>{props.text}</NavLink>
)};

export default NavbarLink;
