import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/PaginaInicial";
import Vitrine from "./components/Vitrine";
import Detalhes from "./components/Detalhes";
import Sobre from "./components/Sobre";
import Pagina404 from "./components/Pagina404";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/vitrine">Vitrine</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vitrine" element={<Vitrine />} />
          <Route path="/detalhes/:id" element={<Detalhes />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<Pagina404 />} /> {}
        </Routes>
      </div>
    </Router>
  );
}

export default App;