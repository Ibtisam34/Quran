import { createStore, combineReducers } from 'redux';
import quranEditionsReducer from './reducers/quranEditionsReducer';
const rootReducer = combineReducers({
  quranEditions: quranEditionsReducer,
});
const store = createStore(rootReducer);
export default store;