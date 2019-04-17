var chai = require('chai');
var expect = chai.expect;
var summationOfPrimes = require('../summationOfPrimes.js');

describe('Find the sum of all prime number below the limit', function () {
  it('should find the sum of primes below 10', function () {
    var result = summationOfPrimes(10);
    expect(result).to.equal(17);
  });

  it('should find the sum of primes below two million', function () {
    var result = summationOfPrimes(2000000);
    expect(result).to.equal(142913828922);
  });
});
