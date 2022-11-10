import React from "react";
import Logo from "../../assets/logo.png";
import Socials from "../Socials/Socials";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="navbar">
        <img className="logo" src={Logo} alt="logo" />
        <div className="details">
          <div className="phone">
            <i className="fa-solid fa-phone"></i> +769 586 4558
          </div>
          <div className="email">
            <i className="fa-solid fa-envelope"></i> service@openauto.ca
          </div>
        </div>
      </div>
      <div className="social-links">
        <p>Open Auto @ All Rights Reserved</p>
        <Socials />
      </div>
    </div>
  );
};

export default Footer;
