import calculator from '../src/calculator';

test('add', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('add negative', () => {
  expect(calculator.add(1, -2)).toBe(-1);
});

test('add invalid', () => {
  expect(() => {
    calculator.add(1, 'a');
  }).toThrow(/Invalid arguments/);
});

test('subtract', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('subtract negative', () => {
  expect(calculator.subtract(1, -2)).toBe(3);
});

test('subtract invalid', () => {
  expect(() => {
    calculator.subtract('a', 1);
  }).toThrow(/Invalid arguments/);
});

test('multiply', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test('multiply negative', () => {
  expect(calculator.multiply(-1, 2)).toBe(-2);
});

test('multiply invalid', () => {
  expect(() => {
    calculator.multiply('a', 1);
  }).toThrow(/Invalid arguments/);
});

test('divide', () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test('divide negative', () => {
  expect(calculator.divide(-1, 2)).toBe(-0.5);
});

test('divide invalid', () => {
  expect(() => {
    calculator.divide('a', 1);
  }).toThrow(/Invalid arguments/);
});

test('divide by zero', () => {
  expect(() => {
    calculator.divide(1, 0);
  }).toThrow(/Division by zero/);
});
