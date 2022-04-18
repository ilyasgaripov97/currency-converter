import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Currencies from '../pages/Currencies';
import CurrencyConverter from '../pages/CurrencyConverter';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">CurrencyConverter</Link>
        <Link to="/currencies">Currencies</Link>
      </div>

      <Routes>
        <Route path="/" element={<CurrencyConverter />} />
        <Route path="/currencies" element={<Currencies />} />
      </Routes>
    </Router>
  );
}

export default App;
