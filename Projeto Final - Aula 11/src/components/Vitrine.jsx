import React, { useEffect, useState } from 'react';
import Cartao from './Cartao';

function Vitrine() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/produtos')
      .then((response) => response.json())
      .then((data) => {
        setProdutos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Vitrine de Produtos</h1>
      <div>
        {produtos.map((produto) => (
          <Cartao key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}

export default Vitrine;