import React, { useState, useRef } from "react";
import Boton from "./Reutilizables/Boton.jsx";
import InputField from "./Reutilizables/InputField.jsx";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const loginSuccess = onLogin(username, password);
    setErrorMessage(
      loginSuccess ? "" : "Nombre de usuario o contraseña incorrectos"
    );
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form ref={formRef} onSubmit={handleLogin}>
        <InputField
          label="Usuario"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Ingresa tu nombre de usuario"
          required
        />
        <InputField
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingresa tu contraseña"
          required
        />
        <Boton type="submit" text="Iniciar Sesión" />
        <Boton type="button" text="Limpiar" formRef={formRef} />
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}

export default Login;
