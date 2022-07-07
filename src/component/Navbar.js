import React from "react";
import addtocart from "../img/addtocart.jpg";
import Nav from "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="divL1">
        <div className="flex">
          <p>Estore</p>
          <divb className="serachdiv">
            <label htmlFor="serach">Search</label>
            <input type="text" className="searchbar" />
          </divb>
        </div>
        <ul className="ulList">
          <li>Home</li>
          <li>Login</li>
          <li>Order</li>
          <li>Setting</li>
          <li>Profile</li>
          <li>
            <img className="cartimg" src={addtocart} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
