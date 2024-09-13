import React from 'react';

const Filme = ({ titulo, genero }) => {
  const estiloFilme = {
    border: '1px solid #000',
    padding: '20px',
    margin: '10px 0',
    borderRadius: '5px',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',  
    display: 'flex',     
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '150px',     
  };

  return (
    <div style={estiloFilme}>
      <h2>{titulo}</h2>
      <p>Gênero: {genero}</p>
    </div>
  );
};

export default Filme;