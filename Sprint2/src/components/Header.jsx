import styles from "../modules/Header.module.css";
import React from "react";
import PropTypes from "prop-types";
import Logo from "../assets/LogoITPowerBank.png";
import Boton from "./Reutilizables/Boton";

function Header({ handleLogout }) {
  return (
    <header className={styles.encabezado}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo de la Empresa" />
      </div>
      <h2 className={styles.saludo}>¡Bienvenido!</h2>
      <Boton
        text="Cerrar sesión"
        onClick={handleLogout}
        className={styles.noFlex}
      />
    </header>
  );
}

Header.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default Header;
