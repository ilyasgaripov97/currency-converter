import React, { useEffect } from 'react';
import { fetchCurrencies } from '../api/currency';
import { parseInput, convert } from '../api/converter';
import './Currencies.css';

function Currencies({
  baseCurrency,
  setBaseCurrency,
  currencies,
  setCurrencies,
}) {
  useEffect(() => {
    fetchCurrencies(baseCurrency).then((json) => setCurrencies(json));
  }, []);

  const handleCurrencyClick = (e, currency) => {
    setBaseCurrency(currency);
    fetchCurrencies(baseCurrency).then((json) => {
      setCurrencies(json);
    });
  };

  const exchangeRateList = (currencies) => {
    return Object.entries(currencies).map(([currency, exchangeRate]) => (
        <div className="currency" key={currency}
             onClick={(e) => handleCurrencyClick(e, currency)}>
          <div className="currency__code">
            {currency.toUpperCase()} =
            <span className="currency__exchange_rate">
            {' ' + exchangeRate}
          </span>
          </div>
        </div>
    ));
  };

  return (
      <div className="currencies">
        <div className="base">
          <div className="base__currency">{baseCurrency.toUpperCase()} = 1</div>
        </div>
        <div className="currencies-list">
          {exchangeRateList(currencies)}
        </div>
      </div>
  );
}

export default Currencies;
