import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuranData } from '../redux/actions/quranActions';
import axios from 'axios';
const Quran = () => {
  const dispatch = useDispatch();
  const quranData = useSelector(state => state);
  useEffect(() => {
    const fetchQuranData = async () => {
      try {
        const response = await axios.get('http://api.alquran.cloud/v1/quran');
        dispatch(setQuranData(response.data.data));
      } catch (error) {
        console.error('Error fetching Quran data:', error);
      }
    };
    fetchQuranData();
  }, [dispatch]);
  if (!quranData) {
    return <div>Loading...</div>;
  }
  const renderAyahs = () => {
    return quranData.surahs.map(surah => (
      <div key={surah.number}>
        <h2>{surah.englishName}</h2>
        {surah.ayahs.map(ayah => (
          <div key={ayah.number}>
            <p>
              {ayah.text}
              <span>{ayah.numberInSurah}</span>
            </p>
          </div>
        ))}
      </div>
    ));
  };
  return <div>{renderAyahs()}</div>;
};
export default Quran;