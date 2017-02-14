'use strict';

const howdy = require('../lib/howdy.js');
const expect = require('chai').expect;
const hackyMessageVariable = howdy.multipleGreetings.logMessage;
// console.log(hackyMessageVariable);

describe('Howdy Module', function() {
  describe('#greeting', function() {
    it(`should return hello ${process.argv[2]}`, function() {
      let printout = howdy.greeting(process.argv[2]);
      expect(howdy).to.have.property('greeting');
      expect(printout).to.match(/^[a-zA-Z,!\s]+/);
      expect(printout).to.eql(`hello ${process.argv[2]}`);
    });

    it('Should result in error from missing input', function() {
      let fn = howdy.greeting;
      expect(fn).to.throw(Error);
    });
  });

  describe('#multipleGreetings', function() {
    it('should return all names entered in command line', function() {
      let printout = howdy.multipleGreetings(process.argv);
      // assert.ok(printout === `Hey there ${hackyMessageVariable}`, 'not quite right');
      expect(printout).to.match(/^[a-zA-Z,!\s]+/);
    });
  });
});
