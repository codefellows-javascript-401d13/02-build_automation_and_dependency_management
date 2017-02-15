'use strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;

describe('Greet Module', function(){
  describe('#sayHey',function(){
    it('should return hey noah',function(){
      var result = greet.sayHey('noah');
      expect(greet).to.have.property('sayHey');
      expect(result).to.equal('hey noah');
    });
    it('should have a missing name error message', function(){
      var result = greet.sayHey;
      expect(result).to.throw(Error);
    });
  });
  describe('#sayBye',function(){
    it('should return see ya later', function(){
      var result = greet.sayBye();
      expect(result).to.equal('see ya later');
    });
  });
});
