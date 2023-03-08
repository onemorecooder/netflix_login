import React from 'react';
import logo from "../img/logo.png";

function CuentaCreada() {
  return (
    <div className='creada'>
      <img className="logo" src={logo} alt=""></img>
      <h1 className="title">¡Cuenta creada con éxito!</h1>
      <h2 className="subtitle">
        Ahora a disfrutar de Netflix
        < br />
        y de todas sus funcionalidades.
      </h2>
    </div>
  );
}

export default CuentaCreada;