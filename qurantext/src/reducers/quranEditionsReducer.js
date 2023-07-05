import {
    FETCH_QURAN_EDITIONS_REQUEST,
    FETCH_QURAN_EDITIONS_SUCCESS,
    FETCH_QURAN_EDITIONS_FAILURE,
  } from '../actions/quranEditionsActions';
  const initialState = {
    editions: [],
    loading: false,
    error: null,
  };
  const quranEditionsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_QURAN_EDITIONS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_QURAN_EDITIONS_SUCCESS:
        return {
          ...state,
          loading: false,
          editions: action.payload,
        };
      case FETCH_QURAN_EDITIONS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export default quranEditionsReducer;