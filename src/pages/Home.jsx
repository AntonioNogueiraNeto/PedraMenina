import React, { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Slider from "../components/Slider";
import Updates from "../components/Updates";
import Footer from "../components/Footer";
import Localizacao from "../components/Localizacao";
import Call from "../components/Call";
function Home() {
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
  return (
    <div>
      {/* Header, about us, and slider sections */}
      <Hero />
      <About />
      <Slider />
      <Updates />
      <Call />
      <Localizacao />
      <Footer />
    </div>
  );
}

export default Home;
