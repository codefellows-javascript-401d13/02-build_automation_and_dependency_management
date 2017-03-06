'use strict'; // every single file

const greet = require('./lib/greet.js'); // define the variable where you are defining the path
greet.sayHey = ('shiv'); // sayHey is a function of this file, and I am passing in the parameter of shiv to it.
greet.sayBye(); // calling the function, but it does not take in any parameters.
