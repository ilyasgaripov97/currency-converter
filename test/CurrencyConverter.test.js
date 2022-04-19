import {
  extractBaseCurrency,
  extractTargetCurrency,
  parseInput
} from '../src/api/converter';

test('15 usd in rub', () => {
  const currencies = { usd: 12.5, rub: 9.99, bam: 0.03 };
  expect(parseInput("15 usd in rub", currencies)).toEqual({
    base: 'USD',
    amount: 15,
    target: 'RUB',
  });
});

test("extract base currency from '15 usd in rub' ", () => {
  const s = '15 usd in rub'
  const currencies = { usd: 12.5, rub: 9.99, bam: 0.03 };
  expect(extractBaseCurrency(s, currencies)).toBe('USD');
});

test("extract base currency with no currencies", () => {
  const s = "15 abcdefgh";
  const currencies = { usd: 12.5, rub: 9.99, bam: 0.03 };
  expect(extractBaseCurrency(s, currencies)).toBe("");
})

test("extract target currency from '15 usd in rub'", () => {
  const s = '15 usd in rub'
  const currencies = { usd: 12.5, rub: 9.99, bam: 0.03 };
  expect(extractTargetCurrency(s, currencies)).toBe('RUB');
});