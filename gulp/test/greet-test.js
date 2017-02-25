'use strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;

describe('Greet Module', function() {
  describe('#sayHey', function(){
    it('should return hey darcy', function() {
      var result = greet.sayHey('darcy');
      expect(greet).to.have.property('sayHey');
      expect(result).to.equal('hey darcy');
    });
    
    it('should throw a missing name error', function() {
      var result = greet.sayHey;
      expect(result).to.throw(Error);
    });
  });

  describe('#sayBye', function(){
    it('should return see ya later!', function() {
      var endResult = greet.sayBye();
      expect(greet).to.have.property('sayBye');
      expect(endResult).to.equal('see ya later!');
    });
  });
});
