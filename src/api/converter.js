/**
 * Extract 'base' currency from conversion string 's'
 *
 * @param s - Conversion string, e.g '15 usd in rub
 * @param currencies - { usd: 80.0, bdt: 0.02, bgn: 0.02, ... }
 */
export function extractBaseCurrency(s, currencies) {
  const words = s.split(" ");

  for (let word of words) {
    if (currencies[word]) {
      return word.toUpperCase();
    }
  }

  return "";
}

export function extractAmount(s) {

}

export function extractTargetCurrency(s, currencies) {

}

export function parseInput(s, currencies) {
  const base = extractBaseCurrency(s, currencies);
  const amount = extractAmount(s);
  const target = extractTargetCurrency(s, currencies);

  return { base, amount, target };
}

export function pickExchangeRate(currencies, base) {

}

export function convert(from, to) {
  // pick exchange rate for 'from' currency

  // calculate 'to' value as from * exchange rate
}