import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Cursos.css";
import cavaImage1 from "../assets/img/Cursos/projeto1.jpg";
import cavaImage2 from "../assets/img/Cursos/projeto2.jpg";
import cavaImage3 from "../assets/img/Cursos/projeto3.jpg";
import cavaImage4 from "../assets/img/Cursos/projeto4.jpg";
import cavaImage5 from "../assets/img/Cursos/projeto5.jpg";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

function Cursos() {
  const [file, setFile] = useState(null);
  const [indiceImagem, setIndiceImagem] = useState(0);
  const [textoIndex, setTextoIndex] = useState(0);

  const proximaImagem = () => {
    const proxIndice = (indiceImagem + 1) % data.length;
    setFile(data[proxIndice]);
    setIndiceImagem(proxIndice);
    setTextoIndex(proxIndice);
  };

  const imagemAnterior = () => {
    const anteriorIndice =
      indiceImagem - 1 < 0 ? data.length - 1 : indiceImagem - 1;
    setFile(data[anteriorIndice]);
    setIndiceImagem(anteriorIndice);
    setTextoIndex(anteriorIndice);
  };

  const data = [
    {
      id: 1,
      image: cavaImage1,
      alt: "foto da cava",
      texto:
        "Atuação em escola de Ensino Formal, destinado ao público externo, composto pelos colaboradores, professores e alunos da Escola Estadual Darcília Godoy localizada em Senador Modestino Gonçalves, MG. ",
    },
    {
      id: 2,
      image: cavaImage2,
      texto:
        "Atuação em escola de Ensino Formal, destinado ao público externo, composto pelos colaboradores, professores e alunos da Escola Estadual Darcília Godoy localizada em Senador Modestino Gonçalves, MG. ",
    },
    {
      id: 3,
      image: cavaImage3,
      texto:
        "Educação Ambiental de Ensino não Formal, destinado ao público interno, composto pelos colaboradores da Estação Ecológica Mata dos Ausentes e da Mineração Pedra Menina Ltda.",
      alt: "foto da cava",
    },
    {
      id: 4,
      image: cavaImage4,
      alt: "foto da cava tendo perpescitiva geral",
      texto:
        "Educação Ambiental de Ensino não Formal, destinado às comunidades localizadas na área de influência direta do empreendimento e no entorno da Estação Ecológica, sendo aberto a participação de qualquer interessado da comunidade. Destaque para a recuperação de áreas de proteção em terrenos de terceiros com espécies arbóreas nativas da região.",
    },
    {
      id: 5,
      image: cavaImage5,
      alt: "foto da cava tendo perpescitiva geral",
      texto:
        "Educação Ambiental de Ensino não Formal, destinado às comunidades localizadas na área de influência direta do empreendimento e no entorno da Estação Ecológica, sendo aberto a participação de qualquer interessado da comunidade. Destaque para a recuperação de áreas de proteção em terrenos de terceiros com espécies arbóreas nativas da região.",
    },
  ];
  return (
    <div
      className="containerGaleria"
      style={{
        marginTop: "20px",
      }}
    >
      <div className="tituloGaleria" style={{
        fontFamily: "serif"
      }}>
        <span style={{
        fontFamily: "roboto"
      }}>Plano de </span>
        <span style={{
        fontFamily: "roboto"
      }}>Educação Ambiental</span>
      </div>

      <div className="containerSlider">
        <div className="textoCursos">
          {data.map((item, index) => (
            <React.Fragment key={item.id}>
              {index === textoIndex && (
                <p className="special-text">{item.texto}</p>
              )}
            </React.Fragment>
          ))}

          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            loop={true}
            modules={[EffectCards]}
            className="mySwiper"
            onSlideChange={(e) => setTextoIndex(e.realIndex)}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id} onClick={() => setFile(item)}>
                <img src={item.image} alt={item.alt} className="slide-item" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className="popup-media"
            style={{ display: file ? "block" : "none" }}
          >
            <span onClick={() => setFile(null)}>&times; </span>
            {file && (
              <div className="divMobile">
                <img src={file.image} alt={`Imagem ${indiceImagem + 1}`} />
                <p
                  onClick={imagemAnterior}
                  style={{
                    color: "white",
                  }}
                  className="previous"
                >
                  &#60;
                </p>
                <p onClick={proximaImagem} className="next">
                  &#62;
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cursos;
