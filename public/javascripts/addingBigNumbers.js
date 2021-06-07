// We need to sum big numbers and we require your help.
//
// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
// Example
//
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
//
// Notes
//
//     The input numbers are big.
//     The input is a string of only digits
//     The numbers are positives
//

const getDigits = text => {
  return text
    .split("")
    .reverse()
    .map(ch => parseInt(ch));
};

const inArray = (arr, ind) => {
  return arr.length > ind ? arr[ind] : 0;
};

function add(a, b) {
  let remainder = 0;
  let aDigits = getDigits(a);
  let bDigits = getDigits(b);
  let output = [];

  const maxLength =
    aDigits.length > bDigits.length ? aDigits.length : bDigits.length;

  for (let i = 0; i < maxLength; i++) {
    const digSum = inArray(aDigits, i) + inArray(bDigits, i) + remainder;

    remainder = digSum > 9 ? 1 : 0;

    output.push(digSum.toString()[remainder]);
  }

  if (remainder) {
    output.push(remainder);
  }

  return output.reverse().join("");
}

module.exports = { add };
