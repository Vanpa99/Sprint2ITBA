import React from "react";
import PropTypes from "prop-types";

function Boton({
  text,
  onClick,
  type = "button",
  className = "",
  dataAccount,
  // formRef,
  action, // Nueva prop para distinguir la acción (limpiar o enviar)
  formId, // Para vincular el botón con el formulario a enviar
}) {
  // const handleClick = (e) => {
  //   if (onClick) {
  //     onClick(e);
  //   }
  // if (type === "button" && text === "Limpiar" && formRef?.current) {
  //   const inputs = formRef.current.querySelectorAll("input");
  //   inputs.forEach((input) => {
  //     input.value = "";
  //   });
  // }
  // };

  const handleClear = () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.value = ""; // Limpia el valor de cada input
    });
  };

  // Función para enviar el formulario
  const handleSubmit = () => {
    const form = document.getElementById(formId); // Busca el formulario por ID
    if (form) {
      form.submit(); // Envía el formulario
      handleClear();
    }
  };

  // Función que se ejecuta al hacer clic en el botón
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    // const handleClicka = () => {
    if (action === "clear") {
      handleClear(); // Si la acción es limpiar, limpia los inputs
    } else if (action === "submit") {
      handleSubmit(); // Si la acción es enviar, envía el formulario
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
