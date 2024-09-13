import React from "react";
import './App.css';

function Cartao({ produto }) {
  return (
    <div className="cartao-container">
      <h2>{produto.nome}</h2>
      <p>Preço: R${produto.preco.toFixed(2)}</p>
    </div>
  );
}

export default Cartao;