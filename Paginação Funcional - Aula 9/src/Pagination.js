import React, { useState } from "react";

const Pagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={handlePrev} disabled={currentPage === 1}>
        Voltar
      </button>

      <span>Página {currentPage} de {totalPages}</span>

      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Avançar
      </button>
    </div>
  );
};

export default Pagination;