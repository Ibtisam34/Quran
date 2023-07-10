import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Import Redux Thunk
import quranEditionsReducer from './reducers/quranEditionsReducer';
const rootReducer = combineReducers({
  quranEditions: quranEditionsReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk)); // Apply Redux Thunk middleware
export default store;