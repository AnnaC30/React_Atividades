import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/movies/:genre" element={<MovieList />} />
        <Route path="/" element={<h1>Bem-vindo ao sistema de filmes!</h1>} />
      </Routes>
    </Router>
  );
};

export default App;