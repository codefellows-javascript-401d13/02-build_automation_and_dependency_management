'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module Test', function(){
  describe('#greet', function() {
    it('should return hello remi', function() {
      var arg = greet.greet('remi');
      assert.ok(arg === 'hello remi', 'not equal to hello remi');
    });
  });
});
