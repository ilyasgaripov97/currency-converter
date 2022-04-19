const ExtractionType = {
  INITIAL_CURRENCY: 1,
  AMOUNT: 2,
  TARGET_CURRENCY: 3,
};

Object.freeze(ExtractionType);

export function detectNumber(word) {
  const number = Number(word);
  return !Number.isNaN(number) ? number : 0;
}

/**
 * Extract extraction type from conversion string.
 *
 * @param s - Conversion string, e.g '15 usd in rub
 * @param currencies - { usd: 80.0, bdt: 0.02, bgn: 0.02, ... }
 * @param extractionType - one of the values stored in ExtractionType enum.
 * @returns {string|number}
 */
export function extract(s, currencies, extractionType) {
  let words;

  if (extractionType === ExtractionType.INITIAL_CURRENCY || extractionType === ExtractionType.AMOUNT) {
    words = s.split(" ");
  }

  if (extractionType === ExtractionType.TARGET_CURRENCY) {
    words = s.split(" ").reverse();
  }

  for (let word of words) {

    if (extractionType === ExtractionType.AMOUNT) {
      return detectNumber(word);
    }

    if (word in currencies) {
      return word.toUpperCase();
    }
  }
}

export function parseInput(s, currencies) {
  const initial = extract(s, currencies, ExtractionType.INITIAL_CURRENCY);
  const amount = extract(s, currencies, ExtractionType.AMOUNT);
  const target = extract(s, currencies, ExtractionType.TARGET_CURRENCY);

  return { initial, amount, target };
}

export function convert(initial, amount, target, currencies) {
  const exchangeRate = currencies[target.toLowerCase()];
  const precision = 3;
  return `${(amount * exchangeRate).toFixed(precision)} ${target}`
}