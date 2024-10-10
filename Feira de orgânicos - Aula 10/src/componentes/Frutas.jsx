import React from 'react';

const Frutas = () => {
  const frutas = ['Maçã', 'Banana', 'Laranja'];

  return (
    <div>
      <h2>Frutas</h2>
      <ul>
        {frutas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>
    </div>
  );
};

export default Frutas;