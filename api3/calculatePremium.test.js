const { calculatePremium } = require('./calculatePremium');

describe('calculatePremium', () => {
    test('Sunny day scenario', () => {
        expect(calculatePremium(6614, 5)).toEqual({ yearly_premium: 330.7, monthly_premium: 27.56});
    });
    test('Mid-risk scenario', () => {
        expect(calculatePremium(1000, 3)).toEqual({ yearly_premium: 30, monthly_premium: 2.5 });
    });
    test('Low-risk scenario', () => {
        expect(calculatePremium(2400, 1)).toEqual({ yearly_premium: 24, monthly_premium: 2 });
    });
    test('Negative car value', () => {
        expect(() => calculatePremium(-1000, 3)).toThrow('Car value must be a positive number');
    });
    test('Risk rating too low', () => {
        expect(() => calculatePremium(5000, 0)).toThrow('Risk rating must be between 1 and 5');
    });
    test('Risk rating too high', () => {
        expect(() => calculatePremium(5000, 6)).toThrow('Risk rating must be between 1 and 5');
    });
    test('Non-numeric car value', () => {
        expect(() => calculatePremium("Five thousand", 3)).toThrow('Both car value and risk rating must be numbers');
    });
    test('Non-numeric risk rating', () => {
        expect(() => calculatePremium(5000, "Three")).toThrow('Both car value and risk rating must be numbers');
    });
    test('Missing car value', () => {
        expect(() => calculatePremium(null, 3)).toThrow('Car value is missing');
    });
    test('Missing risk rating', () => {
        expect(() => calculatePremium(5000, null)).toThrow('Risk rating is missing');
    });
});