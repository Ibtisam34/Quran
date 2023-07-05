import React, { useState } from 'react';
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };
  return (
    <form onSubmit={handleSearchSubmit}>
      <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search verses" />
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchBar;