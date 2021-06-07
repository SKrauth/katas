let assert = require("assert");
let kata = require("../public/javascripts/addingBigNumbers");

// Test.assertEquals(add("1", "1"), "2");
// Test.assertEquals(add("123", "456"), "579");
// Test.assertEquals(add("888", "222"), "1110");
// Test.assertEquals(add("1372", "69"), "1441");
// Test.assertEquals(add("12", "456"), "468");
// Test.assertEquals(add("101", "100"), "201");
// Test.assertEquals(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")


describe("Add Big Numbers", function() {
  describe("with some numbers", function() {
    it(`should return the sum`, function() {
      assert.equal(kata.add("1", "1"), "2");
      assert.equal(kata.add("123", "456"), "579");
      assert.equal(kata.add("888", "222"), "1110");
      assert.equal(kata.add("1372", "69"), "1441");
      assert.equal(kata.add("12", "456"), "468");
      assert.equal(kata.add("101", "100"), "201");
      assert.equal(kata.add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963");
    });
  });
});
