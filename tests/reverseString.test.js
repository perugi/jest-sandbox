import reverseString from '../src/reverseString';

test('reverse string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('empty string', () => {
  expect(reverseString('')).toBe('');
});

test('single character', () => {
  expect(reverseString('a')).toBe('a');
});

test('multiple words', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('mixed case', () => {
  expect(reverseString('Hello World')).toBe('dlroW olleH');
});
