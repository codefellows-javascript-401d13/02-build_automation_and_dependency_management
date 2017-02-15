'use strict';

// This makes an object whose scope is confined to this file and attaches it to the module object
module.exports = exports = {};


// Attaches a method 'sayHey' to the export object within this file that gets exported later.
exports.sayHey = function(name){

  // if no args, throw exception
  if(arguments.length === 0) throw new Exception('name not provided');

  // otherwise, return name
  return `What's up ${name}?`;
}

// Adds another method
exports.sayBye = function(){
  return 'Goodbye.';
}
