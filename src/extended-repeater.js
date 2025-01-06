const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  let repeated = '';
  let additionString = '';

  let repeatTimes = '';
  let separator = '';

  let addition = '';
  let additionRepeatTimes = '';
  let additionSeparator = '';

  if ('repeatTimes' in options) {
    repeatTimes = options.repeatTimes;
  } else {
    repeatTimes = 1;
  }
  if ('separator' in options) {
    separator = options.separator;
  } else {
    separator = '+'
  }

  if ('addition' in options) {
    addition = options.addition;
  } else {
    addition = '';
  }

  if ('additionRepeatTimes' in options) {
    additionRepeatTimes = options.additionRepeatTimes;
  } else {
    additionRepeatTimes = 1;
  }

  if ('additionSeparator' in options) {
    additionSeparator = options.additionSeparator;
  } else {
    additionSeparator = '|'
  }
  
  for (let i = 0; i < additionRepeatTimes; i++) {
    additionString += addition;
    if (i !== additionRepeatTimes - 1) {
      additionString += additionSeparator;
    }
  }
  
  for (let i = 0; i < repeatTimes; i++){
    repeated += `${str}${additionString}`;
    if(i !== repeatTimes - 1) {
      repeated += separator;
    }
  }
  return repeated;
}

module.exports = {
  repeater
};
