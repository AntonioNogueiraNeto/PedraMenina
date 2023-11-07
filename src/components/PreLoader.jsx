import React, { useEffect } from "react";
import "./Preloader.css";
import { preLoaderAnim } from "../assets/animations";

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
        </div>
      </div>
    </div>
  );
}

export default PreLoader;
