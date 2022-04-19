export function extractBaseCurrency(s) {

}

export function extractAmount(s) {

}

export function extractTargetCurrency(s) {

}

export function parseInput(s) {
  const base = extractBaseCurrency(s);
  const amount = extractAmount(s);
  const target = extractTargetCurrency(s);

  return { base, amount, target };
}

export function pickExchangeRate(currencies, base) {

}

export function convert(from, to) {
  // pick exchange rate for 'from' currency

  // calculate 'to' value as from * exchange rate
}