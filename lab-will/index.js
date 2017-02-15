
'use strict';

// This grabs the code in greet.js and plops it right here
const greet = require('./lib/greet.js');


// Calls both methods and print results. Passes the third cmd line arg into sayHey
console.log(greet.sayHey(process.argv[2]));
console.log(greet.sayBye());

// console.log(process.argv[2]);
