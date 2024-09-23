import React from "react";

export const opcionesAccion = [
  { value: "transferencia", label: "Transferencia" },
  { value: "pago", label: "Pago" },
]; // MANDAR A "SELECTOR" (y hacer que funcione)

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

export default Selector;
