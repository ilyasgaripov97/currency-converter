import React, { useEffect } from 'react';
import './Currencies.css';

function Currencies({ baseCurrency, setBaseCurrency, currencies, setCurrencies }) {
  useEffect(() => {
    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${baseCurrency}.json`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setCurrencies(json[baseCurrency]);
      });
  }, []);

  const handleCurrencyClick = (e, currency) => {
    setBaseCurrency(currency);

    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${baseCurrency}.json`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setCurrencies(json[baseCurrency]);
      });
  }

  const exchangeRateList = (currencies) => {
    const list = Object.entries(currencies).map(([currency, exchangeRate]) => (
      <div className="currency" key={currency} onClick={(e) => handleCurrencyClick(e, currency)}>
        <div className="currency__code">
          {currency.toUpperCase()} =
          <span className="currency__exchange_rate">
            {' ' + exchangeRate}
          </span>
        </div>
      </div>
    ));

    return list;
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
