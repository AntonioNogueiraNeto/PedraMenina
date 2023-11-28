import React, { useState } from "react";
// import Translate from "./Translate";
import Logo from "../assets/img/logo-header.png";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Hamburger } from "../assets/svg/hamburger.svg";
import { ReactComponent as Close } from "../assets/svg/close.svg";

import "./Navbar.css";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [iconeMenu, setIconeMenu] = useState(<Hamburger />);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);

    if (showNavbar) {
      setIconeMenu(<Hamburger />);
    } else {
      setIconeMenu(<Close />);
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/ReactApp">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="menu-icon" onClick={handleShowNavbar}>
          {iconeMenu}
        </div>

        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/ReactApp">Home</NavLink>
            </li>
            <li>
              <NavLink to="/empresa">Empresa</NavLink>
            </li>
            <li>
              <NavLink to="/produtos">Produtos</NavLink>
            </li>
            <li>
              <NavLink to="/contato">Contato</NavLink>
            </li>
            {/* <li>
              <Translate />
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
