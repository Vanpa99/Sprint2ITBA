import React from "react";
import PropTypes from "prop-types";
import Logo from "../assets/LogoITPowerBank.png";
import Boton from "./Reutilizables/Boton";

function Header({ handleLogout }) {
  return (
    <header className="encabezado">
      <div className="logo">
        <img src={Logo} alt="Logo de la Empresa" />
      </div>
      <h2 className="saludo">¡Bienvenido!</h2>
      <Boton text="Cerrar sesión" onClick={handleLogout} className="no-flex" />
    </header>
  );
}

Header.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default Header;
