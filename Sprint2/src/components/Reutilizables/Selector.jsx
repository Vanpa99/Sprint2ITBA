import React from "react";

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
