import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuranEditions } from '../actions/quranEditionsActions';
import './QuranEditions.css';
const QuranEditions = () => {
  const dispatch = useDispatch();
  const { editions, loading, error } = useSelector((state) => state.quranEditions);
  useEffect(() => {
    dispatch(fetchQuranEditions());
  }, [dispatch]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="quran-editions">
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