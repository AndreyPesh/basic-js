import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  const charsArray = str.split('')
  let template = ''
  let counter = 1
  for (let i = 0; i < charsArray.length; i++) {
    if (charsArray[i] === charsArray[i + 1]) {
      counter++
    } else {
      template += counter > 1 ? counter + charsArray[i] : charsArray[i]
      counter = 1
    }
  }
  return template

}
