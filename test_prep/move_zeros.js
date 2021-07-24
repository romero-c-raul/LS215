/*
PROBLEM
  - Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
  
Input: array
Output: array

RULES
  - Explicit Rules
    - Given an array with different data types
    - Move zeros in the array to the end of the array
    - Preserve order of all other elements
    - Return the array with all zeros at the end
    - zeroes pushed to the end are always numbers
  - Implicit Rules
    - Expect at least boolean, numbers, and strings as array elements
    - If you have a number with zero, that zero needs to be removed and push to the end as an
      individual digit
      - 305 --> 35 and 0 pushed to end as a number
    - If you have a string with a number zero, that zero needs to be removed and push to the end
      as an individual digit
        - 'hello0world' -> 'helloworld' and zero is pushed to the end as a number
    - Return a new array or mutate is allowed
    
CLARIFYING QUESTIONS
  - What is considered a zero? 
    - Only number zero?
      - What if we have a number like 103, do we need to move that zero to the end?
        - If so, how would that look like?
    - String representation of zero?
      - It is allowed '0' is a zero
      - If string representation of zero is allowed, are multiple zeroes considered a single zero?
        - No, only a single zero is considered a zero
        - What if we have a number like '20', how do we handle that?
  - What data types should we expect to handle?
  - Do we mutate array or return a new one?
  - How do we deal with empty input, empty array?
  - How many zeroes can we expect in an array element
    - Multiple zeroes
  
EXAMPLES
  - Base Case / Happy Path
    - Array with zeroes in the middle (only numbers)
    - Array with zeroes in the middle (only strings)
    - Array with zeroes in the middle (numbers and strings)
    - Array with number elements that contain zeroes along other numbers
    - Array with string element that contain zeroes along other strings
    - Array with zeroes already at the end
  - Edge Cases
    - Empty array given
    - No zeroes in array
    - Empty output
    

DATA STRUCTURES
  - Arrays to transform elements into its non zero counterpart
    - Also to push elements into the newly creater array

ALGORITHM
  - Given an array with elements of various types
  - Create a counter for all the 0s encountered in the array (start as zero)
  - Map through the given array, and for every element (currentElement)
    - If the current element is a single zero (either num or str) return the element
    - Check if the current element is a number or string
      - If it is:
        - Count the number of zeroes that appear in the element
        - Add those zeroes into the zero counter
        - Remove zeroes from the element and return that element
          - If the element is originally a string, return a string
          - If the element is originally a number, return a number
      - If it is not:
        - Return element as is
          
  - Filter all standalone zeroes that appear in the array
  - Append the amount of zeroes that our counter indicates to the mapped array
  - return the mapped arary
*/


function moveZeros(array) {
  let zeroCounter = 0;
  let noZerosArray;
  
  noZerosArray = array.map(element => {
    if (element === 0 || element === '0') {
      zeroCounter += 1;
      return element;
    }

    if (typeof element === 'number' || typeof element === 'string') {
      let stringElement = String(element);
      let totalZeroes = stringElement.match(/0/g);
      zeroCounter += totalZeroes ? totalZeroes.length : 0;
      stringElement = stringElement.replace(/0/g, '');
      
      if (typeof element === 'number') {
        return Number(stringElement);
      } else {
        return stringElement;
      }
      
    } else {
      return element;
    }
  })
  
  noZerosArray = noZerosArray.filter(element => {
    if (element === 0 || element === '0') {
      return false;
    } else {
      return true;
    }
  })
  
  
  for(let total = zeroCounter; total > 0; total -= 1) {
    noZerosArray.push(0);
  }
  
  return noZerosArray;
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])); // returns[false,1,1,2,1,3,"a",0,0]
console.log(moveZeros([false,1,'0',1,2,'0',1,3,"a"])); // returns[false,1,1,2,1,3,"a",0,0]
console.log(moveZeros([false,1,0,1,2,'0',1,3,"a"])); // returns[false,1,1,2,1,3,"a",0,0]
console.log(moveZeros([false,1,20,1,2,'50',1,3,"a"])); // returns[false,1, 2,1,2, '5', 1,3,"a",0,0]
console.log(moveZeros([false,1,200,1,2,'50',1,3,"a"])); // returns[false,1, 2,1,2, '5', 1,3,"a",0,0, 0]