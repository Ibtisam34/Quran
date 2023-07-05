import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuranEditions } from '../actions/quranEditionsActions';
import VerseDisplay from './VerseDisplay';
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
  if (!editions || editions.length === 0) {
    return <div>No editions found.</div>;
  }
  const selectedEdition = editions[0];
  const chapter = 1; // Example chapter number
  const verse = 1; // Example verse number
  const translation = selectedEdition.verses[chapter][verse].translation; // Get the Arabic translation for the specified chapter and verse
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
      <VerseDisplay chapter={chapter} verse={verse} translation={translation} />
    </div>
  );
};
export default QuranEditions;