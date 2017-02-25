'use strict';

module.exports = exports = {};

exports.sayHey = function(name) {
  if (arguments.lenght === 0) throw new Error('name not provided');
  return `hey ${name}`;
};

exports.sayBye = function() {
  return 'see ya later!';
};
