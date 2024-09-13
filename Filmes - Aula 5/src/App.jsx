import React from 'react';
import ReactDOM from 'react-dom';
import Filme from './Filmes';

const App = () => {
  return (
    <div>
      <h1>Lista de Filmes</h1>
      {}
      <Filme titulo="As Branquelas" genero="Comédia" />
      <Filme titulo="Jogos Mortais" genero="Terror" />
      <Filme titulo="Crepúsculo" genero="Drama" />
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));