let assert = require("assert");
var expect = require('chai').expect;
var should = require('chai').should();
let kata = require("../public/javascripts/sumOfDivided");

const sample1 = [12, 15];
const result1 = [
  [2, 12],
  [3, 27],
  [5, 15]
];
const sample2 = [15, 21, 24, 30, 45];
const result2 = [
  [2, 54],
  [3, 135],
  [5, 90],
  [7, 21]
];

describe("Sum of Divided", function() {
  describe("sample values", function() {
    it("should return result1 when given sample1", function() {
      expect(kata.sumOfDivided(sample1)).to.eql(result1);
    });

    it("should return result2 when given sample2", function() {
      expect(kata.sumOfDivided(sample2)).to.eql(result2);
    });
  });

  describe("single input", function(){
    // saving for later debugging
    // it("should return prime numbers", function(){
    //   expect(kata.sumOfDivided([107])).to.eql([107])
    // })


    it("should handle empty lists", function() {
      expect(kata.sumOfDivided([])).to.eql([]);
    });
  })
});
