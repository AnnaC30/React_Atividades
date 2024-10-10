import React from 'react';

const Verduras = () => {
  const verduras = ['Alface', 'Couve', 'Espinafre'];

  return (
    <div>
      <h2>Verduras</h2>
      <ul>
        {verduras.map((verdura, index) => (
          <li key={index}>{verdura}</li>
        ))}
      </ul>
    </div>
  );
};

export default Verduras;