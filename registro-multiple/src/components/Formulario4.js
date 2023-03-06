import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image from "../img/cards.png";
import ccvs1 from "../img/amex.png";
import ccvs2 from "../img/ccv.png";
import interrogation from "../img/interrogation.png";

function Formulario4({ onValidInputs }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [ccv, setCcv] = useState("");
  const [nameError, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [expiryDateError, setExpiryDateError] = useState("");
  const [ccvError, setCcvError] = useState("");
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  function formatCardNumber(value) {
    return value
      .replace(/\D/g, "")
      .replace(
        /(\d{4})(\d{1,4})?(\d{1,4})?(\d{1,4})?/,
        function (_, p1, p2, p3, p4) {
          return (
            p1 +
            (p2 ? "-" + p2 : "") +
            (p3 ? "-" + p3 : "") +
            (p4 ? "-" + p4 : "")
          );
        }
      )
      .slice(0, 19);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (event.target.checkValidity()) {
      onValidInputs();
    } else {
      setNameError(document.getElementById("name-input").validationMessage);
      setSurnameError(
        document.getElementById("surname-input").validationMessage
      );
      setCardNumberError(
        document.getElementById("card-number-input").validationMessage
      );
      setExpiryDateError(
        document.getElementById("expiry-date-input").validationMessage
      );
      setCcvError(document.getElementById("ccv-input").validationMessage);
    }
  }

  function handleNameChange(event) {
    setName(event.target.value);
    setNameError(event.target.validationMessage);
  }

  function handleSurnameChange(event) {
    setSurname(event.target.value);
    setSurnameError(event.target.validationMessage);
  }

  function handleCardNumberChange(event) {
    const formattedValue = formatCardNumber(event.target.value);
    setCardNumber(formattedValue);
    setCardNumberError(event.target.validationMessage);
  }

  function handleExpiryDateChange(event) {
    const input = event.target.value;
    const formattedInput = input.replace(/[^0-9]/g, "");

    if (formattedInput.length > 2) {
      const month = formattedInput.slice(0, 2);
      const year = formattedInput.slice(2, 4);
      setExpiryDate(`${month}/${year}`);
    } else {
      setExpiryDate(formattedInput);
    }

    setExpiryDateError(event.target.validationMessage);
  }

  function handleCcvChange(event) {
    setCcv(event.target.value);
    setCcvError(event.target.validationMessage);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form2">
        <span>PASO 3 DE 3</span>
        <h1>
          Configura tu tarjeta de
          <br />
          crédito o débito
        </h1>
        <img className="im" src={image} alt={"img"} />

        <div className="group2">
          <input
            className="in1"
            placeholder="a"
            type="text"
            id="name-input"
            value={name}
            onChange={handleNameChange}
            pattern="[A-Za-záéíóúÁÉÍÓÚñÑüÜ\s]+"
            required
          />
          <label className="inputTwo">
            <span className="asterisco">*</span>Nombre
          </label>
          <AnimatePresence>
            {nameError && (
              <motion.div
                className="error-message"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {nameError}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <br />
        <div className="group2">
          <input
            className="in1"
            placeholder="a"
            type="text"
            id="surname-input"
            value={surname}
            onChange={handleSurnameChange}
            pattern="[A-Za-záéíóúÁÉÍÓÚñÑüÜ\s]+"
            required
          />
          <label className="inputTwo">
            <span className="asterisco">*</span>Apellido
          </label>
          <AnimatePresence>
            {surnameError && (
              <motion.div
                className="error-message"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {surnameError}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <br />
        <div className="group2">
          <input
            className="in1"
            placeholder="a"
            type="text"
            id="card-number-input"
            value={cardNumber}
            onChange={handleCardNumberChange}
            pattern="\d{4}-\d{4}-\d{4}-\d{4}"
            required
          />
          <label className="inputTwo">
            <span className="asterisco">*</span>Número de tarjeta
          </label>
          <AnimatePresence>
            {cardNumberError && (
              <motion.div
                className="error-message"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {cardNumberError}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <br />
        <div className="group2">
          <input
            className="in1"
            placeholder="a"
            type="text"
            id="card-number-input"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            pattern="\d{2}/\d{2}"
            required
          />
          <label className="inputTwo">
            <span className="asterisco">*</span>Caducidad de la tarjeta (Ej:
            01/12)
          </label>
          <AnimatePresence>
            {expiryDateError && (
              <motion.div
                className="error-message"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {expiryDateError}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <br />
        <div className="group2">
          <input
            className="in1"
            placeholder="a"
            type="text"
            id="ccv-input"
            value={ccv}
            onChange={handleCcvChange}
            pattern="[0-9]{3}"
            required
          />
          <label className="inputTwo">
            <span className="asterisco">*</span>CCV tarjeta (Ej: 111)
          </label>
          <label className="inputThree">
            <motion.img
              className="interrogation"
              src={interrogation}
              alt="Imagen"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.1 }}
            ></motion.img>
          </label>
          {hovered && (
            <motion.div
              className="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img src={ccvs1}alt="Imagen flotante" />
              <img src={ccvs2}alt="Imagen flotante" />
            </motion.div>
          )}
          <AnimatePresence>
            {ccvError && (
              <motion.div
                className="error-message"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {ccvError}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <br />
      </div>
      <p className="text2">
        (<span className="asterisco">*</span>) Campos obligatorios.
      </p>
      <motion.button
        whileHover={{ backgroundColor: "rgb(134, 0, 0)" }}
        type="submit"
      >
        Siguiente
      </motion.button>
    </form>
  );
}

export default Formulario4;
