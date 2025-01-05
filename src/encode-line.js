const { NotImplementedError } = require('../extensions/index.js');

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
function encodeLine(str) {
  let counter = 1;
  let currentChar = str[0];
  let encoded = '';
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === currentChar){
      counter++
    } 
    if (str[i] !== currentChar || i > str.length - 1) {
      if (counter > 1){
        encoded += counter;
      }
      encoded +=currentChar;
      counter = 1;
      currentChar = str[i];
    }
  }
  return encoded;
}

module.exports = {
  encodeLine
};
