const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  members.forEach((member, index, array) => {
    if ( !isNaN(Number(member)) ||
      member === 'true' ||
      member === 'false' ||
      member === 'NaN' ||
      member === 'undefined' ||
      typeof(member) === 'boolean' ||
      typeof(member) === 'number' ||
      typeof(member) === 'undefined' ||
      (typeof(member) === 'object')) {
        delete array[index];
    } else {
      array[index] = member.trim().toUpperCase()[0];
    }
  })
  console.log(members)
  const result = members.sort().join('');

  return result;
}

module.exports = {
  createDreamTeam
};
