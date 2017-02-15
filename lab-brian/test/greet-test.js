'use strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;

describe('Greet Module', function(){
  describe('#sayHello', function(){
    it('should return a string of hey name', function(){
      var result = greet.sayHello('brian');
      expect(greet).to.have.property('sayHello');
      expect(result).to.equal('hey brian');
    });
    it('should throw a missing name error', function(){
      var result = greet.sayHello;
      expect(result).to.throw(Error);
    });
  });
  describe('#sayGoodBye', function(){
    it('should return see you soon baboon', function(){
      var result = greet.sayGoodBye();
      expect(result).to.equal('see you soon baboon');
    });
  });
});
