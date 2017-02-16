'use strict';

const sayHey = require('../lib/greetings.js');
const expect = require('chai').expect;

describe('Greet Module', function() {
  describe('#sayHey', function() {
    it('should return hey Bob!', function() {
      var result = sayHey.greet('Bob');
      expect(sayHey).to.have.property('greet');
      expect(result).to.equal('hey Bob!');
    });
    it('should throw an error if no name provided', function() {
      var result = sayHey.greet;
      expect(result).to.throw(Error);
    });
  });
});
