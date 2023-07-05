import React from 'react';
const VerseDisplay = ({ verse }) => {
  if (!verse) {
    return <div>No verse selected</div>;
  }
  return (
    <div>
      <h2>{verse.englishName}</h2>
      <p>Chapter: {verse.chapter}</p>
      <p>Verse: {verse.verse}</p>
      <p>Arabic Text: {verse.text}</p>
      <p>Translation: {verse.translation}</p>
    </div>
  );
};
export default VerseDisplay;