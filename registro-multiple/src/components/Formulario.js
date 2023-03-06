import React, { useState } from "react";
import Formulario1 from "./Formulario1";
import Formulario2 from "./Formulario2";
import Formulario3 from "./Formulario3";
import Formulario4 from "./Formulario4";
import CuentaCreada from "./CuentaCreada";
import "./firstPage.css";

function Formulario() {
  const [paginaActual, setPaginaActual] = useState(1);

  function siguientePagina() {
    setPaginaActual(paginaActual + 1);
  }

  return (
    <div
      className="divs"
      style={{
        backgroundColor: paginaActual !== 1 ? "#eaeaea" : "",
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
      {paginaActual === 3 && <Formulario3 nextPage={siguientePagina} />}
      {paginaActual === 4 && <Formulario4 onValidInputs={siguientePagina} />}
      {paginaActual === 5 && <CuentaCreada />}
    </div>
  );
}

export default Formulario;
