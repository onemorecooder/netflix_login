import React, { useState } from "react";
import logo from "../img/logo.png";

function Formulario1({ onValidEmail }) {
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (event.target.checkValidity()) {
      onValidEmail(email);
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  return (
    <div>
      <img className="logo" src={logo} alt=""></img>
      <h1 className="title">Disfruta dónde quieras. Cancela cuando quieras.</h1>
      <h2 className="subtitle">
        ¿Quieres ver algo ya? Escribe tu dirección
        <br />
        de correo para crear una suscripción a<br />
        Netflix o reactivarla.
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="group">
          <input
            className="in1"
            type="email"
            id="email"
            placeholder="a"
            required
            value={email}
            onChange={handleEmailChange}
          />
          <label className="inputOne">Introduzca aquí su email</label>
        </div><br/>
        <button type="submit">Siguiente</button>
      </form>
    </div>
  );
}

export default Formulario1;
