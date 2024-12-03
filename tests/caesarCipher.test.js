import caesarCipher from '../src/caesarCipher';

it('ciphers', () => {
  expect(caesarCipher('hello', 3)).toBe('khoor');
});

it('does nothing with zero shift', () => {
  expect(caesarCipher('hello', 0)).toBe('hello');
});

it('ciphers with negative shift', () => {
  expect(caesarCipher('hello', -3)).toBe('ebiil');
});

it('ciphers with a large shift', () => {
  expect(caesarCipher('hello', 75)).toBe('ebiil');
});

it('ciphers with a large negative shift', () => {
  expect(caesarCipher('hello', -75)).toBe('khoor');
});

it('throws at an invalid shift', () => {
  expect(() => {
    caesarCipher('hello', 'a');
  }).toThrow(/Invalid argument - shift must be number/);
});

it('throws at an invalid input string', () => {
  expect(() => {
    caesarCipher(123, 3);
  }).toThrow(/Invalid argument - str must be string/);
});

it('handles an empty string', () => {
  expect(caesarCipher('', 3)).toBe('');
});

it('ciphers a single character', () => {
  expect(caesarCipher('a', 3)).toBe('d');
});

it('preserves case', () => {
  expect(caesarCipher('Aa', 3)).toBe('Dd');
});

it('ciphers when wrapping around the alphabet', () => {
  expect(caesarCipher('z', 3)).toBe('c');
});

it('does not change non-alphabetic characters', () => {
  expect(caesarCipher('hello, there!1234', 3)).toBe('khoor, wkhuh!1234');
});
