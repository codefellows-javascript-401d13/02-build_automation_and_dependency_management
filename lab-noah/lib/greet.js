'use strict';

module.exports = exports = {};

exports.sayHey = function(name){
  if(arguments.length === 0) throw new Error('no name entered');
  return `hey ${name}`;
};

exports.sayBye = function() {
  return 'see ya later';
};
