import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Boton from "./components/Reutilizables/Boton";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Cuentas from "./components/Cuentas";
import Pagar from "./components/Pagar";
import Prestamos from "./components/Prestamos";
import Login from "./components/Login";
import "./App.css";

function App() {
  // Lista de usuarios inicial, modificar aquí para agregar más usuarios
  const [users] = useState([
    { username: "ITPOWERBANK", password: "2024" },
    { username: "USUARIO1", password: "1234" }, // Agrega más usuarios aquí
  ]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    // Verificar si las credenciales coinciden con algún usuario en la lista
    const userExists = users.some(
      (user) => user.username === username && user.password === password
    );
    if (userExists) {
      setIsAuthenticated(true);
      return true; // Inicio de sesión exitoso
    }
    return false; // Inicio de sesión fallido
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <>
          <Header />
          <Sidebar />
          <Boton text="Cerrar sesión" onClick={handleLogout} />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/cuentas" element={<Cuentas />} />
            <Route path="/pagar" element={<Pagar />} />
            <Route path="/prestamos" element={<Prestamos />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </BrowserRouter>
  );
}

export default App;
