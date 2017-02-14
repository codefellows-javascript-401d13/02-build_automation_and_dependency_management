'use strict';

module.exports = exports = {};

exports.greeting = function(name) {
  if (arguments.length === 0) throw new Error('no name given');
  console.log(`What's up, ${name}?!`);
  return `hello ${name}`;
};

exports.multipleGreetings = function(termInput) {
  let names = termInput.slice(2);
  let logMessage = " ";
  logMessage += names.slice(0, -1).join(', ');
  logMessage += (' and ');
  logMessage += names.slice(-1).join('');
  logMessage += ('!');
  console.log(`Hey there ${logMessage}`);
  return `Hey there ${logMessage}`;
};
