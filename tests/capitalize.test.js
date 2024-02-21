import capitalize from '../src/capitalize';

test('basic capitalization', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('empty string', () => {
  expect(capitalize('')).toBe('');
});

test('single character', () => {
  expect(capitalize('a')).toBe('A');
});

test('multiple words', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});
