import React, { useEffect, useState } from "react";
import Cartao from "./Cartao";
import DetalhesProduto from './DetalhesProduto';
import './App.css';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProdutoId, setSelectedProdutoId] = useState(null);

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
    return <div className="loading-container">Carregando...</div>;
  }

  return (
    <div className="app-container">
      <h1>Vitrine de Produtos</h1>
      <div className="vitrine-container">
        {produtos.map((produto) => (
          <div key={produto.id} onClick={() => setSelectedProdutoId(produto.id)}>
            <Cartao produto={produto} />
          </div>
        ))}
      </div>

      {}
      {selectedProdutoId && <DetalhesProduto id={selectedProdutoId} />}
    </div>
  );
}

export default App;
