import React from 'react';
import Pagination from './Pagination';

const App = () => {
  const totalPages = 10;

  return (
    <div>
      <h1>Exemplo de Paginação</h1>
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default App;