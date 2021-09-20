import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let initialString = str 
  if (typeof initialString !== 'string'){
    initialString = String(initialString)
  }
  let arrayRepeater = new Array(initialString)
  let addition = ''
  let additionSeparator = '|'
  let additionRepeatTimes = 1
  let separator = '+'
  let repeatTimes = 1
  let resultAddition = ''
  let resultString = ''
  for (const option in options) {
    if (Object.prototype.hasOwnProperty.call(options, option)) {
      if (option === 'addition') {
        addition = options[option]
        if (typeof addition !== 'string') {
          addition = String(addition)
        }
        
      } else if (option === 'additionSeparator') {
        additionSeparator = options[option]
      } else if (option === 'additionRepeatTimes') {
        additionRepeatTimes = options[option]
      } else if (option === 'separator') {
        separator = options[option]
      } else if (option === 'repeatTimes') {
        repeatTimes = options[option]
      }
    }
  }
  arrayRepeater = arrayRepeater.map(element => {
    for (let i = 0; i < additionRepeatTimes; i++) {
      if (i === additionRepeatTimes - 1) {
        resultAddition +=addition
        continue
      }
      resultAddition += addition + additionSeparator
    }
    return element + resultAddition
  })
  arrayRepeater = arrayRepeater.map(element => {
    for (let i = 0; i < repeatTimes; i++) {
      if (i === repeatTimes - 1) {
        resultString += element
        continue
      }
      resultString += element + separator
    }
    return resultString
  })
  return arrayRepeater.join('')
}
