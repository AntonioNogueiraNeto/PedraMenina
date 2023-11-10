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
          Há quase três décadas, a <strong> Mineração Pedra Menina </strong>{" "}
          estabeleceu sua presença como uma das principais operadoras de
          mineração na região nordeste do Estado de Minas Gerais. Desde 1992, a
          empresa opera uma mina a céu aberto dedicada à extração de minério de
          manganês, situada no coração do deslumbrante{" "}
          <strong> Vale do Jequitinhonha</strong>, especificamente no município
          de Senador Modestino Gonçalves.
        </p>
      </div>
    </section>
  );
}

export default About;
