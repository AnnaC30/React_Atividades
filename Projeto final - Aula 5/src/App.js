import React from "react";
import Cartao from "./Cartao";
import './App.css';

const produtos = [
  { id: 1, nome: "Maria-Mole", preco: 4.0 },
  { id: 2, nome: "Paçoca", preco: 3.0 },
  { id: 3, nome: "Brigadeiro", preco: 2.5 },
];

function App() {
  return (
    <div className="app-container">
      <h1>Vitrine de Produtos</h1>
      <div className="vitrine-container">
        {produtos.map((produto) => (
          <Cartao key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}

export default App;