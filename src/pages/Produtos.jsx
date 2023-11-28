import React, { useEffect } from "react";
import Footer from "../components/Footer";
import ComponentProdutos from "../components/ComponentProdutos";

function Produtos() {
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
      <ComponentProdutos />
      <Footer />
    </div>
  );
}

export default Produtos;
