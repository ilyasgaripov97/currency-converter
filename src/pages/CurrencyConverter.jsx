import React from 'react';

import './CurrencyConverter.css';

export function extractBaseCurrency(s) {

}

export function extractAmount(s) {

}

export function extractDesiredCurrency(s) {

}

export function parseInput(s) {
  // extract base currency

  // extract amount

  // extract desired currency
}

export function pickExchangeRate(currencies, base) {

}

export function convert(from, to) {
  // pick exchange rate for 'from' currency

  // calculate 'to' value as from * exchange rate
}

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
