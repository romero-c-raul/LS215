/*
Task

You will be given an array of numbers. You have to sort the odd numbers in
ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


Inputs: array
Ouputs: array

RULES
  - Explicit Rules
    - We are given an array of both even and odd numbers
    - Sort the odd numbers in ascending order, but leave the even numbers at their original positions
      - The even numbers do not move at all
      - [5, 8, 6, 3, 4] -> 8, 6 and 4 stayed at their original spot because they are even
        - 5 and 3 switched
    - Zero is considered even
    - Work with negative numbers
    - Only dealing with integers
    - be able to deal with empty array
      - Return an empty array
    

CLARIFYING QUESTIONS
  - Assume it can be all even, all odd, or a mix
  - Only dealing with integers
    - Yes
  - Should work with negative numbers
    - Yes 
  - How to deal with non-unique examples
    - Same as the rest of the problem
  - Assume input always valid?
    - Assume array is given
    - Be able to deal with empty array
  - 

EXAMPLES
  - Base Case
    - A mix of even numbers and odd numbers
    - A mix of even numbers and odd numbers, some are negative
    - A mix of numbers that includes 0
    - A mix of numbers that has non unique values
    - Only even numbers
    - Only odd numbers
    
  - Edge Case
    - An empty array
    
ALGORITHM
  - Given an array (array)
  - Identify all the even numbers
    - Create an object where the even number is the key, and the index value is the value
    
  - Remove or create an array with only the odd values
  - Sort the odd values
  - Re-insert the even values into its original index

*/

function sortArray(array) {
  let evenPositions = {};
  let oddNumbersOnly = [];
  
  for(let index = 0; index < array.length; index += 1) {
    let currentNumber = array[index];
    
    if (currentNumber % 2 === 0) {
      evenPositions[currentNumber] = index;
    } else {
      oddNumbersOnly.push(currentNumber);
    }
  }
    
  oddNumbersOnly.sort((a, b) => a - b);
  
  let evenKeys = Object.keys(evenPositions);
  
  evenKeys.sort((a, b) => {
    return evenPositions[a] - evenPositions[b];
  })
  
  
  evenKeys.forEach(currentNumber => {
    let currentIndex = evenPositions[currentNumber];
    oddNumbersOnly.splice(currentIndex, 0, Number(currentNumber));
  })
  
  return oddNumbersOnly;
}

