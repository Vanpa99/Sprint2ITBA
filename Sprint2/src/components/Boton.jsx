import React from "react";
import PropTypes from "prop-types";

function Boton({
  text,
  onClick,
  type = "button",
  className = "",
  dataAccount,
}) {
  const handleClear = () => {
    setUsername("");
    setPassword("");
    setErrorMessage(""); // Limpiar el mensaje de error
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      dataAccount={dataAccount}
    >
      {text}
    </button>
  );
}

Boton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Boton;
