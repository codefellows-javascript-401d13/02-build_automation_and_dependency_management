'use strict';

const sayHey = require('../lib/greetings.js');
const assert = require('assert');

describe('Greet Module', function() {
  describe('#greet', function() {
    it('should return hey Bob!', function() {
      var result = sayHey.greet('Bob');
      assert.ok(result === 'hey Bob!', 'does not equal hey Bob!');
    });
    it('should throw an error if no name provided', function() {
      assert.throws(function() {
        sayHey.greet();
      }, 'error not thrown');
    });
  });
});
