'use strict';

const sayHey = require('./lib/greetings.js');

function verifyName() {
  var regex = new RegExp(/[^a-zA-z]/, 'g');
  for (let i = 2; i <= process.argv.length; i++) {
    if (!regex.test(process.argv[i])) return console.log(sayHey.greet(process.argv[i]));
  }
  return (console.log(sayHey.greet()));
}

verifyName();
