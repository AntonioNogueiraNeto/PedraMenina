import React from "react";
import FormControll from "../components/FormControll";
import Footer from "../components/Footer";
function Contato() {
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
