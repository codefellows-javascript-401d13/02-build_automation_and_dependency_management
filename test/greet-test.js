'use strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;

describe('Greet Module', function(){
  describe('#greet', function(){
    it('should output hello Zachary', function(){
      var result = greet.sayHey('Zachary');
      expect(result).to.equal('hello Zachary');
    });
    it('should throw error if no string passed', function(){
      var error = greet.sayHey;
      expect(error).to.throw(Error);
    });
  });
  describe('#sayBye', function(){
    it('should output see ya later', function(){
      var result = greet.sayBye();
      expect(result).to.equal('see ya later!');
    });
  });
});