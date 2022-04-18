import React from 'react';
import './Currencies.css';

const generateMockCurrencies = () => {
  const base = 'usd';
  const currencies = ['eur: 1.05', 'rub: 78.8 '];

  return currencies.map((currency) => <div>{currency}</div>);
};

function Currencies() {
  return (
    <div className="currencies">
      <div className="base">
        <div className="base__currency">USD = 1</div>
      </div>
      <div className="currency">
        <div className="currency__code">
          RUB =
          <span className="currency__exchange_rate"> 78</span>
        </div>
      </div>
      <div className="currency">
        <div className="currency__code">
          EUR =
          <span className="currency__exchange_rate"> 1.04</span>
        </div>
      </div>
      <div className="currency">
        <div className="currency__code">
          BBD =
          <span className="currency__exchange_rate"> 1.31</span>
        </div>
      </div>
    </div>
  );
}

export default Currencies;
