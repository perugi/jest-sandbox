import caesarCipher from '../src/caesarCipher';

test('basic caesar cipher', () => {
  expect(caesarCipher('hello', 3)).toBe('khoor');
});

test('zero shift', () => {
  expect(caesarCipher('hello', 0)).toBe('hello');
});

test('negative shift', () => {
  expect(caesarCipher('hello', -3)).toBe('ebiil');
});

test('large shift', () => {
  expect(caesarCipher('hello', 75)).toBe('ebiil');
});

test('large negative shift', () => {
  expect(caesarCipher('hello', -75)).toBe('khoor');
});

test('invalid shift', () => {
  expect(() => {
    caesarCipher('hello', 'a');
  }).toThrow(/Invalid argument/);
});

test('invalid string', () => {
  expect(() => {
    caesarCipher(123, 3);
  }).toThrow(/Invalid argument/);
});

test('empty string', () => {
  expect(caesarCipher('', 3)).toBe('');
});

test('single character', () => {
  expect(caesarCipher('a', 3)).toBe('d');
});

test('keep case', () => {
  expect(caesarCipher('Aa', 3)).toBe('Dd');
});

test('wrap around', () => {
  expect(caesarCipher('z', 3)).toBe('c');
});

test('non-alpha characters', () => {
  expect(caesarCipher('hello, there!1234', 3)).toBe('khoor, wkhuh!1234');
});
