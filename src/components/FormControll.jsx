import React, { useState } from "react";
import "./FormStyles.css"; // Import the CSS file

function FormControll() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    assunto: "",
    myText: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function onSubmit(event) {
    event.preventDefault();

    console.log(formData);

    fetch("https://sisgenusinagem.com.br/contato", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setIsSuccess(true);
          setErrorMessage("");
        } else {
          setIsSuccess(false);
          setErrorMessage(
            "Erro ao enviar o e-mail. Tente novamente mais tarde."
          );
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setErrorMessage("Erro ao enviar o e-mail. Tente novamente mais tarde.");
      });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="form-container">
      <form onSubmit={onSubmit} className="form-content">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nome"
          value={formData.name}
          className="form-input"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          id="email"
          value={formData.email}
          placeholder="Digite seu email"
          className="form-input"
          onChange={handleInputChange}
        />
        <input
          type="tel"
          name="tel"
          id="tel"
          value={formData.tel}
          placeholder="Digite seu telefone"
          className="form-input"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="assunto"
          id="assunto"
          placeholder="Assunto"
          value={formData.assunto}
          onChange={handleInputChange}
          className="form-input"
        />
        <textarea
          id="myTextarea"
          name="myText"
          value={formData.myText}
          onChange={handleInputChange}
          placeholder="Digite sua mensagem: "
          className="form-input textarea"
        ></textarea>

        <button type="submit" className="form-input">
          Enviar
        </button>
        {isSuccess && (
          <p className="success-message">E-mail enviado com sucesso!</p>
        )}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default FormControll;
