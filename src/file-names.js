const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const output = []
  const unique = new Set();
  for (let name of names) {
    unique.add(name);
  }
  const keys = Array.from(unique).map((value) => [value, 0]);
  const obj = Object.fromEntries(keys);
for (let i = 0; i < names.length; i++) {
  if (output.includes(names[i])){
    obj[names[i]]++;
   output.push(`${names[i]}(${obj[names[i]]})`)
  } else {
    output.push(names[i])
  }
}
  return output;
}


module.exports = {
  renameFiles
};
