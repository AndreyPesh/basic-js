import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  const matrixLength = matrix[0].length
  const matrixHeight = matrix.length
  const result = []
  for (let i = 0; i < matrixHeight; i++) {
    result.push([])
    for (let j = 0; j < matrixLength; j++) {
      result[i][j] = counter(matrix, i, j)
    }
  }
  return result
}
function counter(matrix, i, j) {
  let count = 0
  if (j - 1 >= 0 && matrix[i][j-1]) {
    count++
  }
  if (j + 1 < matrix[i].length && matrix[i][j+1]) {
    count++
  }
  if (i - 1 >= 0 && matrix[i-1][j]) {
    count++
  }
  if (i + 1 < matrix.length && matrix[i+1][j]) {
    count++
  }
  if (i - 1 >= 0 && j - 1 >= 0 && matrix[i-1][j-1]) {
    count++
  }
  if (i - 1 >= 0 && j + 1 < matrix[i].length && matrix[i-1][j+1]) {
    count++
  }
  if (i + 1 < matrix.length && j -1 >= 0 && matrix[i+1][j-1]) {
    count++
  }
  if (i + 1 < matrix.length && j + 1 < matrix[i].length && matrix[i+1][j+1]) {
    count++
  }
  return count
}
