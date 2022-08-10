import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <ul className="nav">
    <NavLink to="/" className="link">Home</NavLink>
    <NavLink to="/calculator" className="link link-b">Calculator</NavLink>
    <NavLink to="/quotes" className="link">Quotes</NavLink>
  </ul>
);
export default Navigation;
