'use strict';

module.exports = exports = {};

var strangerName = process.argv[2];

exports.sayHi = function(name) {
  if (arguments.length === 0) throw new Error('name not provided');
  return `Hello ${name}!`;
};

exports.sayBye = function() {
  console.log('See you later!');
};

exports.greetStranger = function() {
  console.log(`Hi there, ${strangerName}!`);
};
