import React, { useState, useEffect } from 'react';

const DetalhesProduto = ({ id }) => {
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/produtos${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduto(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar detalhes do produto:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Carregando detalhes do produto...</div>;
  }

  if (!produto) {
    return <div>Produto não encontrado!</div>;
  }

  return (
    <div className="detalhes-produto-container">
      <h2>{produto.nome}</h2>
      <p>Preço: R${produto.preco.toFixed(2)}</p>
      <p>Descrição: {produto.descricao}</p>
    </div>
  );
};

export default DetalhesProduto;