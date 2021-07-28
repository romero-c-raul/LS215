/*
**HARD PROBLEM**

Your task is to take arrays of numbers and compress them into ranges.

The numbers in the array are mostly consecutive. If you convert them as ranges, it will save a lot of space. You should write a function that will convert an array of numbers into a string. 

A range, or series of consecutive numbers, will be represented as two numbers separated by an underscore, a range of one just by the number its self and multiple ranges separated by commas.

For example,
The numbers 5, 6, 7, 8 and 9 would be displayed as "5_9"
The number 6 would just be "6"
The numbers 3,4,5,6,9 would be "3_6,9"

Inputs: Array of integers
Outputs: String 

RULES
  - Explicit Rules
    - Numbers in array are mostly consecutive
    - Convert numbers that are consecutive to each other into a range
      - This means the an underscore is prepended and appended by the first and last
        numbers in the range respectively
      - 5, 6, 7 -> 5_7
    - Express digits with 2 or more consecutive digits as a range
    - Negative numbers should be handled
    - Empty Array Returns empty string
    

CLARIFYING QUESTIONS
  - 5, 6, 7, 8 -> 5_8
  - 5, 6, 7, 9, 10, 11 -> 5_7, 9_11
  - 5, 6, 7, 9, 10 -> 5_7, 9, 10 
  - How many numbers do we consider consecutive?
    - Do we express only two digits also as a range? Any consecutive digits that have
      more than one digit?
      - Yes
  - Do we need to handle empty array?
    - Yes, return an empty string
  - Should expect any duplicate values?
    - No, do not expect duplicate values
    
EXAMPLES
  - Base Case
    - Array of only consecutive numbers
    - Array of only non consecutive numbers
    - Mix of non consecutive numbers and consecutive numbers
    - Mix of consecutive number and non consecutive number
    - Mix of consecutiive and non consecutive, 2 digits consecutive numbers
    - Mix of consecutive and non consecutive including negative numbers
  - Edge Case
    - Empty array
    
DATA STRUCTURES
  - Array; extract elements from array to build a range
  
MENTAL MODEL
  - Look at the array, and identify which consecutive elements make up a range
    - The ones that make up a range, and converted to one
    - The ones that do not, are left alone
    
ALGORITHM
  - Given an array (array)
  - Create an empty array to store the final array (finalArray)
  - Create am empty array to store temporary numbers or ranges (tempArray)
  
  - Iterate through every value in the array (currentNum)
    - Push value to tempArray
    
    - If the value is not consecutive
      - We either have a single number, or a range of numbers
        - If it is a single number, push single number to finalArray
        - If it not a single number, convert to a range
          - Push to final array
      - Reset the tempArray to an empty Array
      
  - Return the final array after joining with a space and comma
*/


function createRange(array) {
  if (array.length <= 1) {
    return array[0];
  }
  
  return array[0] + '_' + array.slice(-1);
}


function convertToRange(array) {
  let finalArray = [];
  let tempArray = [];
  
  array.forEach((currentNum, index) => {
    tempArray.push(currentNum);
    
    if (currentNum + 1 !== array[index + 1]) {
      finalArray.push(createRange(tempArray));
      tempArray = [];
    }
    
  })
  
  return finalArray.join(', ');
}

console.log(convertToRange([1, 2, 3, 4, 5])); // '1_5'
console.log(convertToRange([1, 3, 5, 7, 9])); // '1, 3, 5, 7, 9'
console.log(convertToRange([1, 2, 3, 4, 5, 9, 10, 11])); // '1_5, 9_11'
console.log(convertToRange([1, 3, 5, 9, 10, 11])); // '1, 3, 5, 9_11'
console.log(convertToRange([1, 2, 4, 5, 6, 8, 9])); // '1_2, 4_6, 8_9'
console.log(convertToRange([1, 2, 3, 4, 5])); // '1_5'
console.log(convertToRange([-3, -2, -1, 5, 6, 7])); // '-3_-1, 5_7'
console.log(convertToRange([])); // ''