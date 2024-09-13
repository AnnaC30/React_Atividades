import React from 'react';
import ReactDOM from 'react-dom';

const Recebidas = ({ pacotes }) => (
  <div>
    <h2>Encomendas Recebidas</h2>
    <ul>
      {pacotes.map((pacote, index) => (
        <li key={index}>Pacote {pacote.id}: {pacote.descricao}</li>
      ))}
    </ul>
  </div>
);

const EmTransporte = ({ pacotes }) => (
  <div>
    <h2>Encomendas em Transporte</h2>
    <ul>
      {pacotes.map((pacote, index) => (
        <li key={index}>Pacote {pacote.id}: {pacote.descricao}</li>
      ))}
    </ul>
  </div>
);

const Entregues = ({ pacotes }) => (
  <div>
    <h2>Encomendas Entregues</h2>
    <ul>
      {pacotes.map((pacote, index) => (
        <li key={index}>
          Pacote {pacote.id}: {pacote.descricao} - Recebido por: {pacote.recebidoPor}
        </li>
      ))}
    </ul>
  </div>
);

const App = () => {
  const recebidas = [
    { id: 1, descricao: 'Livro do Crepúsculo' },
    { id: 2, descricao: 'Fone de ouvido da JBL' }
  ];

  const emTransporte = [
    { id: 3, descricao: 'Camiseta do Charlie Brown Jr.' },
    { id: 4, descricao: 'TV' }
  ];

  const entregues = [
    { id: 5, descricao: 'Celular', recebidoPor: 'Destinatário' },
    { id: 6, descricao: 'Mouse', recebidoPor: 'Outra pessoa no endereço' }
  ];

  return (
    <div>
      <Recebidas pacotes={recebidas} />
      <EmTransporte pacotes={emTransporte} />
      <Entregues pacotes={entregues} />
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));