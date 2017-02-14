'use strict';

module.exports = function greet(name){
  if (arguments.length === 0) throw new Error('no name provided');
  return `hello ${name}`;
};