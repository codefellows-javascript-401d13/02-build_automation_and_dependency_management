'use strict';

module.exports = exports = {};


exports.sayHey = function greet(name) {
  if(arguments.length === 0) throw new Error('name not provided');
  return `hello ${name}!`;
};

exports.sayByeBye = function() {
  return 'see ya later!';
};
