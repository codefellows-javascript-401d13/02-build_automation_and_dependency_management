'use strict';

const assert = require('assert');
const howdy = require('../lib/howdy.js');
// const hackyMessageVariable = howdy.multipleGreetings.logMessage;
// console.log(hackyMessageVariable);

describe('Howdy Module', function() {
  describe('#greeting', function() {
    it(`should return hello ${process.argv[2]}`, function() {
      let printout = howdy.greeting(process.argv[2]);
      assert.ok(printout === `hello ${process.argv[2]}`, 'incorrect result');
    });
  });
  describe('#greeting', function() {
    it('Should result in error from missing input', function() {
      assert.throws(function() {
        howdy.greeting();
      }, 'Error not thrown for empty input');
    });
  });
  describe('#multipleGreetings', function() {
    it(`should return all names entered in command line`, function() {
      let printout = howdy.multipleGreetings(process.argv);
      assert.ok(printout === `Hey there ${hackyMessageVariable}`, 'not quite right');
    });
  });
});
