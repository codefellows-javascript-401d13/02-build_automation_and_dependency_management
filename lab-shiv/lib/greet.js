// 'use strict'; // every single file
//
// const greet = require('./lib/greet.js'); // define the variable where you are defining the path
// greet.sayHey = ('shiv'); // sayHey is a function of this file, and I am passing in the parameter of shiv to it.
// greet.sayBye(); // calling the function, but it does not take in any parameters.

//////////// MISTAKE //////////////////////
// MAKE SURE THAT THIS INFORMATION GOES ON THE INDEX.JS FILE, NOT THE GREET.JS FILE.

'use strict';
module.exports = exports = {};

exports.sayHey = function(name) {
  if (arguments.length === 0) throw new Error ('name not provided!');
  return `Hey ${name}!`;
}

export.sayBye = function(name) {
  return 'see you later!'; // for some reason, this doesn't need parameters.
}
