import React from 'react';
import image from '../img/cards.png';

function Formulario4() {
  return (
    <div className='form2'>
    <span>PASO 3 DE 3</span>
      <h1>Configura tu tarjeta de<br/>crédito o débito</h1>
      <img className='im' src={image} alt={"img"}/>
      {/* <input className='input2' type={Text} placeholder={"Nombre"}></input><br/>
      <input className='input2' type={Text} placeholder={"Apellidos"}></input><br/>
      <input className='input2' type={Text} placeholder={"Número de tarjeta"}></input><br/>
      <input className='input2' type={Text} placeholder={"Fecha de vencimiento (MM/AA)"}></input><br/>
      <input className='input2' type={Text} placeholder={"Código de seguridad (CVV)"}></input><br/> */}

      <div className="group2">
          <input type="text" id="name" required="required" />
          <label className="inputTwo">Nombre</label>
        </div>
        <br/>
        <div className="group2">
          <input type="text" id="name" required="required" />
          <label className="inputTwo">Apellidos</label>
        </div>
        <br/>
        <div className="group2">
          <input type="text" id="name" required="required" />
          <label className="inputTwo">Número de tarjeta</label>
        </div>
        <br/>
        <div className="group2">
          <input type="text" id="name" required="required" />
          <label className="inputTwo">Fecha de vencimiento (MM/AA)</label>
        </div>
        <br/>
        <div className="group2">
          <input type="text" id="name" required="required" />
          <label className="inputTwo">Código de seguridad (CVV)</label>
        </div>
        <br/>
    </div>
  );
}

export default Formulario4;
