import {
    FETCH_QURAN_EDITIONS_SUCCESS,
    FETCH_QURAN_EDITIONS_FAILURE
  } from '../actions/types';
  const initialState = {
    editions: [],
    loading: false,
    error: null
  };
  const quranEditionsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_QURAN_EDITIONS_SUCCESS:
        return {
          ...state,
          editions: action.payload,
          loading: false,
          error: null
        };
      case FETCH_QURAN_EDITIONS_FAILURE:
        return {
          ...state,
          editions: [],
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  export default quranEditionsReducer;