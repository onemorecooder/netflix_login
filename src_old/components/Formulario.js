import React, { useState } from "react";
import Formulario1 from "./Formulario1";
import Formulario2 from "./Formulario2";
import Formulario3 from "./Formulario3";
import Formulario4 from "./Formulario4";
import CuentaCreada from "./CuentaCreada";
import "./firstPage.css";

function Formulario() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [texto, setTexto] = useState('');

  function siguientePagina() {
    setPaginaActual(paginaActual + 1);
  }

  function volverPaginaAnterior() {
    setPaginaActual(paginaActual - 1);
  }

  function setTextoFormulario3(nuevoTexto) {
    setTexto(nuevoTexto);
  }

  return (
    <div
      className="divs"
      style={{
        backgroundColor: paginaActual !== 5 && paginaActual !== 1 ? "#eaeaea" : "unset",
        width: paginaActual === 1 ? "600px" :
          paginaActual === 3 ? "94%" : "465px",
        marginTop: paginaActual === 1 ? "10vh" :
          paginaActual === 2 ? "12vh" :
            paginaActual === 3 ? "5vh" :
              paginaActual === 4 ? "5vh" : "15vh"
      }}
    >
      {paginaActual === 1 && <Formulario1 onValidEmail={siguientePagina} />}
      {paginaActual === 2 && <Formulario2 onValidEmail={siguientePagina} />}
      {paginaActual === 3 && <Formulario3 nextPage={siguientePagina} setTextoFormulario3={setTextoFormulario3} />}
      {paginaActual === 4 && <Formulario4 onValidInputs={siguientePagina} volverPaginaAnterior={volverPaginaAnterior} texto={texto} />}
      {paginaActual === 5 && <CuentaCreada />}
    </div>
  );
}

export default Formulario;
