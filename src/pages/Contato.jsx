import React, { useEffect } from "react";
import FormControll from "../components/FormControll";
import Footer from "../components/Footer";
function Contato() {

  
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
    <>
      <div
        className="containerContato"
        style={{ margin: "auto", textAlign: "center", padding: "20px" }}
      >
        <h1>Contato</h1>
      </div>
      <FormControll />
      <Footer />
    </>
  );
}

export default Contato;
