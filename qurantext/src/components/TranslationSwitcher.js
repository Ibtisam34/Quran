import React from 'react';
const TranslationSwitcher = ({ translations, selectedTranslation, onTranslationChange }) => {
  const handleTranslationChange = (event) => {
    const selectedTranslation = event.target.value;
    onTranslationChange(selectedTranslation);
  };
  return (
    <div>
      <h3>Translation Switcher</h3>
      <select value={selectedTranslation} onChange={handleTranslationChange}>
        {translations.map((translation) => (
          <option key={translation.id} value={translation.id}>
            {translation.language}
          </option>
        ))}
      </select>
    </div>
  );
};
export default TranslationSwitcher;