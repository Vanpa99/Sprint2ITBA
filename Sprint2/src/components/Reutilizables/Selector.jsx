import React from "react";

function Selector({ name, label, options, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Selector;
