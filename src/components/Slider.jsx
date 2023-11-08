import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import cavaImage1 from "../assets/img/cavas/cava.jpg";
import cavaImage2 from "../assets/img/cavas/cava2.jpg";
import cavaImage3 from "../assets/img/cavas/cava3.jpg";
import cavaImage4 from "../assets/img/cavas/visaoGeral.jpg";
import cavaImage5 from "../assets/img/cavas/visaoGeral2.jpg";
import cavaImage6 from "../assets/img/cavas/visaoArea.jpg";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

import "./Slider.css";

function Slider() {
  const [file, setFile] = useState(null);
  const [indiceImagem, setIndiceImagem] = useState(0);

  const proximaImagem = () => {
    const proxIndice = (indiceImagem + 1) % data.length;
    setFile(data[proxIndice]);
    setIndiceImagem(proxIndice);
  };

  const imagemAnterior = () => {
    const anteriorIndice =
      indiceImagem - 1 < 0 ? data.length - 1 : indiceImagem - 1;
    setFile(data[anteriorIndice]);
    setIndiceImagem(anteriorIndice);
  };

  const data = [
    {
      id: 1,
      image: cavaImage1,
      alt: "foto da cava",
    },
    {
      id: 2,
      image: cavaImage2,
      alt: "foto da cava",
    },
    {
      id: 3,
      image: cavaImage3,
      alt: "foto da cava",
    },
    {
      id: 4,
      image: cavaImage4,
      alt: "foto da cava tendo perpescitiva geral",
    },
    {
      id: 5,
      image: cavaImage5,
      alt: "foto da cava tendo perpescitiva geral",
    },
    {
      id: 6,
      image: cavaImage6,
      alt: "foto de visão Aéria da cava",
    },
  ];

  return (
    <div className="containerGaleria">
      <div className="tituloGaleria">
        <span>UNIDADE</span>
        <span>OPERACIONAL</span>
      </div>

      <div className="containerSlider">
        <div className="tituloUnidade">
          <p>Unidade Pedra Menina</p>
          <p>Itamarandiba / MG</p>

          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            loop={true}
            modules={[EffectCards]}
            className="mySwiper"
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
                <p onClick={imagemAnterior} className="previous">
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

export default Slider;
