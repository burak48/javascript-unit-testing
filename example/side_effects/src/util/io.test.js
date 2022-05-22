import { it, expect, describe, vi } from 'vitest';
import writeData from './io';

vi.mock('fs');

it('should execute the writeFile method', () => {
    const testData = 'Test';
    const testFileName = 'test.txt';
    return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
});

it('should execute the writeFile method - v2', () => {
    const testData = 'Test';
    const testFileName = 'test.txt';
    // return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
});