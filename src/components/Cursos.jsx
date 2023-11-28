import React from "react";
import "./Cursos.css";
import projetoEscola from "../assets/img/Cursos/projeto1.jpg";
import projetoEscolaDois from "../assets/img/Cursos/projeto2.jpg";
import projetoEscolaTres from "../assets/img/Cursos/projeto1.jpg";
import ProjetoDois from "./ProjetoDois";

function Cursos() {
  return (
    <div>
      <div className="subtexto-curso">
        <p>
          O PEA é desenvolvido por uma equipe gestora, composta por
          colaboradores da Estação Ecológica Mata dos Ausentes - EEMA,
          consultores e colaboradores da Mineração Pedra Menina - MPM São 3
          projetos que incentivam o envolvimento de toda a comunidade do entorno
          do empreendimento minerário.
        </p>
      </div>

      <div className="tituloNoticia">
        <span>Projeto de Educação do Ambiente</span>
      </div>
      <div className="lado-a-lado-curso">
        <div className="img-container-curso">
          <img src={projetoEscola} alt="foto escola Darcilia Godoy" />
        </div>
        <div className="texto-lado-curso">
          <p>
            A Escola Estadual Darcília Godoy, em Senador Modestino Gonçalves,
            MG, reforça seu compromisso com a sustentabilidade ao estabelecer
            uma parceria inovadora com a Mineração Pedra Menina. Juntos, visam
            promover a Educação Ambiental no ambiente escolar, envolvendo
            colaboradores, professores e alunos.
          </p>
        </div>
      </div>

      <div className="lado-a-lado-curso-direito">
        <div className="texto-lado-curso-direito">
          <p>
            A colaboração entre a escola e a mineradora não apenas destaca a
            importância da responsabilidade social corporativa, mas também
            evidencia a necessidade de sensibilização ambiental no contexto
            local. A parceria proporciona recursos e conhecimentos para a
            implementação de programas educacionais que transcendem as
            fronteiras da sala de aula, integrando teoria e prática.
          </p>
        </div>
        <div className="img-container-curso-direito">
          <img src={projetoEscolaDois} alt="foto escola Darcilia Godoy" />
        </div>
      </div>
      
      <ProjetoDois />
    </div>
  );
}

export default Cursos;
