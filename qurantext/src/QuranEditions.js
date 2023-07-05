import React, { useEffect, useState } from 'react';
const QuranEditions = () => {
  const [editions, setEditions] = useState([]);
  useEffect(() => {
    const fetchEditions = async () => {
      try {
        const response = await fetch('http://api.alquran.cloud/v1/edition');
        const data = await response.json();
        setEditions(data.data);
      } catch (error) {
        console.log('Error fetching Quran editions:', error);
      }
    };
    fetchEditions();
  }, []);
  return (
    <div>
      <h1>Quran Editions</h1>
      {editions.map((edition) => (
        <div key={edition.identifier}>
          <h2>{edition.englishName}</h2>
          <p>Identifier: {edition.identifier}</p>
          <p>Language: {edition.language}</p>
          <p>Format: {edition.format}</p>
        </div>
      ))}
    </div>
  );
};
export default QuranEditions;