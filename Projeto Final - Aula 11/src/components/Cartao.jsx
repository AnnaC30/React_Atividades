import React, { useState } from 'react';

function Cartao({ produto }) {
  const [quantidade, setQuantidade] = useState(0);

  const handleQuantidadeChange = (e) => {
    const valor = parseInt(e.target.value);
    setQuantidade(valor >= 0 ? valor : 0);
  };

  return (
    <div>
      <h2>{produto.nome}</h2>
      <p>Preço: R${produto.preco.toFixed(2)}</p>

      <input
        type="number"
        value={quantidade}
        onChange={handleQuantidadeChange}
        min="0"
      />

      <button
        onClick={() => alert(`Comprou ${quantidade} ${produto.nome}`)}
        disabled={quantidade === 0}
      >
        Comprar
      </button>
    </div>
  );
}

export default Cartao;