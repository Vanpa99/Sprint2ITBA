import { useState, useEffect } from "react";
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
  // Lista de usuarios inicial
  const [users] = useState([
    { username: "ITPOWERBANK", password: "2024" },
    { username: "USUARIO", password: "1234" },
  ]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verificar si ya hay una sesión activa en localStorage cuando el componente se monta
  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (username, password) => {
    const userExists = users.some(
      (user) => user.username === username && user.password === password
    );
    if (userExists) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true"); // Guardar la sesión en localStorage
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated"); // Eliminar la sesión de localStorage
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
