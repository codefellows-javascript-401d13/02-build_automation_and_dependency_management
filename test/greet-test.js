'use strict';

const Greet = require('../lib/greet.js');
const expect = require('chai').expect;

describe('Greet Module Test', function(){
  describe('#greet', function() {
    it('should return hello remi', function() {
      var result = Greet.greet('remi');
      expect(Greet).to.have.property('greet');
      expect(result).to.equal('hello remi');
    });
  });
});
