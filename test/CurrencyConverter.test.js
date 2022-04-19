import {
  extractBaseCurrency,
  extractTargetCurrency,
  parseInput
} from '../src/api/converter';

test('15 usd in rub', () => {
  expect(parseInput("15 usd in rub")).toEqual({
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

test("extract target currency from '15 usd in rub'", () => {
  const s = '15 usd in rub'
  expect(extractTargetCurrency(s)).toBe('RUB');
});