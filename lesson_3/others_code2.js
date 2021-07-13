/*
PROBLEM
  - Write a program that, given a number in string format, check if its valid per the
    Luhn formula

Input: String, number representation
Output: Boolean, we want to know if number is valid or not

RULES
  - Explicit rules
    - Number must pass the following test:
      - 1. Counting from the rightmost digit and moving left, double the value of every
           second digit
      - 2. For every digit that becomes 10 or more, subtract 9 from result
      - 3. All these digits together
      - 4. If the total % 10 is equal to 0, the number is valid, else it is not

    - Ignore all non-numeric strings
  
  - Implicit rules
    - Return a boolean

EXAMPLES
  input: '1111'
  output: false

  input: '8763'
  output: true

  Edge Cases
    - Empty string? 
    - What if we have special chars or alphabetical chars?
    - What is input is 0?
    
    // Alpha chars included
    input: '8a76b3'
    output: true

    input: 'x11z  11y'
    output: false

    // Empty string
    input: ''
    output: false

    // Input is 0
    input: '0'
    output: false

    // Negative sign
    input: '-8763'
    output: true

DATA STRUCTURES
  - Strings, used to clean up and validate string
  - Array, used to transform individual elements/numbers

ALGORITHM
  - Remove any characters from given string that are not digits
  - If string is empty or '0', return false

  - Split given string into individual digits, and reverse 
  - Map through each digit and index and:
    - For every odd index (1, 3, 5, 7...):
      - Convert digit to number and multiply by 2
      - If result is greater than or equal to 10, subtract 9
      - Return result
    - For every even index, simply return digit converted to number
    - You will end up with an array where each element is an integer
  
  - Reduce array by adding up all its elements
  - If the total % 10 is equal to zero, return true. If it is not, return false
*/

function checkValidNum(string) {
  string = string.replace(/[^0-9]/g, '');
  if (string === '' || string === '0') {
    return false;
  }

  let allMultipliedDigits = string.split('').reverse().map((digit, index) => {
    let integerDigit = parseInt(digit, 10);

    if (index % 2 === 1) {
      integerDigit *= 2;

      if (integerDigit >= 10) {
        integerDigit -= 9;
      }

      return integerDigit;
    } else {
      return integerDigit;
    }

  })

  let sumOfDigits = allMultipliedDigits.reduce((total, num) => total + num);
  return sumOfDigits % 10 === 0;
}



// // Main Cases/Happy Paths
// console.log(checkValidNum("2323 2005 7766 3554")); // true
// console.log(checkValidNum('1111')); // false
// console.log(checkValidNum('8763')); // true
// console.log(checkValidNum('8a76b3')); // true
// console.log(checkValidNum('x11z  11y')); // false

// // Edge Cases
// console.log(checkValidNum('')); // false
// console.log(checkValidNum('0')); // false
// console.log(checkValidNum('-8763'));  // true
// console.log(checkValidNum('abcde')); // false
// console.log(checkValidNum('    ')); // false

/*
ALGORITHM
  - Input string will be an invalid luhn number
  - Iterate from numbers 0 ... 9
    - Prepend number to input string and check if it is valid
      - If it is return new string
      - If it is not, continue

*/

function addCheckDigit(string) {
  let checkDigit;

  for(let number = 0; number < 10; number += 1) {
    let testString = string + number.toString();

    if (checkValidNum(testString)) {
      checkDigit = number;
      break;
    }
  }

  return string + checkDigit;
}

console.log(addCheckDigit('1111')); // return 1114
console.log(addCheckDigit("2323 2005 7766 355")); // 2323 2005 7766 355
