import React from "react";
import imagem from "../assets/img/produtos/mineriogranulado.jpg";
import imagem2 from "../assets/img/produtos/mineirofino.jpg";

function ComponentProdutos() {
  return (
    <div className="ComponentEmpresa">
      <div className="tituloEmpresa">
        <span>Produtos</span>
      </div>

      <div className="blocotexto">
        <div className="subtitulo">
          <p style={{ textAlign: "center" }}>
            A <strong>Mineração Pedra Menina</strong> oferece uma variedade de
            produtos para atender às distintas necessidades da indústria,
            destacando-se dois principais tipos:{" "}
            <strong> minério granulado e fino </strong>.
          </p>
        </div>
        <div className="lado-a-lado">
          <div className="img-container-empresa">
            <img src={imagem} alt="teste" />
          </div>
          <div className="texto-lado">
            <p>
              o minério granulado, um produto de excelência projetado para ser o
              parceiro ideal na fabricação de ferro ligas. Com um compromisso
              inabalável com a qualidade, nosso minério granulado é formulado
              para atender às exigências rigorosas da indústria siderúrgica.
            </p>

            <p>
              Ao escolher o minério granulado da{" "}
              <strong>Mineração Pedra Menina</strong>, os clientes têm a
              garantia de uma matériaprima que proporciona uma fusão eficiente e
              homogênea, resultando em ferro ligas de alta qualidade. A
              granulação específica de nosso produto é meticulosamente ajustada
              para otimizar o desempenho durante o processo de fabricação,
              assegurando resultados consistentes e confiáveis.
            </p>
          </div>
        </div>
      </div>

      <div className="blocotexto">
        <div className="lado-a-lado">
          <div className="texto-lado">
            <p>
              Nosso minério fino é uma escolha estratégica para diversos
              processos industriais, destacando-se pela sua granulometria
              precisa e composição balanceada, ideal para otimizar a
              sinterização e elevar a qualidade dos produtos finais.{" "}
            </p>

            <p>
              Ao escolher o minério fino da <strong>Mineração Pedra Menina</strong>, os clientes têm a
              garantia de uma matéria-prima que não apenas atende, mas excede os
              padrões exigentes da indústria. Nossa granulação fina e
              consistente é projetada para proporcionar uma sinterização eficaz,
              promovendo a coesão das partículas durante o processo, resultando
              em produtos finais de qualidade superior.
            </p>
          </div>

          <div className="img-container-empresa">
            <img src={imagem2} alt="teste" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentProdutos;
