import React from 'react';
import './CurrencyConverter.css';

function CurrencyConverter() {
  return (
    <div className="converter">
      <form>
        <div className="output">200 RUB</div>
        <label htmlFor="currency">
          Enter amount
        </label>
        <input type="text" name="currency" id="currency" placeholder="e.g 15 usd in rub"/>
        <input type="submit" value="Convert" />
      </form>
    </div>
  );
}

export default CurrencyConverter;
