import React from "react";
import PropTypes from "prop-types";

function Boton({
  text,
  onClick,
  type = "button",
  className = "",
  dataAccount,
  formRef,
}) {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    if (type === "button" && text === "Limpiar" && formRef?.current) {
      const inputs = formRef.current.querySelectorAll("input");
      inputs.forEach((input) => {
        input.value = "";
      });
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={className}
      dataAccount={dataAccount}
      autoComplete="off"
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
  dataAccount: PropTypes.string,
  formRef: PropTypes.object,
};

export default Boton;
