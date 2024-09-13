import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Paginação from './Paginacao';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Exemplo de Paginação</h1>
        <Paginação totalPáginas={5} />  {}
      </div>
    );
  }
}

export default App
ReactDOM.render(<App />, document.getElementById('root'));