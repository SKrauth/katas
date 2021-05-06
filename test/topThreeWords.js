let assert = require("assert");
var expect = require('chai').expect;
var should = require('chai').should();
let kata = require("../public/javascripts/topThreeWords");

// Test.assertDeepEquals(topThreeWords("a a a  b  c c  d d d d  e e e e e"), ['e','d','a'])
//
// Test.assertDeepEquals(topThreeWords("a a c b b"), ['a','b','c'])
//
// Test.assertDeepEquals(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"),['e','ddd','aa'])
//
// Test.assertDeepEquals(topThreeWords("  //wont won't won't "), ["won't", "wont"])
//
// Test.assertDeepEquals(topThreeWords("  , e   .. "), ["e"])
//
// Test.assertDeepEquals(topThreeWords("  ...  "), [])
//
// Test.assertDeepEquals(topThreeWords("  '  "), [])
//
// Test.assertDeepEquals(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.`), ['a','of','on'])
// });

describe("Top Three Words", function() {
  describe("sample values", function() {
    it("should handle individual letters", function() {
      expect(kata.topThreeWords("a a a  b  c c  d d d d  e e e e e")).to.eql(['e','d','a']);
    });

    it("should resolve ties gracefully", function() {
      expect(kata.topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")).to.eql(['e','ddd','aa']);
    });

    it("should allow apostrophes", function() {
      expect(kata.topThreeWords("  //wont won't won't ")).to.eql(["won't", "wont"]);
    });

    it("should be able to return a single result", function() {
      expect(kata.topThreeWords("  , e   .. ")).to.eql(["e"]);
    });

    it("should be able to return an empty result", function() {
      expect(kata.topThreeWords("  ...  ")).to.eql([]);
      expect(kata.topThreeWords("  '  ")).to.eql([]);
    });

    it("should handle paragraphs of text", function() {
      expect(kata.topThreeWords("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.")).to.eql(['a','of','on']);
    });
  });
});
