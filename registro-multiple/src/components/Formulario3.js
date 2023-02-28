import React from "react";
import { motion } from "framer-motion";
import check from "../img/check.png";

function Formulario3() {
  return (
    <div className="form2">
      <span>PASO 2 DE 3</span>
      <h1 className="title2">Selecciona el plan perfecto para ti</h1>
      <ul>
        <li><img className="checks" src={check} alt=""></img>    Ve todo lo que quieras.</li>
        <li><img className="checks" src={check} alt=""></img>    Recomendaciones exclusivas para ti.</li>
        <li><img className="checks" src={check} alt=""></img>    Cambia plan o cancélalo cuando quieras.</li>
      </ul>

      <table>
        <tr>
          <td></td>
          <td>
            <motion.button className="buttonTable"
            whileHover={{ backgroundColor: "rgb(134, 0, 0)" }}
            >
              Básico
              <br />
              con
              <br />
              anuncios
            </motion.button>
          </td>
          <td>
            <motion.button className="buttonTable"
            whileHover={{ backgroundColor: "rgb(134, 0, 0)" }}
            >Estándar</motion.button>
          </td>
          <td>
            <motion.button className="buttonTable"
            whileHover={{ backgroundColor: "rgb(134, 0, 0)" }}
            >Premium</motion.button>
          </td>
        </tr>
        <tr>
          <td>Precio al mes</td>
          <td className="centered">5,49€</td>
          <td className="centered">12,99€</td>
          <td className="centered">17,99€</td>
        </tr>
        <tr>
          <td>Calidad de video</td>
          <td className="centered">Buena</td>
          <td className="centered">Muy Buena</td>
          <td className="centered">Excepcional</td>
        </tr>
        <tr>
          <td>Resolución</td>
          <td className="centered">720p</td>
          <td className="centered">1080p</td>
          <td className="centered">4K+HDR</td>
        </tr>
        <tr>
          <td>Multidispositivo: TV, ordenador, teléfono<br/>móvil y tableta</td>
          <td className="centered"><img className="checks" src={check} alt=""></img></td>
          <td className="centered"><img className="checks" src={check} alt=""></img></td>
          <td className="centered"><img className="checks" src={check} alt=""></img></td>
        </tr>
        <tr>
          <td>Descargas</td>
          <td className="centered" style={{color: "red", fontSize: "40px"}}><b>-</b></td>
          <td className="centered"><img className="checks" src={check} alt=""></img></td>
          <td className="centered"><img className="checks" src={check} alt=""></img></td>
        </tr>
      </table>
    </div>
  );
}

export default Formulario3;
