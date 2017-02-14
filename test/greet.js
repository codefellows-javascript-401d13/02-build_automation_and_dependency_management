'use-strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;

describe('Greet Module', function(){
  describe('#sayHey', function() {
    it('should return Hello Nikko, how\'s it going?', function() {
      var output = greet.sayHey('Nikko');
      expect(output).to.equal('Hello Nikko, how\'s it going?');
      expect(output).to.be.a('string');
      expect(greet.sayHey()).to.be.an('error');
    });
  });
  describe('#sayBye', function() {
    it('should return Thanks for stopping by Nikko!', function() {
      var output = greet.sayBye('Nikko');
      expect(output).to.equal('Thanks for stopping by Nikko!');
      expect(output).to.be.a('string');
      expect(greet.sayBye()).to.equal('Thanks for stopping by Broseidon!');
    });
  });
});
