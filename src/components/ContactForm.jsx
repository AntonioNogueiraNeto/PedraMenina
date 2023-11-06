import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar os dados para o servidor
    fetch("https://www.sisgenusinagem.com.br/enviar_email.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, tel, subject, message }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Email enviado com sucesso");
          // Faça algo após o envio bem-sucedido, se necessário
        } else {
          console.error("Erro ao enviar o email");
        }
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
      />
      <input
        type="tel"
        value={tel}
        onChange={(e) => setTel(e.target.value)}
        placeholder="Telefone"
      />
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Assunto"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Mensagem"
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
