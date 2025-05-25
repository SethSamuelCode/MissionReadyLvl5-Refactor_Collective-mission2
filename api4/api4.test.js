const { api4 } = require('./api4.js'); // update with correct path

describe('api4 Positive domain testing', () => {
  const testCases = [
    {
      description: 'Age < 25, Experience < 5',
      input: { age: 20, experience: 4 },
      expected: { discount_rate: 0 },
    },
    {
      description: 'Age < 25, Experience 5-10',
      input: { age: 20, experience: 7 },
      expected: { discount_rate: 5 },
    },
    {
      description: 'Age < 25, Experience >= 10',
      input: { age: 20, experience: 15 },
      expected: { discount_rate: 10 },
    },
    {
      description: 'Age 25-40, Experience < 5',
      input: { age: 30, experience: 4 },
      expected: { discount_rate: 5 },
    },
    {
      description: 'Age 25-40, Experience 5-10',
      input: { age: 30, experience: 6 },
      expected: { discount_rate: 10 },
    },
    {
      description: 'Age > 40, Experience >= 10',
      input: { age: 50, experience: 15 },
      expected: { discount_rate: 20 },
    },
    {
      description: 'Age > 40, Experience < 5',
      input: { age: 50, experience: 4 },
      expected: { discount_rate: 10 },
    },
    {
      description: 'Age > 40, Experience 5-10',
      input: { age: 50, experience: 8 },
      expected: { discount_rate: 15 },
    },
    {
      description: 'Age > 40, Experience >= 10',
      input: { age: 50, experience: 16 },
      expected: { discount_rate: 20 },
    },
  ];

  testCases.forEach(({ description, input, expected }) => {
    it(description, () => {
      expect(api4(input)).toEqual(expected);
    });
  });
});

describe('api4 - Boundary Tests', () => {
  const testCases = [
    {
      description: 'Age is 25, Experience is 5',
      input: { age: 25, experience: 5 },
      expected: { discount_rate: 5 },
    },
    {
      description: 'Age is 40, Experience is 10',
      input: { age: 40, experience: 10 },
      expected: { discount_rate: 20 },
    },
  ];

  testCases.forEach(({ description, input, expected }) => {
    it(description, () => {
      expect(api4(input)).toEqual(expected);
    });
  });
});

describe('api4 - Invalid Input Tests', () => {
  const testCases = [
    {
      description: 'Negative number in Age',
      input: { age: -25, experience: 5 },
      expected: { error: 'there is an error' },
    },
    {
      description: 'Negative number in Experience',
      input: { age: 25, experience: -5 },
      expected: { error: 'there is an error' },
    },
    {
      description: 'Non-integer Age (float)',
      input: { age: 25.3, experience: 5 },
      expected: { error: 'there is an error' },
    },
    {
      description: 'Non-integer Experience (float)',
      input: { age: 25, experience: 5.6 },
      expected: { error: 'there is an error' },
    },
    {
      description: 'String values for Age and Experience',
      input: { age: "25", experience: "5" },
      expected: { error: 'there is an error' },
    },
    {
      description: 'Empty payload',
      input: {},
      expected: { error: 'there is an error' },
    },
    {
      description: 'No values in Age or Experience (undefined)',
      input: { age: undefined, experience: undefined },
      expected: { error: 'there is an error' },
    },
  ];

  testCases.forEach(({ description, input, expected }) => {
    it(description, () => {
      expect(api4(input)).toEqual(expected);
    });
  });
});