import { addSerialNumber, halfNumbers, spliceNames } from "../src/map";

describe("halfNumbers", () => {
  test('returns numbers if divisible by 2', () => {
      const numbers = [2, 4, 6, 8];
      const result = halfNumbers(numbers);

      expect(result).toEqual([1, 2, 3, 4]);
  });

  test('returns empty array if no input', () => {
      const numbers = [];
      const result = halfNumbers(numbers);

      expect(result).toEqual([]);
  });
});

describe("spliceNames", () => {
  test('adds "Hello" to each given names', () => {
    const names = ['Red', 'Daphne'];
    const result = spliceNames(names);

    expect(result).toEqual(['Hello Red', 'Hello Daphne']);
  });

  test('returns empty array if no input', () => {
    const names = [];
    const result = spliceNames(names);

    expect(result).toEqual([]);
  });
});

describe('addSerialNumber', () => {
  test('adds serial numbers to each fruit', () => {
      const fruits = ['apple', 'banana', 'orange'];
      const result = addSerialNumber(fruits);
      expect(result).toEqual(['1. apple', '2. banana', '3. orange']);
  });

  test('returns empty array if no input', () => {
      const fruits = [];
      const result = addSerialNumber(fruits);
      expect(result).toEqual([]);
  });
});
