'use strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;

describe('Greet Module', function() {
  describe('#sayHello', function() {
    it('should return Hello brae', function() {
      var result = greet.sayHello('brae');
      expect(greet).to.have.property('sayHello');
      expect(result).to.equal('Hello brae');
    });
    it('should throw a missing name error', function() {
      var result = greet.sayHello;
      expect(result).to.throw(Error);
    });
  });
  describe('#sayBye', function() {
    it('should return see you later', function() {
      var result = greet.sayBye();
      expect(result).to.equal('see you later');
    });
  });
});
