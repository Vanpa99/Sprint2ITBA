/* import React from "react";
import BotonCambioMoneda from "./BotonCambioMoneda";

const opcionesMoneda = [
  { value: "ARS", label: "ARS" },
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
  { value: "BRL", label: "BRL" },
  { value: "CLP", label: "CLP" },
];

const manejarCambioMoneda = (e) => {
  setMonedaSeleccionada(e.target.value);
};

function Selector({ name, label, options, onChange, value, className }) {
  return (
    <div className="select-op">
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} onChange={onChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Selector; */

//selector que funca sin el selector de pagar.jsx

import React, { useState } from "react";

function Selector({ name, label, onChange, value, className }) {

const opcionesMoneda = [
  { value: "ARS", label: "ARS" },
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
  { value: "BRL", label: "BRL" },
  { value: "CLP", label: "CLP" },
];


  const [monedaSeleccionada, setMonedaSeleccionada] = useState(value);

  const manejarCambioMoneda = (e) => {
    const nuevaMoneda = e.target.value;
    setMonedaSeleccionada(nuevaMoneda);
    if (onChange) {
      onChange(e); // Llamar a onChange si se proporciona
    }
  };

  return (
    <div>
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      <select
        id={name}
        name={name}
        onChange={manejarCambioMoneda}
        value={monedaSeleccionada}
        className={`input-selector ${className}`}
      >
        {opcionesMoneda.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

//opciones pagos

function Pago({ name, label, options, onChange, value }) {
  return (
    <div className="select-op">
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} onChange={onChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}



export {Selector, Pago};

