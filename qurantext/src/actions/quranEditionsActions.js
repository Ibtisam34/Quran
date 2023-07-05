import axios from 'axios';
import {
  FETCH_QURAN_EDITIONS_SUCCESS,
  FETCH_QURAN_EDITIONS_FAILURE
} from './types';
export const fetchQuranEditions = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://api.quran-tafseer.com/quran/');
      const data = response.data; // Access the top-level data property
      console.log(data);
      dispatch({ type: FETCH_QURAN_EDITIONS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_QURAN_EDITIONS_FAILURE, payload: error.message });
    }
  };
};
