import { filterEvenNumbers, filterLengthWith4, filterStartWithA } from '../src/filter';

describe('filterEvenNumbers', () => {
    test('filters even numbers only', () => {
        const numbers = [1, 2, 3, 4, 5, 6];
        const result = filterEvenNumbers(numbers);
        expect(result).toEqual([2, 4, 6]);
    });

    test('returns an empty array if no even numbers are present', () => {
        const numbers = [1, 3, 5, 7];
        const result = filterEvenNumbers(numbers);
        expect(result).toEqual([]);
    });
});

describe('filterLengthWith4', () => {
    test('filters words with length 4 only', () => {
        const words = ['apple', 'banana', 'pear', 'kiwi', 'grape'];
        const result = filterLengthWith4(words);
        expect(result).toEqual(['pear', 'kiwi']);
    });

    test('returns an empty array if no words have length 4', () => {
        const words = ['apple', 'banana', 'grape'];
        const result = filterLengthWith4(words);
        expect(result).toEqual([]);
    });
});

describe('filterStartWithA', () => {
    test('filters words starting with "a" only', () => {
        const letters = ['apple', 'banana', 'avocado', 'kiwi', 'grape'];
        const result = filterStartWithA(letters);
        expect(result).toEqual(['apple', 'avocado']);
    });

    test('returns an empty array if no words start with "a"', () => {
        const letters = ['banana', 'grape'];
        const result = filterStartWithA(letters);
        expect(result).toEqual([]);
    });
});