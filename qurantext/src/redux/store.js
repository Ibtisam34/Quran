import { createStore } from 'redux';
import quranReducer from './reducers/quranReducer';
const store = createStore(quranReducer);
export default store;