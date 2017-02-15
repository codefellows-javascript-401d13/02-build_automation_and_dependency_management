'use strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;

describe('Great Module', function() {
  describe('#sayHey', function() {
    it('should be returning Hey Shiv!', function() {
      var result = greet.sayHey('Shiv');
      expect(greet).to.have.property('sayHey');
      expect(result).to.equal('Hey Shiv!');
    });
    it('should throw a missing error name', function() {
      var result = greet.sayHey;
      expect(result).to.throw(Error);
    });
  });
    describe('#sayBye', function() {
      it('should return see ya later!', function() {
        var result = greet.sayBye;
        expect(result).to.equal('see ya later!');
      });
      it('should return a wrongful parameter error', function() {
        var result = greet.sayBye('Shiv');
        expect(result).to.throw(Error);
      })
    })
  })
});
