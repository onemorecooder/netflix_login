import React, { useState } from "react";

function Formulario2({ onValidEmail }) {
  // Aquí colocas el código de tu formulario 2

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
    <div className='form2'>
    <span>PASO 1 DE 3</span>
      <h1 className='title2'>Crea una contraseña para<br/>empezar la suscripción</h1>
      <p className='text2'>¡Faltan solo unos pasos!<br/>También odiamos el papeleo</p>
      {/* <input className='input2' type={Text} placeholder={"Dirección de correo"}></input><br/>
      <input className='input2' type={'password'} placeholder={"Añadir una contraseña"}></input><br/> */}
      <form onSubmit={handleSubmit}>
      <div className="group2">
      <input
            className="in1"
            type="email"
            placeholder="a"
            id="email"
            required
            value={email}
            onChange={handleEmailChange}
          />
          <label className="inputTwo">Dirección de correo</label>
        </div>
        <br/>
        <div className="group2">
          <input className="in1" type="password" placeholder="a" pattern=".{5,60}" id="name" required="required" />
          <label className="inputTwo">Añadir una contraseña</label>
        </div>
        
      <p className='textP'><input className='check' type={'checkbox'}></input>No, no quiero ofertas especiales de Netflix por correo.</p>
      <br /><br />
      <button type="submit">Siguiente</button>
      </form>
    </div>
  );
}

export default Formulario2;
