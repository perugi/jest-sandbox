import capitalize from '../src/capitalize';

it('capitalizes a string', () => {
  expect(capitalize('hello')).toBe('Hello');
});

it('handles an empty string', () => {
  expect(capitalize('')).toBe('');
});

it('handles a single character', () => {
  expect(capitalize('a')).toBe('A');
});

it('capitalizes first word only', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});
