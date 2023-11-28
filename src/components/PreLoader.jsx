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
        <div className="centralizar">
          <div className="texts-container">
            <span
            >
              Mineração
            </span>
          </div>
          <div className="texts-container">
            <span>Pedra</span>
            <span>Menina</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreLoader;
