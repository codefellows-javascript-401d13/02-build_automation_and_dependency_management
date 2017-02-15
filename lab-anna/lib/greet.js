'use strict';

module.exports = exports = {};

exports.hello = function(name) {
  if (arguments.length === 0) throw Error('name not provided');
  return `hello ${name}`;
};

exports.bye = function(name) {
  if (arguments.length === 0) throw Error('name not provided');
  return `bye ${name}`;
};

// if (require.main === module) {
//   console.log(exports.hello(process.argv[2]));
// }
