import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  const stringArray = s1.split('')
  const string2 = s2.split('')
  return stringArray.reduce((acc, char) => {
    const indexChar = string2.indexOf(char)
    if (indexChar !== -1) {
      string2.splice(indexChar, 1)
      acc++
    }
    return acc
  }, 0)
}
