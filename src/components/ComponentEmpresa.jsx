import React from "react";
import "./ComponentEmpresa.css";

import imagem from "../assets/img/cavas/cava3.jpg";
import imagem2 from "../assets/img/cavas/cava2.jpg";

function ComponentEmpresa() {
  return (
    <div className="ComponentEmpresa">
      <div className="tituloEmpresa">
        <span>A Empresa</span>
      </div>

      <div className="blocotexto">
        <div className="lado-a-lado">
          <div className="img-container-empresa">
            <img src={imagem} alt="teste" />
          </div>
          <div className="texto-lado">
            <p>
              Há quase três décadas, a <strong> Mineração Pedra Menina </strong>{" "}
              estabeleceu sua presença como uma das principais operadoras de
              mineração na região nordeste do Estado de Minas Gerais. Desde
              1992, a empresa opera uma mina a céu aberto dedicada à extração de
              minério de manganês, situada no coração do deslumbrante{" "}
              <strong> Vale do Jequitinhonha</strong>, especificamente no
              município de Senador Modestino Gonçalves.
            </p>

            <p>
              atuação da <b>Mineração Pedra Menina</b> tem sido marcada não
              apenas pela excelência na extração mineral, mas também por sua
              contribuição para o desenvolvimento socioeconômico da região. Ao
              longo dos anos, a empresa se comprometeu não somente com a
              atividade de mineração, mas também com
              <strong> práticas ambientalmente </strong>
              responsáveis e com a promoção do bem-estar das comunidades locais.
            </p>
          </div>
        </div>

        <div className="texto-baixo">
          <p>
            A mina a céu aberto representa não apenas uma fonte de recursos
            minerais valiosos, mas também um ponto de interesse onde se
            entrelaçam a eficiência operacional e a sustentabilidade ambiental.
            A <strong> Mineração Pedra Menina</strong> tem se destacado por sua
            abordagem cuidadosa na condução de suas operações, garantindo a
            preservação do ambiente.
          </p>

          <p>
            Além disso, a empresa tem desempenhado um papel significativo na
            geração de empregos e oportunidades na região, fortalecendo a
            economia local e investindo em iniciativas que visam melhorar a
            qualidade de vida das comunidades ao seu redor.
          </p>

          <p>
            A trajetória de quase trinta anos da{" "}
            <strong> Mineração Pedra Menina </strong>reflete um compromisso
            contínuo com a excelência, a responsabilidade social e a busca pela
            harmonia entre a atividade industrial e a preservação ambiental. Sua
            presença no Vale do Jequitinhonha não apenas simboliza uma operação
            de sucesso na mineração, mas também um exemplo de como é possível
            alinhar o progresso econômico com a conservação do meio ambiente e o
            desenvolvimento social.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ComponentEmpresa;
