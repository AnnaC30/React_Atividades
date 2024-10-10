import React, { useEffect, useState } from "react";
import Cartao from "./components/Cartao";
import './App.css';

function App() {
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
    return <div className="loading-container">Carregando...</div>;
  }

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