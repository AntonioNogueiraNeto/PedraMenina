import React from "react";
import { useLocation } from "react-router-dom";
import cava2 from "../assets/img/cavas/cava2.jpg";
import "./Noticia.css";
import Footer from "../components/Footer";
function Noticia() {
  const location = useLocation();
  const { state } = location;
  const index = state ? state.index : null;
  const titulo = location.pathname.split("/").pop();
  const tituloDescodificado = decodeURIComponent(titulo);
  const tituloFormatado = tituloDescodificado.replace(/-/g, " "); // Substituir hífens por espaços

  const objetos = [
    {
      index: "0",
      nome: "antonio",
      idade: 32,
      texto1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque est consequatur excepturi voluptatibus! Assumenda, voluptatibus aperiam. Magni assumenda voluptatum at dicta quisquam neque aperiam, nisi sint cum ut, minus necessitatibus.",

      imagem: cava2,
    },
    { index: "1", nome: "victoria", idade: 32 },
    { index: "2", nome: "jose", idade: 32 },
  ];

  const objetoSelecionado = objetos[index];

  return (
    <>
      {index !== null ? (
        <div>
          {objetoSelecionado ? (
            <div className="ContainerNoticia">
              <div className="tituloNoticia">
                <span>{tituloFormatado}</span>
              </div>
              <div className="container-texto-noticia">
                <div className="container-imagem">
                  <img src={objetoSelecionado.imagem} alt="teste" />
                </div>
                <div className="texto">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio incidunt consequatur quo voluptas quae quibusdam
                    corporis voluptatibus pariatur accusamus dignissimos tempore
                    dolore similique ratione, illum sapiente vel. Similique,
                    incidunt tempora! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Omnis commodi saepe nisi exercitationem
                    quod perferendis? Veritatis sunt impedit cum vero, corporis
                    modi cupiditate, eligendi id harum et ex ab voluptatem?
                  </p>

                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Amet animi nisi ea saepe corporis eligendi alias, a sed.
                    Fuga sunt iste aperiam, veniam corporis minus reprehenderit
                    nesciunt voluptatem dolorum sit!
                  </p>
                </div>
              </div>
              {/* Adicione mais informações conforme necessário */}
            </div>
          ) : (
            <p>Detalhes do objeto não encontrados.</p>
          )}
          <div style={{ marginTop: "40px" }}>
            <Footer />
          </div>
        </div>
      ) : (
        <p>Detalhes da notícia não encontrados.</p>
      )}
    </>
  )
}

export default Noticia;
