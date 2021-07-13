/*
PROBLEM
  - Write a program that cleans up user-entered phone numbers so that they can be sent
    as SMS messages
  - Other than digits, special chars such as spaces, dash, dot, and parentheses that should
    be ignored

Input: string representation of phone number, may contain special chars
Output: String in the format: (###) ###-####

RULES
  - Explicit rules
    - Good numbers:
      - If a phone number has 10 digits, assume it is good
      - If a phone number is 11 digits, and the first number is 1, use the last 10 digits
    - Bad numbers:
      - Number is less than 10 digits
      - Number is more than 11 digits
      - Number is 11 digits and first number is not 1
      - Return a string of 10 0's if number is considered bad


EXAMPLES
  input: +1 (956)-999-5448   // Happy path
  output: (956) 999-5448

  input: +52 678 899 9900     // Greater than 11 digits
  output: 0000000000

  input: 990-102-200          // Less than 11 digits
  output: 0000000000

  input: +5 (956)-999-5448   // 11 digits but first digit is not 1
  output: return 0000000000

  Edge Case:
    - Empty String? return 0000000000
    - No argument passed to function?  return 0000000000
    - Passed data type other than string? return 0000000000



DATA STRUCTURES
  - Strings
    - Allow us to clean up string from special characters
  - Arrays
    - Can be used to convert numbers into their number counterpart if needed

ALGORITHM
  - If input string is empty, undefined, or anything other than a string,
    return '0000000000'

  - Remove all characters that are not numbers from input string
  - Count the length of the numbers only and
    - Less than 10 returns '0000000000'
    - More than 11 returns '0000000000'
    - 11 digits 
      - If first char is not '1', return '0000000000'
      - re-assign string to only the last 10 characters

  - Separate numbers in subsections of three numbers, three numbers, and four numbers
  - String interpolate into the following format (###) ###-####
  - Return interpolated string
*/

const INVALID_NUMBER = '0000000000';

function cleanPhoneNumber(string) {
  if (string === undefined || string.length < 1 || typeof string !== 'string') {
    return INVALID_NUMBER;
  }
  
  let onlyDigits = string.replace(/[^0-9]/gi, '');

  if (onlyDigits.length < 10 || onlyDigits.length > 11) {
    return INVALID_NUMBER;
  } else if (onlyDigits.length === 11) {
    if (onlyDigits[0] !== '1') return INVALID_NUMBER;
    onlyDigits = onlyDigits.slice(1);
  }

  let areaCode = onlyDigits.substr(0, 3);
  let midDigits = onlyDigits.substr(3, 3);
  let endDigits = onlyDigits.substr(6, 4);
  return `(${areaCode}) ${midDigits}-${endDigits}`;
}

console.log(cleanPhoneNumber('+1 (956)-999-5448'));   // return (956) 999-5448
console.log(cleanPhoneNumber('(9 56 )-9 99-5448'));   // return (956) 999-5448
console.log(cleanPhoneNumber('(9-56-999-54-48'));   // return (956) 999-5448
console.log(cleanPhoneNumber('+52 678 899 9900'));    // return 0000000000
console.log(cleanPhoneNumber('990-102-200'));         // return 0000000000
console.log(cleanPhoneNumber('+5 (956)-999-5448'));   // return 0000000000

console.log(cleanPhoneNumber(''));                  // return 0000000000
console.log(cleanPhoneNumber());                    // return 0000000000
console.log(cleanPhoneNumber(['867 980 1000']));    // return 0000000000
