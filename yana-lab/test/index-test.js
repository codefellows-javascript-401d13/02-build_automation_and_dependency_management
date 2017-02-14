'use strict';

const index = require('../index.js');
const expect = require('chai').expect;

describe('Index Module', function() {
  describe('#verifyName', function() {
    it('should return function call', function() {
      var result = index.verifyName;
      expect(index).to.have.property('verifyName');
      expect(result).to.be.a('function');
    });
  });
});
