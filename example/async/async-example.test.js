import { it, expect, describe } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

describe('generateToken()', () => {
    it('should generate a token value', (done) => {
        const testUserEmail = 'test@test.com';
        generateToken(testUserEmail, (err, token) => {
            try { 
                expect(token).toBeDefined();
                // expect(token).toBe(2);
                done();
            } catch (err) {
                 done(err);
            }
        })
    });
});

describe('generateTokenPromise()', () => {
    it('should generate a token value - v2', () => {
        const testUserEmail = 'test@test.com';
        expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
        // expect(generateTokenPromise(testUserEmail)).resolves.toBe(2);
        // expect(generateTokenPromise(testUserEmail)).rejects.to();
    });
    it('should generate a token value - v3', async () => {
        const testUserEmail = 'test@test.com';
        const token = await generateTokenPromise(testUserEmail);
        expect(token).toBeDefined();
        // expect(token).toBe(2);
    });
});