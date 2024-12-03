import reverseString from '../src/reverseString';

it('reverses a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

it('handles an empty string', () => {
  expect(reverseString('')).toBe('');
});

it('handles a single character', () => {
  expect(reverseString('a')).toBe('a');
});

it('reverses multiple words', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});

it('preserves mixed case', () => {
  expect(reverseString('HellO')).toBe('OlleH');
});
