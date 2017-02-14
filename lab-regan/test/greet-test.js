'use strict';

const welcome = require('../lib/greet.js');

const expect = require('chai').expect;

describe('Greet Module', function(){

  describe('#sayHello', function(){

    it('should return hello regan', function(){
      var outcome = welcome.greet('regan');
      expect(welcome).to.have.property('greet');
      expect(outcome).to.equal('hello regan');
      //refactor this
      // assert.ok(outcome === 'hello regan', 'not equal to "hello regan"');
    });//end it

    it('should throw a missing name error', function(){
      var outcome = welcome.greet;
      expect(outcome).to.throw(Error);
    });//end it
  });//end describe - '#sayHello'

  describe('#byeNow', function(){

    it('should return bye!', function(){
      var outcome = welcome.byeNow();
      expect(welcome).to.have.property('byeNow');
      expect(outcome).to.equal('bye!');
    });//end it
  });//end describe #byeNow

});//end describe - 'Greet Module'
