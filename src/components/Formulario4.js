import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import visaLogo from "../img/visaLogo.png";
import mastercardLogo from "../img/mastercardLogo.png";
import ccvs1 from "../img/amex.png";
import ccvs2 from "../img/ccv.png";
import interrogation from "../img/interrogation.png";

function Formulario4({ onValidInputs, volverPaginaAnterior, texto }) {
  const [cardType, setCardType] = useState("");
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

  console.log(texto);

  function detectCardType(cardNumber) {
    const visaRegEx = /^4/;
    const mastercardRegEx = /^5[1-5]/;
    const amexRegEx = /^3[47]/;

    if (visaRegEx.test(cardNumber)) {
      return "visa";
    } else if (mastercardRegEx.test(cardNumber)) {
      return "mastercard";
    } else if (amexRegEx.test(cardNumber)) {
      return "amex";
    } else {
      return "desconocida";
    }
  }

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
    const nameInput = event.target;
    setName(nameInput.value);

    if (nameInput.checkValidity()) {
      setNameError('');
    } else {
      setNameError(nameInput.value.length === 0 ? 'El nombre es requerido' : 'El nombre no puede llevar números');
    }
  }

  function handleSurnameChange(event) {
    const surnameInput = event.target;
    setSurname(surnameInput.value);

    if (surnameInput.checkValidity()) {
      setSurnameError("");
    } else {
      setSurnameError(surnameInput.value.length === 0 ? "El apellido no puede llevar números" : "El apellido es requerido");
    }
  }

  function handleCardNumberChange(event) {
    const { value, validity } = event.target;

    if (value.length > 19) {
      setCardNumberError("La tarjeta no puede tener más de 16 números.");
      return;
    }

    setCardNumber(formatCardNumber(value));

    if (validity.valid) {
      const cadenaSinGuiones = value.replace(/-/g, '');
      setCardType(detectCardType(cadenaSinGuiones));
      setCardNumberError("");
    } else {
      setCardType("desconocida");
      setCardNumberError(validity.patternMismatch ? "Números insuficientes" : "El número de tarjeta es requerido");
    }
  }

  function handleCardNumberBlur(event) {
    const { value, validity } = event.target;

    if (value.length < 16) {
      setCardNumberError("El número de tarjeta es requerido");
      return;
    }

    if (!validity.valid) {
      setCardNumberError("Números insuficientes");
    } else {
      setCardNumber(formatCardNumber(value));
      setCardNumberError("");
    }
  }


  function handleExpiryDateChange(event) {
    const { value, validity } = event.target;
    const formattedValue = value.replace(/\D/g, "").replace(/(\d{2})(\d{0,2})/, function (_, p1, p2) {
      return p1 + (p2 ? "/" + p2 : "");
    });
    setExpiryDate(formattedValue);

    if (validity.valid && /^\d{2}\/\d{2}$/.test(formattedValue)) {
      setExpiryDateError("");
    } else {
      setExpiryDateError("La fecha de vencimiento es inválida");
    }
  }

  function handleExpiryDateBlur(event) {
    const { value, validity } = event.target;
    const formattedValue = value.replace(/\D/g, "").replace(/(\d{2})(\d{0,2})/, function (_, p1, p2) {
      return p1 + (p2 ? "/" + p2 : "");
    });

    if (!validity.valid) {
      setExpiryDateError("Datos insuficientes");
    } else {
      setExpiryDate(formattedValue);
      setExpiryDateError("");
    }
  }


  function handleCcvChange(event) {
    const ccvInput = event.target;
    setCcv(ccvInput.value);

    if (ccvInput.checkValidity()) {
      setCcvError('');
    } else {
      setCcvError('Please enter a valid CCV code.');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form2">
        <span>PASO 3 DE 3</span>
        <h1>
          Configura tu tarjeta de
          <br />
          crédito o débito
        </h1>
        {/* <img className="im" src={image} alt={"img"} /> */}


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
            onBlur={handleCardNumberBlur}
            pattern="\d{4}-\d{4}-\d{4}-\d{4}"
            required
          />
          <label className="inputTwo">
            <span className="asterisco">*</span>Número de tarjeta
          </label>

          {cardType === "visa" && (
            <label className="inputThree">
              <motion.img
                className="visa"
                src={visaLogo}
                alt="Imagen"
              ></motion.img>
            </label>
          )}
          {cardType === "mastercard" && (
            <motion.img
              className="master"
              src={mastercardLogo}
              alt="Imagen"
            ></motion.img>
          )}
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
            onBlur={handleExpiryDateBlur}
            onChange={handleExpiryDateChange}
            pattern="(0[1-9]|1[0-2])\/[0-9]{4}"
            required
          />
          <label className="inputTwo">
            <span className="asterisco">*</span>Caducidad de la tarjeta (Ej:
            01/2023)
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
            pattern="^\d{3,4}$"
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
          {hovered && (
            <motion.div
              className="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img src={ccvs1} alt="Imagen flotante" />
              <img src={ccvs2} alt="Imagen flotante" />
            </motion.div>
          )}
        </div>
      </div>
      <p className="text2">
        (<span className="asterisco">*</span>) Campos obligatorios.
      </p>






      <div className="volver">
        <p className="planSeleccionado">Plan selecionado:<b>&nbsp; {texto}</b></p>
        <motion.button 
        whileHover={{ scale: 1.1, backgroundColor: "#4e95c8" }}
        whileTap={{ scale: 0.8, backgroundColor: "#0f5486"}}
        className="buttVolver" 
        onClick={volverPaginaAnterior}>
          Cambiar plan
          </motion.button>
      </div>






      <br />
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