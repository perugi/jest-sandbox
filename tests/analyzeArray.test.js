import analyzeArray from '../src/analyzeArray';

it('analyzes an array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

it('analyzes an array with negative numbers', () => {
  expect(analyzeArray([-1, -8, -3, -4, -2, -6])).toEqual({
    average: -4,
    min: -8,
    max: -1,
    length: 6,
  });
});

it('analyzes an array with one element', () => {
  expect(analyzeArray([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
});

it('throws at an input that is not an array', () => {
  expect(() => analyzeArray(1)).toThrow(/Invalid argument - must be array/);
});

it('throws at an array with non-number elements', () => {
  expect(() => analyzeArray(['a'])).toThrow(
    /Invalid argument - must be array of numbers/
  );
});

it('throws at an empty array', () => {
  expect(() =>
    analyzeArray([]).toThrow(/Invalid argument - must be non-empty array/)
  );
});
