import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/listagem">Listagem de Filmes</Link></li>
          <li><Link to="/sinopse">Sinopse</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listagem" element={<MovieList />} />
        <Route path="/sinopse" element={<MovieDetails />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;