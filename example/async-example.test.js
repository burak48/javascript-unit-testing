import { it, expect, describe } from 'vitest';
import { generateToken } from './async-example';

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
