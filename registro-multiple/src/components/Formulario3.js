import React, { useState } from "react";
import { motion } from "framer-motion";
import check from "../img/check.png";

function Formulario3( {nextPage}) {
  const [precioSeleccionado, setPrecioSeleccionado] = useState("");
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (precioSeleccionado.trim() !== "") {
      nextPage(precioSeleccionado);
    } else {
      console.log("No se ha seleccionado nada");
    }
  }

  return (
    
    <div className="form2">
      <span>PASO 2 DE 3</span>
      <h1 className="title2">Selecciona el plan perfecto para ti</h1>
      <ul>
        <li>
          <img className="checks" src={check} alt=""></img> Ve todo lo que
          quieras.
        </li>
        <li>
          <img className="checks" src={check} alt=""></img> Recomendaciones
          exclusivas para ti.
        </li>
        <li>
          <img className="checks" src={check} alt=""></img> Cambia plan o
          cancélalo cuando quieras.
        </li>
      </ul>

      <table>
        <tr>
          <td></td>
          <td>
            <motion.button
              className={`buttonTable ${
                opcionSeleccionada === "basico" ? "seleccionado" : ""
              }`}
              whileHover={{ backgroundColor: "rgb(221, 122, 122)" }}
              onClick={() => {
                setOpcionSeleccionada("basico");
                setPrecioSeleccionado("5,49€");
              }}
            >
              Básico
              <br />
              con
              <br />
              anuncios
            </motion.button>
          </td>
          <td>
            <motion.button
              className={`buttonTable ${
                opcionSeleccionada === "estandar" ? "seleccionado" : ""
              }`}
              whileHover={{ backgroundColor: "rgb(221, 122, 122)" }}
              onClick={() => {
                setOpcionSeleccionada("estandar");
                setPrecioSeleccionado("12,99€");
              }}
            >
              Estándar
            </motion.button>
          </td>
          <td>
            <motion.button
              className={`buttonTable ${
                opcionSeleccionada === "premium" ? "seleccionado" : ""
              }`}
              whileHover={{ backgroundColor: "rgb(221, 122, 122)" }}
              onClick={() => {
                setOpcionSeleccionada("premium");
                setPrecioSeleccionado("17,99€");
              }}
            >
              Premium
            </motion.button>
          </td>
        </tr>
        <tr>
          <td className="titleTable">Precio al mes</td>
          <td className="centered">5,49€</td>
          <td className="centered">12,99€</td>
          <td className="centered">17,99€</td>
        </tr>
        <tr className="separator">
          <td colspan="4"></td>
        </tr>
        <tr>
          <td className="titleTable">Calidad de video</td>
          <td className="centered">Buena</td>
          <td className="centered">Muy Buena</td>
          <td className="centered">Excepcional</td>
        </tr>
        <tr className="separator">
          <td colspan="4"></td>
        </tr>
        <tr>
          <td className="titleTable">Resolución</td>
          <td className="centered">720p</td>
          <td className="centered">1080p</td>
          <td className="centered">4K+HDR</td>
        </tr>
        <tr className="separator">
          <td colspan="4"></td>
        </tr>
        <tr>
          <td className="titleTable">
            Multidispositivo: TV, ordenador, teléfono
            <br />
            móvil y tableta
          </td>
          <td className="centered">
            <img className="checks" src={check} alt=""></img>
          </td>
          <td className="centered">
            <img className="checks" src={check} alt=""></img>
          </td>
          <td className="centered">
            <img className="checks" src={check} alt=""></img>
          </td>
        </tr>
        <tr className="separator">
          <td colspan="4"></td>
        </tr>
        <tr>
          <td className="titleTable">Descargas</td>
          <td className="centered" style={{ color: "red", fontSize: "40px" }}>
            <b>-</b>
          </td>
          <td className="centered">
            <img className="checks" src={check} alt=""></img>
          </td>
          <td className="centered">
            <img className="checks" src={check} alt=""></img>
          </td>
        </tr>
      </table>
      <br />
      <form onSubmit={handleSubmit} noValidate>
      <div className="priceSelected">
        <p>
          <b>Precio seleccionado:&nbsp;</b>
          {precioSeleccionado}
        </p>
      </div>
      <br />
      <motion.button
        whileHover={{ backgroundColor: "rgb(134, 0, 0)" }}
        type="submit"
      >
        Siguiente
      </motion.button>
      </form>
    </div>
  );
}

export default Formulario3;
