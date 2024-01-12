import React from "react";
import { Link } from "react-router-dom";

import "./Updates.css";
import cavaImage1 from "../assets/img/noticia/jazida.png";
import cavaImage2 from "../assets/img/cavas/cava2.jpg";
import cavaImage3 from "../assets/img/Cursos/projeto1.jpg";

function Updates() {
  const news = [
    {
      titulo: "A Jazida mineral",
      imagem: cavaImage1,
    },

    {
      titulo: "A lavra do minério",
      imagem: cavaImage2,
    },

    {
      titulo:
        "Plano de Educação Ambiental - PAE",
      imagem: cavaImage3,
    },
  ];

  // Função para cortar o texto e adicionar reticências
  const limitarTexto = (texto, maxPalavras) => {
    const palavras = texto.split(" ");
    if (palavras.length > maxPalavras) {
      return palavras.slice(0, maxPalavras).join(" ") + "...";
    }
    return texto;
  };

  return (
    <div id="news" className="containerUpdate">
      <div className="tituloUpdate">
        <span>MAIS</span>
        <span>INFORMAÇÕES</span>
      </div>
      <div className="containerCards">
        {news.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.imagem} alt={item.image} className="imagemUpdate" />
            <div className="tituloNews">
              <h2>{limitarTexto(item.titulo, 8)}</h2>
              <Link
                to={`/noticia/${item.titulo.replace(/\s/g, "-")}`}
                state={{ index }} // Passa o índice como parte do estado
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p className="button-info">VER MAIS</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Updates;
