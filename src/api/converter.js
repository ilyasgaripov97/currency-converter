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

/**
 * Extract 'amount' from conversion string 's
 *
 * @param s - Conversion string, e.g '15 usd in rub
 * @returns {number} - { usd: 80.0, bdt: 0.02, bgn: 0.02, ... }
 */
export function extractAmount(s) {
  const words = s.split(" ");

  for (let word of words) {
    const number = Number(word);
    if (!Number.isNaN(number)) {
      return number;
    }
  }

  return 0;
}

/**
 * Extract 'target' currency from conversion string 's'
 * @param s - Conversion string, e.g '15 usd in rub
 * @param currencies - { usd: 80.0, bdt: 0.02, bgn: 0.02, ... }
 */
export function extractTargetCurrency(s, currencies) {
  const words = s.split(" ");

  for (let word of words.reverse()) {
    if (currencies[word]) {
      return word.toUpperCase();
    }
  }

  return "";
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