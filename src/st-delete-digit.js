import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let numbers = String(n).split('')
  numbers = numbers.map(num => num = +num)
  const min = Math.min(...numbers)
  const indexMin = numbers.indexOf(min)
  numbers.splice(indexMin, 1)
  return +numbers.join('')
}
