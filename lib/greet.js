'use strict';


module.exports = exports = {};
var someName = process.argv[2];

exports.sayHi = function greet(name) {
  if(arguments.length === 0) throw new Error('name not provided');
  return `hello ${name}!`;
};

exports.sayBye = function () {
  return 'see ya later!!';
};

exports.randomGreeting = function(){
  console.log(`hi ${someName}!`);
};
