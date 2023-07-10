const quranReducer = (state = null, action) => {
    switch (action.type) {
      case 'SET_QURAN_DATA':
        return action.payload;
      default:
        return state;
    }
  };
  export default quranReducer;