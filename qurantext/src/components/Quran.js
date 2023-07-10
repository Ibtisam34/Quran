import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Quran = () => {
  const [quranData, setQuranData] = useState(null);
  useEffect(() => {
    const fetchQuranData = async () => {
      try {
        const response = await axios.get('http://api.alquran.cloud/v1/quran');
        setQuranData(response.data.data);
      } catch (error) {
        console.error('Error fetching Quran data:', error);
      }
    };
    fetchQuranData();
  }, []);
  if (!quranData) {
    return <div>Loading...</div>;
  }
  const renderAyahs = () => {
    return quranData.surahs.map(surah => (
      <div key={surah.number}>
        <h2>{surah.englishName}</h2>
        {surah.ayahs.map(ayah => (
          <div key={ayah.number}>
            <p>{ayah.text}</p>
          </div>
        ))}
      </div>
    ));
  };
  return <div>{renderAyahs()}</div>;
};
export default Quran;