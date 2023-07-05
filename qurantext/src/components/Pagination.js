import React from 'react';
const Pagination = ({ currentPage, onPageChange }) => {
  const handlePageClick = (page) => {
    onPageChange(page);
  };
  return (
    <div>
      <button onClick={() => handlePageClick(currentPage - 1)}>Previous</button>
      <span>Page {currentPage}</span>
      <button onClick={() => handlePageClick(currentPage + 1)}>Next</button>
    </div>
  );
};
export default Pagination;