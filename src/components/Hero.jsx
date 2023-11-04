import React from "react";
import "./Hero.css";
import img from "../assets/img/hero/hero.jpg";
import logo from "../assets/img/hero/logo.png";

function Hero() {
  return (
    <section className="hero">
      {/* Hero image container */}
      <div className="image-container-hero">
        {/* Pedra Menina container */}
        <div className="containerPedraMenina">
          {/* Pedra Menina logo */}
          <img src={logo} alt="imagem logo" className="logoPedraMenina" />
        </div>
        {/* Hero image overlay */}
        <div className="OverlayImagemHero">
          {/* Loading image */}
          <img
            src={img}
            alt="imagem carregamento"
            className="imagemCarregamento"
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;
