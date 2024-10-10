import React from 'react';

const Legumes = () => {
  const legumes = ['Cenoura', 'Batata', 'Abobrinha'];

  return (
    <div>
      <h2>Legumes</h2>
      <ul>
        {legumes.map((legume, index) => (
          <li key={index}>{legume}</li>
        ))}
      </ul>
    </div>
  );
};

export default Legumes;