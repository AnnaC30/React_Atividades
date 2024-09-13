import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeletorCores from './SeletorCores';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Seletor de Cores</h1>
        <SeletorCores />
      </div>
    );
  }
}

export default App
ReactDOM.render(<App />, document.getElementById('root'));