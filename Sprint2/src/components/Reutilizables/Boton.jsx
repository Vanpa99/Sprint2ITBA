import React from "react";
import PropTypes from "prop-types";

function Boton({
  text,
  onClick,
  type = "button",
  className = "",
  dataAccount,
  formRef,
  onClear, // Asegúrate de agregar esta prop para manejar la limpieza
}) {

  const handleClick = (e) => {
    // Ejecutar la función onClick si está definida
    if (onClick) {
      onClick(e);
    }
  
    // Si el botón es de tipo "Limpiar" y tenemos una referencia al formulario
    if (type === "button" && text === "Limpiar" && formRef?.current) {
      // Limpia todos los inputs dentro del formulario (usando el DOM)
      const inputs = formRef.current.querySelectorAll("input, textarea");
      inputs.forEach((input) => {
        if (input.type === "checkbox" || input.type === "radio") {
          input.checked = false; // Desmarcar checkboxes y radios
        } else {
          input.value = ""; // Limpiar otros tipos de inputs
        }
      });
  
      // Si hay una función onClear pasada como prop, la llamamos (esto es opcional)
      if (onClear) {
        onClear(); // Permitir que el componente padre haga cualquier limpieza adicional de estados
      }
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
  onClear: PropTypes.func, // Asegúrate de agregar esta prop
};

export default Boton;
