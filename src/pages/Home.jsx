import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Slider from "../components/Slider";
import Updates from "../components/Updates";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      {/* Header, about us, and slider sections */}
      <Hero />
      <About />
      <Slider />
      <Updates />
      <Footer />
    </div>
  );
}

export default Home;
