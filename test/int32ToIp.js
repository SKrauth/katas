let assert = require('assert');
let kata = require('../public/javascripts/int32ToIp')

describe('int32 to IPv4', function() {
  describe('test values', function() {
    it('should return valid IPv4 for 2154959208', function() {
      assert.equal(kata.int32ToIp(2154959208), "128.114.17.104");
    });

    it('should return valid IPv4 for 2149583361', function(){
      assert.equal(kata.int32ToIp(2149583361), "128.32.10.1");
    })

    it('should handle zeros', function() {
      assert.equal(kata.int32ToIp(0), "0.0.0.0");
    })
  });
});
