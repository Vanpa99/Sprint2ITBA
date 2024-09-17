import { useState } from "react";
import Boton from "./Boton";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Estado para el mensaje de error

  const handleLogin = (e) => {
    e.preventDefault();

    // Llamar a la función de inicio de sesión
    const loginSuccess = onLogin(username, password);

    if (!loginSuccess) {
      setErrorMessage("Nombre de usuario o contraseña incorrectos"); // Mostrar mensaje de error
    } else {
      setErrorMessage(""); // Limpiar el mensaje de error si el inicio de sesión es exitoso
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Usuario: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required // Añadir la propiedad required
          />
        </div>
        <div>
          <label>Contraseña: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required // Añadir la propiedad required
          />
        </div>
        <Boton type="submit" text="Iniciar Sesión" />
        {/* <Boton type="button" text="Limpiar" onClick={handleClear} /> */}
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}{" "}
      {/* Mostrar mensaje de error */}
    </div>
  );
}

export default Login;
