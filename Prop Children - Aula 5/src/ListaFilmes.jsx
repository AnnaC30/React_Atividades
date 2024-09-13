import React from 'react';

const ListaFilmes = ({ children }) => {
  const filmesArray = React.Children.toArray(children);

  return (
    <ol>
      {filmesArray.map((filme, index) => (
        <li key={index}>{filme}</li>
      ))}
    </ol>
  );
};

export default ListaFilmes;