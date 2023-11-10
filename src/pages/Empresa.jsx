import React, { useEffect } from "react";
import Footer from "../components/Footer";
import ComponentEmpresa from "../components/ComponentEmpresa";

function Empresa() {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    scrollToTop();
  }, []);
  return (
    <div>
      <ComponentEmpresa />
      <Footer />
    </div>
  );
}

export default Empresa;
