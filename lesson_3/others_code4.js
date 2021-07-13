/*
PROBLEM
  - Given a string that includes number ranges, return a list of complete numebrs

Input: String
  - Includes number ranges
Output: Array of numbers/strings
  - Probably numbers

RULES
  - Explicit Rules
    - We are given a list of numbers in a short-hand range, where only the significant part
      of the next number is written, because we know the number is always increasing
    - Range separators include "-", ":", ".."
    - Return a list of complete Numbers
  - Implicit numbers

EXAMPLES
  Happy Path
  - "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
    - We check the last digit of every number to determine the complete number
  
    Ranges have different lengths
  - "545, 64:11" --> 545, 564, 565, .. 611 --> Ranges have different lengths
    - [545, 64, 11]
    - We check the last two digits of every number
  
  Range number starts with 0
  - "104-02" --> 104, 105, ... 202 
    - possibly keep numbers as stirngs

  - We need to consider ranges separated by different special chars
  - Empty string?
  - No argument?
  - 


DATA STRUCTURES
  - Strings, to separate values
    - Split, Regex
  - Arrays, to transform and iterate through values

MENTAL MODEL
  - Integers and ranges are separated by a comma
  - Ranges are separeted by either ":", "..", "-"
  - 

ALGORITHM
  - Have a variable with your starting number (first number in input string)
  - Iterate through each number range
    - For each number in range:
      - Check 
*/

function expandNumbers(numberRanges) {
  let separatedRanges = numberRanges.split(', ').map(substring => {
    if (substring.length > 1) {
      return substring.split(/[\-:..]/);
    } else {
      return substring;
    }
  })

  let startingNumber = numberRanges.match[/[0-9]+/];


}

console.log(expandNumbers("1, 3, 7, 2, 4, 1"));
console.log(expandNumbers("1-3, 1-2"));
console.log(expandNumbers("1:5:2"));
console.log(expandNumbers("104-2"));
console.log(expandNumbers("104-02"));
console.log(expandNumbers("545, 64:11"));

// function extractRanges(string) {
//   return string.match(/[0-9]+[:\-..][0-9]+/g)
// }

// console.log(extractRanges('545, 64:11'));
// console.log(extractRanges("1:5:2"));