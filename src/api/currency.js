export async function fetchCurrencies(baseCurrency) {
  const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${baseCurrency}.json`;
  const response = await fetch(url);
  const json = await response.json();

  return new Promise((resolve, reject) => {
    resolve(json[baseCurrency]);
  });
}