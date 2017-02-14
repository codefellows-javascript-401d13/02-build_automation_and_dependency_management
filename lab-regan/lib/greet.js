'use strict';

module.exports = exports = {};

exports.greet = function(name){
  if (arguments.length === 0) throw new Error('name not provided!');
  if (process.argv[2] != 'test' && process.argv[2] != undefined){
    console.log(process.argv[2])
    // console.log(`hello ${process.argv[2]}`);
    return `hello ${process.argv[2]}`;
  } else {
    // console.log(`hello ${name}`);
    return `hello ${name}`;
  }
};

exports.byeNow = function(){
  console.log('bye');
  return 'bye!';
};
