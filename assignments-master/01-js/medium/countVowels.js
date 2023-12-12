/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(str) {
  let count = 0;

  str = str.split("");
  let strlength = str.length - 1;

  let vowelLength = vowels.length - 1;

  for (let i = 0; i <= vowelLength; i++) {
    for (let j = 0; j <= strlength; j++) {
      if (vowels[i] == str[j]) {
        count++;
      }
    }
  }
  return count;
}
const result = countVowels("Megha BathlA");
console.log(result);
module.exports = countVowels;
