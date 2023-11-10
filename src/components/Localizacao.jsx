import React from "react";
import cidade from "../assets/img/Footer/cidade.png";
import estado from "../assets/img/Footer/estado.png";
import "./Localizacao.css"; // Import the CSS file for styling

function Localizacao() {
  return (
    <div className="containerLocalizacao">
      <div className="tituloMapa">
        <span>NOSSA</span>
        <span>LOCALIZAÇÃO</span>
      </div>
      <div className="mapa">
        <div className="div-esquerda">
          <div className="cardTextoFooter">
            <p>
              A mina está localizada no nordeste do Estado de Minas Gerais (Vale
              do Jequitinhonha), no município de Senador Modestino Gonçalves. A
              distância rodoviária de Belo Horizonte à mina é de 370 km.
            </p>
          </div>
          <div className="fotos-cidade-estado">
            <img src={estado} alt="" />
            <img src={cidade} alt="" />
          </div>
        </div>
        <div className="mapaGoogle">
          <iframe
            className="mapaGoogle"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15182.749382624748!2d-43.2212565!3d-17.9467309!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xac2d8519f4e6dd%3A0x881032bbbcd141b1!2sMinera%C3%A7%C3%A3o%20Pedra%20Menina!5e0!3m2!1sen!2sbr!4v1699574198695!5m2!1sen!2sbr"
            width="400"
            height="400"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Localizacao;
