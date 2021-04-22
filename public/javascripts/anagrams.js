// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
//
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
//
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

function anagrams(word, words) {
  let matches = [];

  const matchLetters = possible => {
    let possibleLetters = possible.split('');

    word.split('').forEach(ch => {
      if (possibleLetters.indexOf(ch) > -1) {
        possibleLetters.splice(possibleLetters.indexOf(ch), 1);
      }
    });

    return possibleLetters.length === 0;
  };

  matches = words.map(possible => (matchLetters(possible) ? possible : null)).filter(a => a);

  return matches;
}

module.exports = { anagrams };
