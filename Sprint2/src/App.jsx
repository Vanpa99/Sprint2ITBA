import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Inicio from "./components/Inicio"
import Cuentas from "./components/Cuentas"
import Pagar from "./components/Pagar"
import Prestamos from './components/Prestamos'
import Footer from "./components/Footer"
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Sidebar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cuentas" element={<Cuentas />} />
        <Route path="/pagar" element={<Pagar />} />
        <Route path="/prestamos" element={<Prestamos />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App
