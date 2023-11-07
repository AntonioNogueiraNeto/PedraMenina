import React, { useState } from "react";
import "./Translate.css"; // Arquivo para estilos

function Translate() {
  const [isPT, setIsPT] = useState(true);

  const toggleLanguage = () => {
    setIsPT(!isPT);
    if (isPT) {
      // Lógica para mudar para pt-BR
      // Exemplo: setLanguage('pt-BR');
      console.log("Mudou para Português do Brasil (pt-BR)");
    } else {
      // Lógica para mudar para ES
      // Exemplo: setLanguage('ES');
      console.log("Mudou para Espanhol (ES)");
    }
  };

  return (
    <div className="Translate">
      <button
        className={isPT ? "ios-toggle" : "ios-toggle active"}
        onClick={toggleLanguage}
      >
        <div className="checkmark"></div>
      </button>
    </div>
  );
}

export default Translate;
