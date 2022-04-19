import React from 'react';
import { useState } from 'react';
import { convert, parseInput } from '../api/converter';
import './CurrencyConverter.css';
import {fetchCurrencies} from '../api/currency';

function CurrencyConverter({ baseCurrency, setBaseCurrency, currencies, setCurrencies }) {
  const [query, setQuery] = useState("")
  const [output, setOutput] = useState("")

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const {base, amount, target} = parseInput(query, currencies);

    console.dir({base, amount, target})

    fetchCurrencies(base.toLowerCase()).then((json) => {
      let converted;

      if (base === target) {
        converted = convert(base, amount, baseCurrency.toUpperCase(), json);
      } else {
        converted = convert(base, amount, target, json);
      }

      setOutput(converted);
    });
  }

  return (
    <div className="converter">
      <form onSubmit={handleSubmit}>
        <div className="output">{output}</div>
        <label htmlFor="currency">
          Enter query
        </label>
        <input type="text" name="currency" id="currency" placeholder="e.g 15 usd in rub" onChange={handleChange}/>
        <input type="submit" value="Convert" />
      </form>
    </div>
  );
}

export default CurrencyConverter;
