import React from "react";
import "./Footer.css"; // Import the CSS file for styling
import logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="logoFooter">
        <img src={logo} alt="Logo" />
      </div>
      <div className="texto-footer">
        <p>
          Desenvolvido por{" "}
          <strong>
            <a
              href="https://uhlelotecnologia.com.br/"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              uHLelo Tecnologia
            </a>
          </strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
