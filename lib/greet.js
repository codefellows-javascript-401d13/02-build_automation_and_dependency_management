'use strict';

module.exports = exports = {};

exports.sayHey = function(name) {
  if(arguments.length === 0) throw new Error('no name provided!');
  return `Hello ${name}, how's it going?`;
};

exports.sayBye = function(name) {
  if(arguments.length === 0) name = 'Broseidon';
  return `Thanks for stopping by ${name}!`;
};
