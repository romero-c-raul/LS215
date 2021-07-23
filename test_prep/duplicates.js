/*
PROBLEM
  You are given a table, in which every key is a stringified number, and each 
  corresponding value is an array of characters, e.g.

  {
    "1": ["A", "B", "C"],
    "2": ["A", "B", "D", "A"],
  }
  
  Create a function that returns a table with the same keys, but each 
  character should appear only once among the value-arrays, e.g.

  {
    "1": ["C"],
    "2": ["A", "B", "D"],
  }

Inputs: Object (keys are string representation of numbers, values are arrays of letters)
Output: Object (keys are string representation of numbers, values are arrays of letters)

RULES
  - Explicit Rules
    - Create a function that returns a table with the same keys, but each character should appear only
      once among the value-arrays
    - Whenever two keys share the same character, they should compare numberical and the larger key
      will keep that character
    - If duplicate characters are found in the same array, the first occurance should be kept


CLARIFYING QUESTIONS
  - How many duplicates can you have within the same array?
  - What if we have an empty value?
  - Are we always dealing with uppercase letters?
  - Are they keys always in ascending order and continuous? Meaning 1, 2, 3, ...8, 9, 10
  - How do we handle a single key-value pair?
  - How do we handle empty object? (No key-value pairs)
  - How do we handle wrong input?
  - Do we deal with only letters? What if there are special characters

EXAMPLES
  - BASE CASE
    - Two key-value pairs 
      - {1: [A, B, C], 2: [A, B, D, A]} => {1: [C], 2: [A, B, D]]}
    - Three key-value pairs
      -  {1: [A, B, C], 2: [A, B, D, A], 3: [A, B]} => {1: [C], 2: [D], 3: [A, B]]}
      - {1: [A, B, C], 2: [A, B, D, A], 3: [A, B, C]} => {1: [], 2: [D], 3: [A, B, C]]}
      
  - Edge Cases
    - {} as input
    - undefined as input (empty argument)
    
ALGORITHM
  - Given an object
  - Create a new array (finalValues)
  - Iterate through every value in the object (array)
    - Iterate through every element of the current array (current element)
      - For every element:
        - Create a new array (finalRow)
        
        - Check if said element is present in any of the subsequent values in the object
          - If we are looking at the first row first element
            - Check if that element is present in the second, third, fourth rows
          - If we are looking at the second row, third element
            - Check if that element is present in the third, and fourth rows
          
          - If the element is present in any of the subsequent values (rows)
            - Do nothing
          - If the element is not present in any of the subsequent values (rows)
            - Push the element into the final row ONLY if its not present already in the final
            
  
  - Convert finalValues into an object 
*/

function duplicates(object = {}) {
  if (Object.entries(object).length < 1) {
    return {};
  }
  
  let finalValues = [];
  let allKeys = Object.keys(object);
  
  for(let currentRow = 1; currentRow <= allKeys.length; currentRow += 1) {
    let currentValues = object[currentRow];
    let finalRow = []

    for(let index = 0; index < currentValues.length; index += 1) {
      let remainingRows = Object.values(object).slice(currentRow).flat();
      let currentElement = currentValues[index];
      
      if (!remainingRows.includes(currentElement)) {
        if (!finalRow.includes(currentElement)) {
          finalRow.push(currentElement);
        }
      }      
    }
    
    finalValues.push(finalRow);
  }
  
  let duplicateObject = {}
  for(let row = 1; row <= finalValues.length; row += 1) {
    duplicateObject[row] = finalValues[row - 1];
  }
  
  return duplicateObject;
}

console.log(duplicates({1: ['A', 'B', 'C'], 2: ['A', 'B', 'D', 'A']})); // {1: [C], 2: [A, B, D]]}
console.log(duplicates({1: ['A', 'B', 'C'], 2: ['A', 'B', 'D', 'A'], 3: ['A', 'B']})); // {1: [C], 2: [D], 3: [A, B]]}
console.log(duplicates({1: ['A', 'B', 'C'], 2: ['A', 'B', 'D', 'A'], 3: ['A', 'B', 'C']})); // 1: [], 2: [D], 3: [A, B, C]]}
console.log(duplicates({})); // {}
console.log(duplicates()); // {}

let input = {
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"],
}

let input2 = {
  "1": ["A"],
  "2": ["A"],
  "3": ["A"],
}

console.log(duplicates(input));
console.log(duplicates(input2));