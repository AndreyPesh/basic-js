import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const obj = {}
  const domainsArrays = domains.map(domain => domain.split('.').reverse().join('.').split('.'))
  domainsArrays.forEach(array => {
    let domain = ''
    for (let i = 0; i < array.length; i++) {
      domain += `.${array[i]}`
      obj[domain] = obj[domain] ? obj[domain] + 1 : 1
    }
  })
  return obj
}
