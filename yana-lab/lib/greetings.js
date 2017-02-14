'use strict';

module.exports = exports = {};

exports.greet = function(name) {
  if (arguments[0] === undefined) throw new Error('no name was passed into fx')
  return `hey ${name}!`;
}
