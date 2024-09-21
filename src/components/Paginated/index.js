import React from "react";

import "./index.css";

const Paginated = ({ page, setPage, total }) => {
  const handlePrevious = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < total) {
      setPage(page + 1);
    }
  };

  return (
    <div className="pagination">
      {page !== 0 && (
        <div className="prev">
          <button onClick={handlePrevious}>Anterior</button> <p>{page}</p>
        </div>
      )}
      <span id="currentPage">{page + 1}</span>
      {page !== total && (
        <div className="next">
          <p>{page + 2}</p>
          <button onClick={handleNext}>Siguiente</button>
        </div>
      )}
    </div>
  );
};

export default Paginated;
