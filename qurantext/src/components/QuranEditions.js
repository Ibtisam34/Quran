import React, { useEffect, useState } from 'react';
import QuranApi from '../services/QuranApi';
import VerseDisplay from './VerseDisplay';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import BookmarkList from './BookmarkList';
import RecitationPlayer from './RecitationPlayer';
import TranslationSwitcher from './TranslationSwitcher';
import TafsirDisplay from './TafsirDisplay';
const QuranEditions = () => {
  const [editions, setEditions] = useState([]);
  const [selectedVerse, setSelectedVerse] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedChapter, setSelectedChapter] = useState(null); // State variable to track the selected chapter
  useEffect(() => {
    const fetchQuranicEditions = async () => {
      try {
        const data = await QuranApi.fetchQuranicText();
        setEditions(data);
      } catch (error) {
        console.log('Error fetching Quran editions:', error);
      }
    };
    fetchQuranicEditions();
  }, []);
  const handleChapterSelect = (chapter) => {
    setSelectedChapter(chapter);
  };
  // Function to get the verses of the selected chapter
  const getVersesOfChapter = (chapter) => {
    if (!chapter || !editions.length) return [];
    const chapterId = chapter.chapter_id;
    const edition = editions.find((edition) => edition.chapter_id === chapterId);
    if (!edition) return [];
    return edition.verses;
  };
  // Get the verses of the selected chapter
  const versesOfChapter = getVersesOfChapter(selectedChapter);
  return (
    <div>
      <h1>Quran Editions</h1>
      {/* Display the selected chapter */}
      {selectedChapter && (
        <div>
          <h2>{selectedChapter.name_simple}</h2>
          {/* Display the verses of the selected chapter */}
          {versesOfChapter.map((verse) => (
            <p key={verse.verse_key}>{verse.text_madani}</p>
          ))}
        </div>
      )}
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={searchResults} />
      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
      <BookmarkList bookmarks={bookmarks} />
      <RecitationPlayer reciter={selectedReciter} />
      <TranslationSwitcher
        translations={translations}
        selectedTranslation={selectedTranslation}
        onTranslationChange={handleTranslationChange}
      />
      <TafsirDisplay verse={selectedVerse} />
    </div>
  );
};
export default QuranEditions;