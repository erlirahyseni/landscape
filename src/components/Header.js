import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-section">
      <h1>wonderland . </h1>
      <div className="links">
        <NavLink to="/"  >ADVENTURE</NavLink>
        <NavLink to="/expore">EXPLORE</NavLink>
        <NavLink to="/restaurant">RESTAURANTS</NavLink>
        <li>CONTACT</li>
      </div>
      <li id="search">
        <FaSearch />
      </li>
    </div>
  );
};

export default Header;
