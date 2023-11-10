import React from "react";
import "./About.css";

function About() {
  return (
    <section className="containerTituloHero">
      <div className="backgroundabout"></div>
      <div className="tituloHero">
        <span>QUEM</span>
        <span>SOMOS</span>
      </div>
      <div className="paragrafo-hero">
        <p>
          A Mineração Pedra Menina Ltda. opera, desde 1.992, uma mina a
          céu-aberto de minério de manganês localizada no nordeste do Estado de
          Minas Gerais (Vale do Jequitinhonha), no município de Senador
          Modestino Gonçalves.
          <br />
         
          <br />
          A mina está localizada no nordeste do Estado de Minas Gerais
          (Vale do Jequitinhonha), no município de Senador Modestino Gonçalves.
          A distância rodoviária de Belo Horizonte à mina é de 370 km.
        </p>
      </div>
    </section>
  );
}

export default About;
