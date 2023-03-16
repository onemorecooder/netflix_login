import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../img/logo.png";

function Formulario1({ onValidEmail }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (event.target.checkValidity()) {
      onValidEmail(email);
    } else {
      setEmailError("Parece que algo ha ido mal con su correo.");
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    setEmailError("");
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
      <form onSubmit={handleSubmit} noValidate>
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
          <motion.button className="bInicio" whileHover={{ backgroundColor: "rgb(134, 0, 0)" }} type="submit">Siguiente</motion.button>
        </div>
        <AnimatePresence>
            {emailError && (
              <motion.div
                className="error-message"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {emailError}
              </motion.div>
            )}
          </AnimatePresence>
      </form>
    </div>
  );
}

export default Formulario1;
