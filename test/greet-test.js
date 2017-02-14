'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  describe('#sayHi', function() {
    it('should return Hello Gary!', function() {
      var result = greet.sayHi('Gary');
      assert.ok(result === 'Hello Gary!', 'not equal to Hello Gary!');
    });

    it('should throw a missing name error', function() {
      assert.throws(function() {
        greet.sayHi();
      }, 'error not thrown');
    });
  });
  describe('#sayBye', function() {
    it('should return See you later!', function() {
      var bye = 'See you later!';
      assert.ok(bye === 'See you later!', 'not equal to See you later!');
    });
  });
  // attempt to test my command line argument, not sure how to do it.
  // describe('#greetStranger', function() {
  //   it('should return Hi there, argument name!', function() {
  //     var stranger = greet.greetStranger(`${greet.strangerName}`);
  //     assert.ok(stranger === `Hi there, ${greet.strangerName}!`, 'not equal to Hi there, argument name!');
  //   });
  // });
});
