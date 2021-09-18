import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  }
  const array = [...arr]
  if (array.every(value => typeof value === 'number')) {
    return arr
  }
  for (let i = 0; i < array.length; i++) {
    const value = array[i]
    if (typeof value === 'string') {
      if (value === '--discard-prev') {
        array[i] = ''
        i >  1 ? array[i - 1] = '' : ''
      } else if (value === '--discard-next') {
        array[i] = ''
        i < array.length ? array[i + 1] = '' : ''
      } else if (value === '--double-prev') {
        array[i] = array[i - 1] ? array[i - 1] : ''
      } else if (value === '--double-next') {
        array[i] = array[i + 1] ? array[i + 1] : ''
      }
    }
  }
  return array.filter(value => value != '')
}
