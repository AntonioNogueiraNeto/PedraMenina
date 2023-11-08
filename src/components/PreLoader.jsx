import React, { useEffect } from "react";
import "./Preloader.css";
import { preLoaderAnim } from "../assets/animations";
// import logo from "../assets/img/logo.png";
function PreLoader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="overlayPreloader">
      <div className="preloader">
        <div className="texts-container">
          <span>Mineração</span>
          <span>Pedra</span>
          <span>Menina</span>
          {/* <span>
            <img src={logo} className="logoPreloader" alt="" />
          </span>
             */}
        </div>
      </div>
    </div>
  );
}

export default PreLoader;
