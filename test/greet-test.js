'use strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;

describe('Greet Module', function() {
  describe('#sayHi', function() {
    it('should return Hello Gary!', function() {
      var result = greet.sayHi('Gary');
      expect(greet).to.have.property('sayHi');
      expect(result).to.equal('Hello Gary!');
    });

    it('should throw a missing name error', function() {
      var result = greet.sayHi;
      expect(result).to.throw(Error);
    });
  });

  describe('#sayBye', function() {
    it('should return See you later!', function() {
      var result = greet.sayBye();
      expect(result).to.equal('See you later!')
    });
  });

});
