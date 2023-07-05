import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import QuranEditions from './components/QuranEditions';
const App = () => {
  return (
    <Provider store={store}>
      <QuranEditions />
    </Provider>
  );
};
export default App;