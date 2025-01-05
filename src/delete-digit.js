const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit(n) {
  const array = String(n).split('');
  const min = Math.min(...array);
  if (n % 10 === min && min !== 0) {
    array.splice(0,1);
  } else {
    array.splice(array.indexOf(String(min)), 1);
  }
  return Number(array.join(''));
  
}

module.exports = {
  deleteDigit
};
