import { it, expect, describe } from 'vitest';
import { cleanNumbers, transformToNumber } from './numbers';
 

describe('transformToNumber()', () => {
    it('should transform a string number to a number of type number', () => {
        const input = '1';
        const result = transformToNumber(input);
        expect(result).toBeTypeOf('number');
    });

    it('should transform a string number to a number of type number - v2', () => {
        const input = '1';
        const result = transformToNumber(input);
        expect(result).toBe(+input);
    });

    it('should yield NaN for non-transformable values', () => {
        const input = 'invalid';
        const result = transformToNumber(input);
        expect(result).toBeNaN();
    });

    it('should yield NaN for non-transformable values - v2', () => {
        const input = 'invalid';
        const input2 = {};

        const result = transformToNumber(input);
        const result2 = transformToNumber(input2);

        expect(result).toBeNaN();
        expect(result2).toBeNaN();
    });
});

describe('cleanNumbers()', () => {
    it('should return an array of number values if an array of string number values is provided', () => {
        const numberValues = ['1', '2'];
        const cleanedNumbers = cleanNumbers(numberValues);
        expect(cleanedNumbers[0]).toBeTypeOf('number');
    });
});
