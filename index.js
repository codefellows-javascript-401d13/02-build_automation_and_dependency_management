'use strict';

let len = process.argv.length;
let greet = require('./lib/greet.js');

if (len <= 2) return greet();

for (let i = 2; i<len; i++){
  let name = process.argv[i];
  console.log(greet(name));
}
