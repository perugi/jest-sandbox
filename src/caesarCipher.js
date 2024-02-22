export default function caesarCipher(str, shift) {
  if (typeof str !== 'string')
    throw new Error('Invalid argument - str must be string');
  if (typeof shift !== 'number')
    throw new Error('Invalid argument - shift must be number');
  if (shift === 0) return str;
  if (shift < 0) return caesarCipher(str, shift + 26);

  return str
    .split('')
    .map((char) => {
      if (!/[a-zA-Z]/.test(char)) return char;
      if (/[A-Z]/.test(char))
        return String.fromCharCode(
          ((char.charCodeAt(0) - 65 + shift) % 26) + 65
        );
      return String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
    })
    .join('');
}
