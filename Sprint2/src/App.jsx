import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
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

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated"); // Eliminar la sesión de localStorage
  };

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <>
          <Header handleLogout={handleLogout} />
          <div className="contenedor">
            <Sidebar />
            <div className="area-principal">
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/cuentas" element={<Cuentas />} />
                <Route path="/pagar" element={<Pagar />} />
                <Route path="/prestamos" element={<Prestamos />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </BrowserRouter>
  );
}

export default App;

// ORIGINAL
