import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  let count = 0
  let index = 0
  const length = matrix.length
  while(index < length) {
    matrix[index].forEach(cat => {
        if (cat == '^^') {
          count++
        }
      })
    index++
  }
  return count
}
