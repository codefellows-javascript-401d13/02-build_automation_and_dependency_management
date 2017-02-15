'use strict';
const greet = require('../lib/greet.js');
const expect = require('chai').expect;

describe('Greet Module', function() {
  describe('#sayHey', function() {
    it('Should return: Whats up <name>?', function() {
      var testGreeting = greet.sayHey('Will');
      expect(testGreeting).to.equal(`What's up Will?`);
    });
  describe('#sayHey', function() {
    it('Should throw a missing name error', function(){
      var testGreeting = greet.sayHey;
      expect(testGreeting).to.throw(Error);
      // assert.throws(function() {
      //   greet.sayHey();
      // }, 'error not thrown');
    });
  })

  });
  describe('#sayBye',function() {
    it('Should return: Goodbye.', function() {
      var testBye = 'Goodbye.';
      expect(testBye).to.equal(greet.sayBye());
    });
  });
});
