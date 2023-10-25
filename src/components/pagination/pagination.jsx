import React, { useState } from 'react';
import './pagination.css';

const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalCountries / countriesPerPage);

  const handleClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      paginate(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbersToRender = [];
    // const maxDisplayedPages = 3;

    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i >= 1 && i <= totalPages) {
        pageNumbersToRender.push(i);
      }
    }

    return pageNumbersToRender.map((number) => (
      <button
        key={number}
        onClick={() => handleClick(number)}
        className={`pagination-button ${currentPage === number ? 'active' : ''}`}
      >
        {number}
      </button>
    ));
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handleClick(currentPage - 1)}
        className={`prev-next-button ${currentPage === 1 ? 'disabled' : ''}`}
      >
        Prev
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handleClick(currentPage + 1)}
        className={`prev-next-button ${currentPage === totalPages ? 'disabled' : ''}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;


