'use strict';

const greet = require ('../lib/greet.js');
const expect = require ('chai').expect;

describe('Greeting Module',function() {
  describe('#sayHi', function (){
    it('should return hello cayla!', function(){
      var result = greet.sayHi('cayla');
      expect(greet).to.have.property('sayHi');
      expect(result).to.equal('hello cayla!')
    });

    it('should throw a missing name name error', function(){
      var result = greet.sayHi;
      expect(result).to.throw(Error);
    });
  });

  describe('#sayBye', function(){
    it('should return see ya later!!', function(){
      var result = greet.sayBye();
      expect(result).to.equal('see ya later!!')
    });
  });
});
