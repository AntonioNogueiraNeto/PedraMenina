import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import jazida from "../assets/img/noticia/jazidatitulo.png";
import cava2 from "../assets/img/cavas/cava2.jpg";

import "./Noticia.css";
import Footer from "../components/Footer";
import Cursos from "../components/Cursos";
function Noticia() {
  const location = useLocation();
  const { state } = location;
  const index = state ? state.index : null;
  const titulo = location.pathname.split("/").pop();
  const tituloDescodificado = decodeURIComponent(titulo);
  const tituloFormatado = tituloDescodificado.replace(/-/g, " "); // Substituir hífens por espaços

  useEffect(() => {
    // Função para rolar para o topo da página
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // opcional, proporciona uma animação suave de rolagem
      });
    };

    // Chama a função quando o componente é montado
    scrollToTop();
  }, []); // O segundo argumento vazio [] garante que a função só seja chamada uma vez, quando o componente é montado
  const objetos = [
    {
      index: "0",
      nome: "antonio",
      idade: 32,
      texto1:
        "A jazida mineral foi minuciosamente investigada em conformidade com os rigores e padrões estabelecidos pelo renomado Instituto Canadense de Mineração, Metalurgia e Petróleo (CIM) no que diz respeito aos Recursos e Reservas Minerais.",

      texto2:
        "A exploração e pesquisa desse depósito mineral seguiram as diretrizes criteriosas do CIM, reconhecido internacionalmente por suas normas técnicas e práticas de avaliação, assegurando uma avaliação detalhada, precisa e confiável da extensão, qualidade e potencial do recurso disponível. Esses padrões elevados garantem a precisão e a credibilidade das informações sobre as reservas minerais presentes na jazida.",

      texto3:
        "O compromisso em aderir aos padrões do Instituto Canadense de Mineração, Metalurgia e Petróleo reforça a seriedade e a confiabilidade dos dados levantados, fundamentais para direcionar estratégias de exploração e planejamento das operações. Essa conformidade com os padrões do CIM não apenas valida a qualidade da pesquisa realizada, mas também oferece transparência e confiança tanto para os investidores quanto para as partes interessadas no que diz respeito à precisão e solidez das informações disponíveis sobre a jazida mineral.",

      imagem: jazida,
    },
    {
      index: "1",
      nome: "victoria",
      idade: 32,
      texto1:
        "A autorização para a exploração é concedida pelo Governo Federal por meio de uma Concessão de Lavra, processo que reflete a conformidade legal para operações de extração mineral. Além disso, a atuação da empresa é estritamente regulada pelos órgãos de controle ambiental do Estado de Minas Gerais, como COPAM (Conselho Estadual de Política Ambiental), FEAM (Fundação Estadual do Meio Ambiente), IGAM (Instituto Mineiro de Gestão das Águas) e IEF (Instituto Estadual de Florestas). Essas entidades desempenham um papel fundamental na fiscalização e monitoramento das atividades, garantindo a conformidade com as normas ambientais e de preservação dos recursos natura",

      texto2:
        "Tanto a extração quanto o beneficiamento do minério são realizados de forma completamente mecanizada, evidenciando um compromisso com a eficiência operacional e a segurança dos trabalhadores. Essa abordagem mecanizada não apenas otimiza os processos, mas também promove condições de trabalho mais seguras e eficazes.",

      texto3:
        "A qualidade do minério extraído é rigorosamente controlada, seguindo procedimentos padrões embasados nas normas da Associação Brasileira de Normas Técnicas (ABNT) e nas normas internacionais da International Organization for Standardization (ISO). Esses protocolos garantem que a qualidade do minério atenda aos mais altos padrões, assegurando não apenas a conformidade com requisitos técnicos e de segurança, mas também a qualidade consistente do produto final.",

      imagem: cava2,
    },
    {
      index: "2",
      nome: "jose",
      idade: 32,
      texto1:
        "O Programa de Educação Ambiental (PEA) é coordenado por uma equipe composta por membros da Estação Ecológica Mata dos Ausentes (EEMA), consultores e colaboradores da Mineração Pedra Menina (MPM). Este programa engloba três projetos voltados para promover a conscientização ambiental e a participação da comunidade:",

      texto2:
        "Projeto 1: Focado na Educação Ambiental para o ensino formal, direcionado ao público externo, como colaboradores, professores e alunos da Escola Estadual Darcília Godoy em Senador Modestino Gonçalves, MG.",

      texto3:
        "Projeto 2: Destinado à Educação Ambiental para o ensino não formal, direcionado ao público interno, compreendendo colaboradores da Estação Ecológica Mata dos Ausentes e da Mineração Pedra Menina Ltda.",

      texto4:
        "Projeto 3: Voltado para a Educação Ambiental de ensino não formal, abrangendo as comunidades próximas à área de influência direta do empreendimento e circunvizinhas à Estação Ecológica. Este projeto está aberto à participação de qualquer membro interessado da comunidade.",

      texto5:
        "Estes projetos visam incentivar a participação e conscientização ambiental não apenas dentro da empresa e da Estação Ecológica, mas também na comunidade local, através de programas estruturados tanto para o ensino formal quanto para a educação ambiental de maneira mais abrangente e acessível.",

      imagem: cava2,
    },
  ];

  const objetoSelecionado = objetos[index];

  return (
    <>
      {index !== null ? (
        <div>
          {objetoSelecionado ? (
            <>
              {index === 0 || index === 1 ? (
                <div className="ContainerNoticia">
                  <div className="tituloNoticia">
                    <span>{tituloFormatado}</span>
                  </div>
                  <div className="container-texto-noticia">
                    <div className="container-imagem">
                      <div className="container-imagem">
                        <img
                          src={objetoSelecionado.imagem}
                          style={{
                            width: "60%",
                          }}
                          className="jazida-foto"
                          alt="teste"
                        />
                      </div>
                      <div className="texto">
                        <p>{objetoSelecionado.texto1}</p>
                        <p>{objetoSelecionado.texto2}</p>
                        <p>{objetoSelecionado.texto3}</p>
                        <p>{objetoSelecionado.texto4}</p>
                        <p>{objetoSelecionado.texto5}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Cursos />
              )}
              {/* <div className="texto">
                  <p>{objetoSelecionado.texto1}</p>
                  <p>{objetoSelecionado.texto2}</p>
                  <p>{objetoSelecionado.texto3}</p>
                  <p>{objetoSelecionado.texto4}</p>
                  <p>{objetoSelecionado.texto5}</p>
                </div> */}
              {/* Adicione mais informações conforme necessário */}
            </>
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
  );
}

export default Noticia;
