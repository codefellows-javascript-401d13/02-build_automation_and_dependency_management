'use strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;

describe('Greet Module', function() {
  describe('#hello', function() {
    it('should return hello anna', function() {
      var result = greet.hello('anna');
      expect(greet).to.have.property('hello');
      expect(result).to.equal('hello anna');
    });

    it('should throw a missing name error', function() {
      var result = greet.hello;
      expect(result).to.throw(Error);
    });
  });

  describe('#bye', function() {
    it('should return see you later!', function() {
      var result = greet.bye('anna');
      expect(greet).to.have.property('bye');
      expect(result).to.equal('bye anna');
    });
  });
});
