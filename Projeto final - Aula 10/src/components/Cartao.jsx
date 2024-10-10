import React, { useState } from "react";

function Cartao({ produto }) {
  const [quantidade, setQuantidade] = useState(0);
  const [estoqueExcedido, setEstoqueExcedido] = useState(false);

  const handleQuantidadeChange = (e) => {
    const valor = parseInt(e.target.value);
    if (valor < 0) {
      setQuantidade(0);
    } else {
      setQuantidade(valor);
      setEstoqueExcedido(false);
    }
  };

  return (
    <div className="cartao-container">
      <h2>{produto.nome}</h2>
      <p>Preço: R${produto.preco.toFixed(2)}</p>

      <input
        type="number"
        value={quantidade}
        onChange={handleQuantidadeChange}
        min="0"
        placeholder="Quantidade desejada"
      />

      <button
        onClick={() => alert(`Comprou ${quantidade} ${produto.nome}`)}
        disabled={quantidade === 0 || estoqueExcedido}
      >
        Comprar
      </button>

      {estoqueExcedido && (
        <p style={{ color: 'red' }}>A quantidade excede o estoque disponível!</p>
      )}
    </div>
  );
}

export default Cartao;