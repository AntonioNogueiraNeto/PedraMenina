import React from "react";
import "./ComponentEmpresa.css";

import imagem from "../assets/img/cavas/cava3.jpg";
import imagem2 from "../assets/img/cavas/cava2.jpg";

function ComponentEmpresa() {
  return (
    <div className="ComponentEmpresa">
      <div className="tituloEmpresa">
        <span>Missão</span>
      </div>

      <div className="blocotexto">
        <div className="img-container-empresa">
          <img src={imagem} alt="teste" />
        </div>
        <div className="texto">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            incidunt consequatur quo voluptas quae quibusdam corporis
            voluptatibus pariatur accusamus dignissimos tempore dolore similique
            ratione, illum sapiente vel. Similique, incidunt tempora! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Omnis commodi
            saepe nisi exercitationem quod perferendis? Veritatis sunt impedit
            cum vero, corporis modi cupiditate, eligendi id harum et ex ab
            voluptatem?
          </p>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet animi
            nisi ea saepe corporis eligendi alias, a sed. Fuga sunt iste
            aperiam, veniam corporis minus reprehenderit nesciunt voluptatem
            dolorum sit!
          </p>
        </div>
      </div>
      <div className="tituloEmpresa">
        <span style={{ color: "#072e4a" }}>Visão</span>
      </div>

      <div className="blocotexto">
        <div className="texto">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            incidunt consequatur quo voluptas quae quibusdam corporis
            voluptatibus pariatur accusamus dignissimos tempore dolore similique
            ratione, illum sapiente vel. Similique, incidunt tempora! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Omnis commodi
            saepe nisi exercitationem quod perferendis? Veritatis sunt impedit
            cum vero, corporis modi cupiditate, eligendi id harum et ex ab
            voluptatem?
          </p>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet animi
            nisi ea saepe corporis eligendi alias, a sed. Fuga sunt iste
            aperiam, veniam corporis minus reprehenderit nesciunt voluptatem
            dolorum sit!
          </p>
        </div>
        <div className="img-container-empresa">
          <img src={imagem2} alt="teste" />
        </div>
      </div>
    </div>
  );
}

export default ComponentEmpresa;
