import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Boton from "./Reutilizables/Boton.jsx";
import InputField from "./Reutilizables/InputField.jsx";

const users = [
  { username: "ITPOWERBANK", password: "2024" },
  { username: "USUARIO1", password: "1234" },
];

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const userExists = users.some(
      (user) => user.username === username && user.password === password
    );
    if (userExists) {
      onLoginSuccess();
    } else {
      setErrorMessage("Nombre de usuario o contraseña incorrectos");
    }
  };

  const handleClear = () => {
    setUsername("");
    setPassword("");
    setErrorMessage("");
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form ref={formRef} onSubmit={handleLogin} autoComplete="off"> {/* FALTABA APAGAR AUTOCOMPLETE */}
        <InputField
          label="Usuario"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Ingresa tu nombre de usuario"
          required
          autoComplete="off"  // FALTABA AUTOCOMPLETE
        />
        <InputField
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingresa tu contraseña"
          required
          autoComplete="off"  // FALTABA AUTOCOMPLETE
        />
        <Boton type="submit" text="Iniciar Sesión" />
        <Boton type="button" text="Limpiar" onClick={handleClear} /> {/* FALTABA HANDLE CLEAR */}
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}

Login.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

export default Login;

// ORIGINAL;
