'use strict';

module.exports = exports = {};

exports.sayHello = function(name) {
  if(arguments.length === 0) throw new Error('Name not provided');
  return `hey ${name}`;
};

exports.sayGoodBye = function(){
  return 'see you soon baboon';
};
