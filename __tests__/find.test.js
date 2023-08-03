import { firstGrownUp, firstOrange, firstLengthOver5Name } from "../src/find";

describe('firstGrownUp', () => {
  test('finds the first grown up age', () => {
      const ages = [25, 2, 18, 23, 16];
      const result = firstGrownUp(ages);
      expect(result).toBe(25);
  });

  test('returns undefined if there is no grown up age', () => {
      const ages = [10, 2, 17, 13, 16];
      const result = firstGrownUp(ages);
      expect(result).toBeUndefined();
  });
});

describe('firstOrange', () => {
  test('finds the first occurence of orange', () => {
      const fruits = ['apple', 'grape', 'orange', 'banana'];
      const result = firstOrange(fruits);

      expect(result).toBe('orange');
  });

  test('returns undefined if there is no occurence of orange', () => {
      const fruits = ['apple', 'grape', 'watermelon', 'banana'];
      const result = firstOrange(fruits);

      expect(result).toBeUndefined();
  });
});

describe('firstLengthOver5Name', () => {
  test('finds the names with the length of over 5', () => {
      const names = ['Red', 'Raymond', 'Daphne', 'Denise', 'Daphy'];
      const result = firstLengthOver5Name(names);

      expect(result).toBe('Raymond', 'Daphne', 'Denise');
  })

  test('returns undefined if there is no name with length of 5', () => {
      const names = ['Red', 'Daphy'];
      const result = firstLengthOver5Name(names);

      expect(result).toBeUndefined();
  })
});
