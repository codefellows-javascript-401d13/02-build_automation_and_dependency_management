'use strict';

const welcome = require('./lib/howdy.js');

if (process.argv.length < 3) throw new Error('please enter a name!');

if (process.argv.length === 3) welcome.greeting(process.argv[2]);

if (process.argv.length > 3) welcome.multipleGreetings(process.argv);
