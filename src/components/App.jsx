import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Currencies from '../pages/Currencies';
import CurrencyConverter from '../pages/CurrencyConverter';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App container">
        <Link class="navigation-item" to="/">Convert</Link>
        <Link class="navigation-item" to="/currencies">Currencies</Link>
      </div>

      <Routes>
        <Route path="/" element={<CurrencyConverter />} />
        <Route path="/currencies" element={<Currencies />} />
      </Routes>
    </Router>
  );
}

export default App;
