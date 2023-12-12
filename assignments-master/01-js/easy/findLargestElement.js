/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

const numbers = [3, 7, 2, 9, 1];

function findLargestElement(numbers) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (max > numbers[i]) {
      max = max;
    } else {
      max = numbers[i];
    }
  }
  return max;
}
const result = findLargestElement(numbers);
console.log(result);

module.exports = findLargestElement;
