/*
PROBLEM
  - Write a function that takes any two version numbers in this format and compares them
    - Format :1
              1.0
              1.2
              3.2.3
              3.0.0
              4.2.3.0

Input: two strings that represent a software version
Output: integer, either 1, -1, 0, or null

RULES
  - Explicit Rules
    - If version1 > version2, we should return 1.
    - If version1 < version2, we should return -1.
    - If version1 === version2, we should return 0.
    - If either version number contains characters other than digits and the . character, 
      we should return null.
  - Implicit rules
    - Integers and their decimal equivalent are considered equal:
      - 1 = 1.0
    - Version numbers with extra zeroes do not factor into the comparison, trailing zeroes
      are not considered when calculating a version
      - 1.2 = 1.2.0.0

EXAMPLES
  - Happy Path
    - input: "1.2.3", '1.2.3'
    - output: 0

    - Input: '1.2.5', '1.2.0'
    - output: 1

    - Input: '1.1.5', '1.2.0'
    - output: 1

    - Input: '1.3.0.0', '1.5'
    - output: -1
  
  - Edge Cases
    - Multiple consecutive dots?
    - Characters other than digits and dots
    - Decimals starting with 0

    input: '1..2.0', '1.3.0'
    output: null

    input 'a.2.3', '1.1.1'
    output: null

DATA STRUCTURES
  - Strings
    - To validate strings before version comparison
  - Arrays
    - To store all the version numbers

ALGORITHM
  - Validate strings - Should not have anything other than dots and digits, also check for consecutive dots
  - Identify all digits in both strings, and create an array to store said digits for both
    strings
  - Determine the maximum number of digits we have
  - Iterate through both arrays at the same time, based on the maximum amount of digits
    we have
    - On each iteration, we will compare digits on both arrays
    - If one array is shorter than the other, the digit being compared will default to 0
    - If at any point, a digit from array1 is greater than array 2, return 1
    - If a digit from array 1 is less than array 2, return -1
    - If we get through the whole iteration, return 0
*/

function invalidStrings(version1, version2) {
  if (/[^\d.]/.test(version1) || /[^\d.]/.test(version2) ) {
    return true;
  }

  if (/\.{2,}/.test(version1) || /\.{2,}/.test(version2)) {
    return true;
  }
}

function compareVersions(version1, version2) {
  if (invalidStrings(version1, version2)) {
    return null;
  }

  let firstVersionDigits = version1.split('.');
  let secondVersionDigits = version2.split('.');

  let maxLength = firstVersionDigits.length >= secondVersionDigits.length ? 
                  firstVersionDigits.length : secondVersionDigits.length;

  for(let index = 0; index < maxLength - 1; index += 1) {
    let versionOneNumber = (firstVersionDigits[index]) || 0;
    let versionTwoNumber = (secondVersionDigits[index]) || 0;

    if (versionOneNumber.startsWith('0')) {
      versionOneNumber = '.' + versionOneNumber;
    } else if (versionTwoNumber.startsWith('0')) {
      versionTwoNumber = '.' + versionTwoNumber;
    }
    
    if (Number(versionOneNumber) > Number(versionTwoNumber)) {
      return 1;
    } else if (Number(versionOneNumber) < Number(versionTwoNumber)) {
      return -1;
    }
  }

  return 0;
}

console.log(compareVersions('1.1.1', '1.2.1')); // return -1
console.log(compareVersions('1.1.1', '1.1.1')); // return 0
console.log(compareVersions('1.3.1', '1.2.1')); // return 1
console.log(compareVersions('1.1.1', '1.2.1.0.0')); // return -1, testing for strings of different sizes
console.log(compareVersions('1.2.2.4.2', '1.2.1')); // return 1
console.log(compareVersions('1..1.1', '1.2.1')); // return null
console.log(compareVersions('1.1.1', '1.2.1.c')); // return null
console.log(compareVersions('1.1.1', '1.2.1.  c')); // null
console.log(compareVersions('1.22.4', '1.3.5')); // return 1
console.log(compareVersions('1.22.4', '1.54.5')); // return -1
console.log(compareVersions('1.1.4', '1.05.5')); // return 1