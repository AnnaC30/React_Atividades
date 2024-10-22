import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detalhes() {
  const { id } = useParams();
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
        console.error('Erro ao buscar o produto:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!produto) {
    return <div>Produto não encontrado!</div>;
  }

  return (
    <div>
      <h1>{produto.nome}</h1>
      <p>Preço: R${produto.preco.toFixed(2)}</p>
    </div>
  );
}

export default Detalhes;