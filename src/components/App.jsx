import React, { useEffect, useState } from 'react';
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
  const [baseCurrency, setBaseCurrency] = useState('rub');
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json';

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const keys = Object.keys(json);
        setCurrencies(keys);
      });
  }, []);

  return (
    <Router>
      <div className="App container">
        <Link className="navigation-item" to="/">Convert</Link>
        <Link className="navigation-item" to="/currencies">Currencies</Link>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <CurrencyConverter
              baseCurrency={baseCurrency}
              setBaseCurrency={setBaseCurrency}
            />
          }
        />
        <Route
          path="/currencies"
          element={
            <Currencies
              baseCurrency={baseCurrency}
              setBaseCurrency={setBaseCurrency}
              currencies={currencies}
              setCurrencies={setCurrencies}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
