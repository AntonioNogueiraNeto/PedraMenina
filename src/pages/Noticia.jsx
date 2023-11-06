import React from "react";
import { useLocation } from "react-router-dom";

function Noticia() {
  const location = useLocation();
  const { state } = location;
  const index = state ? state.index : null;
  const titulo = location.pathname.split("/").pop();
  const tituloDescodificado = decodeURIComponent(titulo);
  const tituloFormatado = tituloDescodificado.replace(/-/g, " "); // Substituir hífens por espaços

  return (
    <div>
      <h1>Detalhes da Notícia</h1>
      {index !== null ? (
        <div>
          <p>Índice: {index}</p>
          <p>Título: {tituloFormatado}</p>
          {/* Exibir os detalhes da notícia com base no índice e título */}
        </div>
      ) : (
        <p>Detalhes da notícia não encontrados.</p>
      )}
    </div>
  );
}

export default Noticia;
