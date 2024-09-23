/* import React, { useState, useRef } from "react";
import Boton from "./Reutilizables/Boton.jsx";
import InputField from "./Reutilizables/InputField.jsx";

const users = [
  { username: "ITPOWERBANK", password: "2024" },
  { username: "USUARIO1", password: "1234" },
];

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

  const handleClear = () => {
    setUsername("");
    setPassword("");
    setErrorMessage("");
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form ref={formRef} onSubmit={handleLogin} autoComplete="off">
        {" "}
        <InputField
          label="Usuario"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Ingresa tu nombre de usuario"
          required
          autoComplete="off" // FALTABA AUTOCOMPLETE✅
        />
        <InputField
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingresa tu contraseña"
          required
          autoComplete="off" // FALTABA AUTOCOMPLETE✅
        />
        <Boton type="submit" text="Iniciar Sesión" />
        <Boton type="button" text="Limpiar" onClick={handleClear} />{" "}
        {/* FALTABA HANDLE CLEAR */
     /*  </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}
 */
/* export default Login;
// ORIGINAL; */ 

import React, { useState, useRef, useEffect } from "react";
import Boton from "./Reutilizables/Boton.jsx";
import InputField from "./Reutilizables/InputField.jsx";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Verificar si ya hay una sesión activa en localStorage cuando el componente se monta
  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated"); 
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);
  
  // Lista de usuarios
  const users = [
    { username: "ITPOWERBANK", password: "2024" },
    { username: "USUARIO1", password: "1234" },
  ];

  // Verificar si ya hay una sesión activa en localStorage cuando el componente se monta
  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
      onLogin(); // Llama a la función de App para manejar la autenticación global
    }
  }, [onLogin]);

  const handleLogin = (e) => {
    e.preventDefault();
    const userExists = users.some(
      (user) => user.username === username && user.password === password
    );
    if (userExists) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true"); // Guardar la sesión en localStorage
      onLogin(); // Llama a la función de App para manejar la autenticación global
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
      <form ref={formRef} onSubmit={handleLogin} autoComplete="off">
        <InputField
          label="Usuario"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Ingresa tu nombre de usuario"
          required
          autoComplete="off"
        />
        <InputField
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingresa tu contraseña"
          required
          autoComplete="off"
        />
        <Boton type="submit" text="Iniciar Sesión" />
        <Boton type="button" text="Limpiar" onClick={handleClear} />
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}

export default Login;
