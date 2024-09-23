import React, { useState, useRef } from "react";
import Boton from "./Reutilizables/Boton.jsx";
import InputField from "./Reutilizables/InputField.jsx";
import reut from "../modules/Reut.module.css";

const users = [
  { username: "ITPOWERBANK", password: "2024" },
  { username: "USUARIO1", password: "1234" },
];

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const formRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const loginSuccess = onLogin(username, password);
    setErrorMessage(
      loginSuccess ? "" : "Nombre de usuario o contraseña incorrectos"
    );
  };

  // const handleClear = () => {
  //   setUsername("");
  //   setPassword("");
  //   setErrorMessage("");
  // };
  //  SE VUELVE A AUTOCOMPLETAR
  return (
    <div className={reut.formContainer}>
      <h2 className={reut.sectionTitle}>Iniciar Sesión</h2>
      <form onSubmit={handleLogin} autoComplete="off">
        <InputField
          label="Usuario:"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Ingresa tu nombre de usuario"
          required
          autoComplete="off" // FALTABA AUTOCOMPLETE
        />
        <InputField
          label="Contraseña:"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingresa tu contraseña"
          required
          autoComplete="off" // FALTABA AUTOCOMPLETE
        />
        <div className={reut.btnContainer}>
          <Boton type="submit" text="Iniciar Sesión" />
          <Boton type="button" text="Limpiar" action="clear" />
        </div>
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}

export default Login;
// ORIGINAL;
