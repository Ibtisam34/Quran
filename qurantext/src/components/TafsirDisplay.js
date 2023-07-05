import React from 'react';
const TafsirDisplay = ({ verse }) => {
  if (!verse) {
    return <div>No verse selected</div>;
  }
  return (
    <div>
      <h3>Tafsir Display</h3>
      <p>Tafsir: {verse.tafsir}</p>
    </div>
  );
};
export default TafsirDisplay;