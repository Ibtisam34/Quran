export const FETCH_QURAN_EDITIONS_REQUEST = 'FETCH_QURAN_EDITIONS_REQUEST';
export const FETCH_QURAN_EDITIONS_SUCCESS = 'FETCH_QURAN_EDITIONS_SUCCESS';
export const FETCH_QURAN_EDITIONS_FAILURE = 'FETCH_QURAN_EDITIONS_FAILURE';
export const fetchQuranEditions = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_QURAN_EDITIONS_REQUEST });
    fetch('http://api.quran-tafseer.com/quran/')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: FETCH_QURAN_EDITIONS_SUCCESS, payload: data.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_QURAN_EDITIONS_FAILURE, payload: error.message });
      });
  };
};