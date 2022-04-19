const ExtractionType = {
  BASE_CURRENCY: 1,
  AMOUNT: 2,
  TARGET_CURRENCY: 3,
};

Object.freeze(ExtractionType);

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

  if (extractionType === ExtractionType.BASE_CURRENCY || extractionType === ExtractionType.AMOUNT) {
    words = s.split(" ");
  }

  if (extractionType === ExtractionType.TARGET_CURRENCY) {
    words = s.split(" ").reverse();
  }

  for (let word of words) {
    if (extractionType === ExtractionType.AMOUNT) {
      const number = Number(word);
      if (!Number.isNaN(number)) {
        return number
      } else {
        return 0;
      }
    } else {
      if (currencies[word]) {
        return word.toUpperCase();
      }
    }
  }
}


export function parseInput(s, currencies) {
  const base = extract(s, currencies, ExtractionType.BASE_CURRENCY);
  const amount = extract(s, currencies, ExtractionType.AMOUNT);
  const target = extract(s, currencies, ExtractionType.TARGET_CURRENCY);

  return { base, amount, target };
}

export function convert(base, amount, target, currencies) {
  const exchangeRate = currencies[target.toLowerCase()];
  return `${amount * exchangeRate} ${target}`
}