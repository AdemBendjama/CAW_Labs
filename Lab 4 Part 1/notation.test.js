import mean from './notation'

const tests = () => {

    test('should calculate mean of an array of integers', () => {
        const testArray = [1, 2, 3, 4, 5];
        expect(mean(testArray)).toBe(3);
    });

    test('should calculate mean of an array of floating-point numbers', () => {
        const testArray = [1.5, 2.25, 3.5, 4.5];
        expect(mean(testArray)).toBe(2.9375);
    });

    test('should calculate mean of an array of negative numbers', () => {
        const testArray = [-1, -2, -3, -4, -5];
        expect(mean(testArray)).toBe(-3);
    });

    test('should return NaN for an empty array', () => {
        const testArray = [];
        expect(mean(testArray)).toBeNaN();
    });

    test('should return the same value for an array with a single element', () => {
        const testArray = [42];
        expect(mean(testArray)).toBe(42);
    });

    test('should calculate mean of a large array', () => {
        const testArray = Array.from({ length: 1000 }, (_, index) => index + 1);
        expect(mean(testArray)).toBe(500.5);
    });

}



describe('Mean Function test suite', tests)