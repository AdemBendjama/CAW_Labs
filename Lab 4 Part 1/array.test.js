
import { first, last, chunk } from './array';

describe('first function', () => {
    test('should return an empty array if input array is null or n is less than or equal to 0', () => {
        expect(first(null, 5)).toEqual([]);
        expect(first([1, 2, 3], 0)).toEqual([]);
    });

    test('should return the first n elements of the array', () => {
        expect(first([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
    });

    // its supposed to fail !
    test('should return the first element if n is null', () => {
        expect(first([1, 2, 3, 4, 5], null)).toEqual(1);
    });
});

describe('last function', () => {
    test('should return an empty array if input array is null', () => {
        expect(last(null, 5)).toEqual([]);
    });

    test('should return the last n elements of the array', () => {
        expect(last([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);
    });

    test('should return the last element if n is null', () => {
        expect(last([1, 2, 3, 4, 5], null)).toEqual(5);
    });
});

describe('myColor code', () => {
    test('should log the correct string with toString method', () => {
        const myColor = ["Red", "Green", "White", "Black"];
        const expectedOutput = "Red,Green,White,Black";
        const spy = jest.spyOn(console, 'log').mockImplementation();
        console.log(myColor.toString());
        expect(spy).toHaveBeenCalledWith(expectedOutput);
        spy.mockRestore();
    });

    test('should log the correct string with join method', () => {
        const myColor = ["Red", "Green", "White", "Black"];
        const expectedOutput = "Red,Green,White,Black";
        const spy = jest.spyOn(console, 'log').mockImplementation();
        console.log(myColor.join());
        expect(spy).toHaveBeenCalledWith(expectedOutput);
        spy.mockRestore();
    });

    test('should log the correct string with joinWithoutDelimiter method', () => {
        const myColor = ["Red", "Green", "White", "Black"];
        const expectedOutput = "RedGreenWhiteBlack";
        const spy = jest.spyOn(console, 'log').mockImplementation();
        console.log(myColor.join(''));
        expect(spy).toHaveBeenCalledWith(expectedOutput);
        spy.mockRestore();
    });
});

describe('chunk function', () => {
    test('should chunk the array into subarrays of the given size', () => {
        expect(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
    });

    test('should handle an empty array', () => {
        expect(chunk([], 3)).toEqual([]);
    });

    test('should handle a size greater than the array length', () => {
        expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
    });
});

