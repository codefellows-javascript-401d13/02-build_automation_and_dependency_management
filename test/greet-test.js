'use strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;

describe('Good Module', function(){
  describe('#sayHey', function(){
    it('should return hello jeremiah!', function() {
      var result = greet.sayHey('jeremiah');
      expect(greet).to.have.property('sayHey');
      expect(result).to.equal('hello jeremiah!');
    });
    it('should throw a missing name error', function() {
      var result = greet.sayHey;
      expect(result).to.throw(Error);
    });
  });

  describe('#sayByeBye', function() {
    it('should return see ya later!', function(){
      var result = greet.sayByeBye();
      expect(result).to.equal('see ya later!');
    });
  });
});
