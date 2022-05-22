import { it, expect, describe, vi } from 'vitest';
import { promises as fs } from 'fs';

import writeData from './io';

// v2
vi.mock('fs');
vi.mock('path', () => {
    return {
        default: {
            join: (...args) => {
                return args[args.length - 1]
            }
        }
    }
});

// it('should execute the writeFile method', () => {
//     const testData = 'Test';
//     const testFileName = 'test.txt';
//     return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
// });

it('should execute the writeFile method - v2', () => {
    const testData = 'Test';
    const testFileName = 'test.txt';
    
    writeData(testData, testFileName)
    // expect(fs.writeFile).toBeCalled();
    // expect(fs.writeFile).toBeCalledWith(testFileName, testData);
    return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
});