'use strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;

describe('Greet Module', function(){
  describe('#greet', function(){
    it('should output hello Zachary', function(){
      var result = greet('Zachary');
      expect(result).to.equal('hello Zachary');
    });
    it('should throw error if no string passed', function(){
      var error = greet;
      expect(error).to.throw(Error);
    });
  });
});