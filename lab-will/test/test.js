'use strict';
const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  describe('#sayHey', function() {
    it("Should return: What's up <name>?", function() {
      var testGreeting = greet.sayHey('Will');
      assert.ok(testGreeting === `What's up Will?`);
    })
    it('Should throw a missing name error', function(){
      assert.throws(function() {
        greet.sayHey();
      }, 'error not thrown')
    })
  })
  describe('#sayBye',function() {
    it('Should return: Goodbye.', function() {
      var testBye = 'Goodbye.';
      assert.ok(testBye === greet.sayBye(), '!== Goodbye.')
    })
  })
})
