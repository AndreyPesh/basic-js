import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  const matrixLength = matrix[0].length
  const matrixHeight = matrix.length
  for (let i = 0; i < matrixHeight - 1; i++) {
    for (let j = 0; j < matrixLength; j++) {
      if (matrix[i][j] === 0) {
        matrix[i + 1][j] = 0
      }
    }
  }
  return sumMatrix(matrix)
}

function sumMatrix(matrix) {
  return matrix.reduce((acc, value) => {
    return acc + (Array.isArray(value) ? sumMatrix(value) : value)
  }, 0)
}
