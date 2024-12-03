import calculator from '../src/calculator';

it('adds', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

it('adds floating numbers', () => {
  expect(calculator.add(1.1, 2.2)).toBeCloseTo(3.3);
});

it('adds negative numbers', () => {
  expect(calculator.add(1, -2)).toBe(-1);
});

it('throws when adding with invalid arguments', () => {
  expect(() => {
    calculator.add(1, 'a');
  }).toThrow(/Invalid arguments/);
});

it('subtracts', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

it('subtracts negative numbers', () => {
  expect(calculator.subtract(-1, -2)).toBe(1);
});

it('subtracts floating numbers', () => {
  expect(calculator.subtract(2.0, 1.0)).toBeCloseTo(1.0);
});

it('throws when subtracting with invalid arguments', () => {
  expect(() => {
    calculator.subtract('a', 1);
  }).toThrow(/Invalid arguments/);
});

it('multiplies', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

it('multiplies negative', () => {
  expect(calculator.multiply(-1, 2)).toBe(-2);
});

it('multiplies floating numbers', () => {
  expect(calculator.multiply(2.0, 1.0)).toBeCloseTo(2.0);
});

it('throws when multiplying with invalid arguments', () => {
  expect(() => {
    calculator.multiply('a', 1);
  }).toThrow(/Invalid arguments/);
});

it('divides', () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

it('divides negative', () => {
  expect(calculator.divide(-1, 2)).toBe(-0.5);
});

it('throws when dividing with invalid arguments', () => {
  expect(() => {
    calculator.divide('a', 1);
  }).toThrow(/Invalid arguments/);
});

it('divides floating numbers', () => {
  expect(calculator.divide(2.0, 2.0)).toBeCloseTo(1.0);
});

it('throws when dividing by zero', () => {
  expect(() => {
    calculator.divide(1, 0);
  }).toThrow(/Division by zero/);
});
