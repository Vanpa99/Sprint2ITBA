import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      {/* <Sidebar /> */}
      {/* <Footer /> */}
      <p>ashe</p>
      <Routes>
        {/* <Route path="/" element={< />} /> */}
        {/* <Route path="/" element={< />} /> */}
        {/* <Route path="/" element={< />} /> */}
        {/* <Route path="/" element={< />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
