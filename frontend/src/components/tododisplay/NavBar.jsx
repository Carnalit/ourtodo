import React from "react";
import logo from "./icon.png";
const NavBar = () => {
  return (
    <>
      <div className="navbar-container">
        <img src={logo} alt="" className="navbar-image" />
        <h1 className="navbar-text">Our ToDo</h1>
      </div>
    </>
  );
};

export default NavBar;
