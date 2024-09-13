import React from 'react';
import ReactDOM from 'react-dom';

    const Doce = ({ nome, preco }) => (
      <div className="doce">
        <h3>{nome}</h3>
        <p>Preço: R${preco}</p>
      </div>
    );
    
    const ListaDoces = () => {
      const doces = [
        { id: 1, nome: 'Brigadeiro', preco: 2.0 },
        { id: 2, nome: 'Paçoca', preco: 2.5 },
        { id: 3, nome: 'Cajuzinho', preco: 4.0 },
      ];
    
      return (
        <div className="lista-doces">
          {doces.map((doce) => (
            <Doce key={doce.id} nome={doce.nome} preco={doce.preco} />
          ))}
        </div>
      );
    };
    
    const App = () => (
      <div>
        <h1>Lista de Doces</h1>
        <ListaDoces />
      </div>
    );
    
    export default App;
    
    ReactDOM.render(<App />, document.getElementById('root'));