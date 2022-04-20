import React from 'react';
import { useState } from 'react';
import { fetchCurrencies } from '../api/currency';
import { convert, parseInput } from '../api/converter';
import './CurrencyConverter.css';

function CurrencyConverter({ baseCurrency, currencies }) {
  const [query, setQuery] = useState('');
  const [output, setOutput] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { initial, amount, target } = parseInput(query, currencies);

    fetchCurrencies(initial.toLowerCase()).then((json) => {
      let converted;

      if (initial === target) {
        converted = convert(initial, amount, baseCurrency.toUpperCase(), json);
      } else {
        converted = convert(initial, amount, target, json);
      }

      setOutput(converted);
    });
  };

  return (
      <div className="converter">
        <form onSubmit={handleSubmit}>
          <div className="output">{output}</div>
          <label className="currency-label" htmlFor="currency">
            Enter query
          </label>
          <input type="text" name="currency" id="currency"
                 placeholder="e.g 15 usd in rub" onChange={handleChange}/>
          <input type="submit" value="Convert"/>
        </form>
      </div>
  );
}

export default CurrencyConverter;
