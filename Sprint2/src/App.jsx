import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Inicio from "./components/Inicio";
import Cuentas from "./components/Cuentas";
import Pagar from "./components/Pagar";
import Prestamos from "./components/Prestamos";
import Footer from "./components/Footer";
import "./App.css";
import Boton from "./components/Boton";

function App() {
  // Estado para los campos del formulario
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  // Credenciales fijas
  const fixedUsername = "ITPOWERBANK";
  const fixedPassword = "2024";

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    if (username === fixedUsername && password === fixedPassword) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Nombre de usuario o contraseña incorrectos");
      setIsLoggedIn(false);
    }
  };

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        //Si el usuario está logueado, mostramos el contenido de la aplicación
        <div>
          <Header />
          <Sidebar />
          <Boton text="Cerrar sesión" onClick={handleLogout} />
          {/* <Boton text="ASHE"/> */}

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/cuentas" element={<Cuentas />} />
            <Route path="/pagar" element={<Pagar />} />
            <Route path="/prestamos" element={<Prestamos />} />
          </Routes>
          <Footer />
        </div>
      ) : (
        //Si el usuario no está logueado, mostramos el formulario de inicio de sesión

        <div>
          <h1>¡Bienvenido a IT POWER BANK!</h1>
          <br />
          <h3>Por favor, ingrese sus credenciales para iniciar sesión:</h3>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nombre de usuario"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
          />
          <Boton text="Iniciar sesión" onClick={handleLogin} />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
