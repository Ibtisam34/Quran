import { combineReducers } from 'redux';
import quranEditionsReducer from './quranEditionsReducer';
const rootReducer = combineReducers({
  quranEditions: quranEditionsReducer,
});
export default rootReducer;