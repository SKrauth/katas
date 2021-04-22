let assert = require('assert');
let kata = require('../public/javascripts/anagrams')

const sampleSet1 = ['aabb', 'abcd', 'bbaa', 'dada'];
const sampleResult1 = ['aabb', 'bbaa'];

const sampleSet2 = ['crazer', 'carer', 'racar', 'caers', 'racer'];
const sampleResult2 = ['carer', 'racer'];

const sampleSet3 = ['lazing', 'lazy',  'lacer'];
const sampleResult3 = [];

describe('Anagrams', function() {
  describe('abba example', function() {
    it(`should return ${sampleResult1.length} results`, function() {
      assert.equal(kata.anagrams('abba', sampleSet1).length, sampleResult1.length);
    });
  });

  describe('racer example', function() {
    it(`should return ${sampleResult2.length} results`, function() {
      assert.equal(kata.anagrams('racer', sampleSet2).length, sampleResult2.length);
    })
  })

  describe('laser example', function() {
    it(`should return ${sampleResult3.length} results`, function(){
      assert.equal(kata.anagrams('laser', sampleSet3).length, sampleResult3.length)
    })
  })
});
