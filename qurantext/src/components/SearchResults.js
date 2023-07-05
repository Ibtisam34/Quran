import React from 'react';
const SearchResults = ({ results }) => {
  if (results.length === 0) {
    return <div>No results found</div>;
  }
  return (
    <div>
      <h3>Search Results</h3>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <p>{result.text}</p>
            <p>{result.translation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SearchResults;