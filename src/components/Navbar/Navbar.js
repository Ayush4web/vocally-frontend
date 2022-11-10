import React from "react";
import Logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="top navbar">
      <img className="logo" src={Logo} alt="logo" />
      <div className="details">
        <div className="phone">
          <i className="fa-solid fa-phone"></i> +769 586 4558
        </div>
        <div className="email">
          <i className="fa-solid fa-envelope"></i> service@openauto.ca
        </div>
        <button className="download-btn">Download the mobile app</button>
      </div>
    </div>
  );
};

export default Navbar;
