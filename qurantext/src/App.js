import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Quran from './components/Quran';
const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Quran} />
      </div>
    </Router>
  );
};
export default App;