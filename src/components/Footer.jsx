import React from "react";
import "./Footer.css"; // Import the CSS file for styling
import logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="footer-container">
    
      <div className="logoFooter">
        <img src={logo} alt="Logo" />
      </div>
    </footer>
  );
};

export default Footer;
