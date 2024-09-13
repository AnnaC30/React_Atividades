import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from './Container';
import ListaFilmes from './ListaFilmes';
import Filme from './Filmes';

class App extends Component {
  render() {
    return (
      <Container>
        <h1>Lista de Filmes</h1>
        <ListaFilmes>
          <Filme titulo="As Branquelas" genero="Comédia" />
          <Filme titulo="Jogos Mortais" genero="Terror" />
          <Filme titulo="Crepúsculo" genero="Drama" />
        </ListaFilmes>
      </Container>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));