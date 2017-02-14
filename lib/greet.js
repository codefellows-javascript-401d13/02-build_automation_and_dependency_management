'use strict';

module.exports = exports = {};

exports.greet = function greet(name) {
  return `hello ${name}`;
}

if(process.argv[2]) console.log(exports.greet(process.argv[2]));
