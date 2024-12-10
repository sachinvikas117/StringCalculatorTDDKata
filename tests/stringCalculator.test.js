const StringCalculator = require('../src/StringCalculator');

describe('StringCalculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test('should return 0 for an empty string', () => {
    expect(calculator.add("")).toBe(0);
  });

  test('should return the number itself for a single number', () => {
    expect(calculator.add("1")).toBe(1);
  });

  test('should return the sum of two numbers separated by a comma', () => {
    expect(calculator.add("1,2")).toBe(3);
  });

  test('should handle an unknown amount of numbers', () => {
    expect(calculator.add("1,2,3,4,5")).toBe(15);
  });

  test('should handle newlines as delimiters', () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  test('should support custom delimiters', () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
    expect(calculator.add("//|\n2|3|4")).toBe(9);
  });

});



