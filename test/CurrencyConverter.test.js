import {
  parseInput,
  convert,
  detectNumber,
} from '../src/api/converter';

test('15 usd in rub', () => {
  const currencies = { usd: 12.5, rub: 9.99, bam: 0.03 };
  expect(parseInput("15 usd in rub", currencies)).toEqual({
    initial: 'USD',
    amount: 15,
    target: 'RUB',
  });
});

test("convert 15 usd to rub", () => {
  const initial = "USD";
  const amount = 15;
  const target = "RUB";
  const currencies = { usd: 1, rub: 80.5, bam: 0.03 };

  expect(convert(initial, amount, target, currencies)).toBe(`${(amount * currencies.rub).toFixed(3)} ${target}`);
})

test("'15' string returns 15", () => {
  expect(detectNumber("15")).toBe(15)
})