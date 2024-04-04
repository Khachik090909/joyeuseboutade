/*eslint-disable*/

import ChristmasFather from "../../assets/papanono.svg";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-container">
      <Link className="logo-home-navbar" to="/">
        <img
          className="img-home-navbar"
          src={ChristmasFather}
          alt="christmas-father-logo"
        />
      </Link>
    </nav>
  );
}
export default Navbar;
