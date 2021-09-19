import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    const inputValue = String(value)
    if (inputValue) {
      this.chain.push(`( ${inputValue} )`)
    } else {
      this.chain.push('()')
    }
    return this
  },
  removeLink(pos) {
    const position = --pos
    const isInteger = Number.isInteger(position)
    const isWithinLength = position >= 0 && position < this.chain.length
    const isNumberType = typeof position === 'number'
    if (isInteger && isWithinLength && isNumberType) {
        this.chain.splice(position, 1)
    } else {
      this.chain = []
      throw new Error(`You can't remove incorrect link!`)
    }
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    const result = this.chain.join('~~')
    this.chain = []
    return result
  },
};
