import analyzeArray from '../src/analyzeArray';

test('analyze array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('analyze negative array', () => {
  expect(analyzeArray([-1, -8, -3, -4, -2, -6])).toEqual({
    average: -4,
    min: -8,
    max: -1,
    length: 6,
  });
});

test('analyze array with one element', () => {
  expect(analyzeArray([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
});

test('non-array argument', () => {
  expect(() => analyzeArray(1)).toThrow(/Invalid argument/);
});

test('invalid array', () => {
  expect(() => analyzeArray(['a'])).toThrow(/Invalid argument/);
});

test('analyze empty array', () => {
  expect(() => analyzeArray([]).toThrow(/Invalid argument/));
});
