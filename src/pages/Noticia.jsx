import React from "react";
import { useLocation } from "react-router-dom";

function Noticia() {
  const location = useLocation();
  const { state } = location;
  const index = state ? state.index : null;
  const titulo = location.pathname.split("/").pop();
  const tituloDescodificado = decodeURIComponent(titulo);
  const tituloFormatado = tituloDescodificado.replace(/-/g, " "); // Substituir hífens por espaços

  const objetos = [
    { index: "0", nome: "antonio", idade: 32 },
    { index: "1", nome: "victoria", idade: 32 },
    { index: "2", nome: "jose", idade: 32 },
  ];

  const objetoSelecionado = objetos[index];

  return (
    <div>
      <h1>Detalhes da Notícia</h1>
      {index !== null ? (
        <div>
          <p>Índice: {index}</p>
          <p>Título: {tituloFormatado}</p>
          {objetoSelecionado ? (
            <div>
              <p>Detalhes do Objeto Selecionado:</p>
              <p>Nome: {objetoSelecionado.nome}</p>
              <p>Idade: {objetoSelecionado.idade}</p>
              {/* Adicione mais informações conforme necessário */}
            </div>
          ) : (
            <p>Detalhes do objeto não encontrados.</p>
          )}
        </div>
      ) : (
        <p>Detalhes da notícia não encontrados.</p>
      )}
    </div>
  );
}

export default Noticia;
