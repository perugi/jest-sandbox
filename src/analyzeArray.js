export default function analyzeArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Invalid argument - must be array');
  }
  if (!arr.every((el) => typeof el === 'number')) {
    throw new Error('Invalid argument - must be array of numbers');
  }
  if (arr.length === 0) {
    throw new Error('Invalid argument - must be non-empty array');
  }

  return {
    average: arr.reduce((total, el) => total + el, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}
