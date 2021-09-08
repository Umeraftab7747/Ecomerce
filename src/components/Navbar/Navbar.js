import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/lion.png";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Navbar() {
  return (
    <div className="navbarcontainer">
      {/* logo */}
      <div className="logocontainer">
        <img src={logo} alt="abc" />
        <Link to="/" className="navbarlogo">
          ECOM-SHOP
        </Link>
      </div>

      {/* middle Container */}
      <div className="middlecontainer">
        <ul>
          <li>
            <Link to="/" className="navbaricons">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Prodcuts" className="navbaricons">
              Products
            </Link>
          </li>
          <li>
            <Link to="/About" className="navbaricons">
              About
            </Link>
          </li>
        </ul>
      </div>

      {/* middle Container */}
      <div className="Endcontainer">
        <Link to="/" className="IconContainer">
          <ShoppingCartIcon color="#0003" fontSize="large" />
        </Link>
        <Link to="/" className="IconContainer">
          <AccountCircleIcon color="#0003" fontSize="large" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
