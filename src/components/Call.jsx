import React from "react";
import "./Call.css";
import { Link } from "react-router-dom";

function Call() {
  return (
    <div className="cta-container">
      <div className="bloco-texto">
        <p className="cta-texto">
        Oferecemos uma gama especializada de produtos de alta qualidade, incluindo minério granulado, projetado meticulosamente para a fabricação de ferro ligas, e uma variedade refinada destinada exclusivamente à sinterização.
        </p>

        <div className="cta-btn-container">
          <Link to={"/produtos"} className="cta-btn">
            Confira Mais
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Call;
