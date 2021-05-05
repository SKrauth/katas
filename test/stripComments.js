let assert = require("assert");
let kata = require("../public/javascripts/stripComments");

let test1 = "apples, plums % and bananas\npears\noranges !applesauce";
let test2 = "Q @b\nu\ne -e f g"

let markers1 = ["%", "!"]
let markers2 = ["@", "-"]

let result1 = "apples, plums\npears\noranges"
let result2 = "Q\nu\ne"

describe("Strip Comments", function() {
  describe("sample values", function() {
    it("should return result1 when given test1", function() {
      assert.equal(kata.stripComments(test1, markers1), result1)
    });

    it("should return result2 when given test2", function() {
      assert.equal(kata.stripComments(test2, markers2), result2)
    });
  });

  describe("input tests", function(){
    it("should return input if markers are empty", function() {
      assert.equal(kata.stripComments("this should be returned", []), "this should be returned")
    })


    it("should handle empty input", function() {
      assert.equal(kata.stripComments("", []), "");
    });
  })
});
