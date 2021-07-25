/*

PROBLEM
  Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
  
Input: array, integer
Output: array

RULES
  - Explicit Rules
    - Create a new list that contains each number in the array at most N times
      - Meaning that same element/copies of it cannot appear more than N times in the array
    - Do not reorder

CLARIFYING QUESTIONS
  - Are we only dealing with numbers?
  - Do we need a default number if second argument is ommitted?
  - How do we deal with an empty array/empty argument?
  - What if second argument is 0?
  - What about negative numbers?

EXAMPLES
  - Base Case
    - Array with numbers that repeat more than two times, and a number two
    - Array with numbers that repeat more than one time, and a number one
    - Array with numbers that repeat three times, and a number 5
  - Edge Case
    - Array with numbers that repeat more than two times, and a number zero

DATA STRUCTURE
  - Hash: to count how many times each element appears in the array

ALGORITHM
  - Given an array and an integer (n)
  - Create a new empty array (finalArray)
  
  - Iterate through every element in the given array, and for every element
    - Get the number of times the element appears in the final array
    - If the number is <= n:
      - Push number into the final array
      
  - Return finalArray
*/

// function deleteNth(array, n) {
//   let finalArray = []
 
//   array.forEach(currentNumber => {
//     let currentCount = finalArray.filter(num => num === currentNumber).length;
    
//     if (currentCount < n) {
//       finalArray.push(currentNumber);
//     }
//   })
  
//   return finalArray;
// }

function deleteNth(array, n) {
  let finalArray = [];
  let numberCount = {};
  
  array.forEach(number => {
    numberCount[number] = numberCount[number] ? numberCount[number] + 1 : 1;
    
    if (numberCount[number] <= n) {
      finalArray.push(number);
    } 
  })
  
  return finalArray;
}

console.log(deleteNth([1,2,3,1,2,1,2,3], 2)); // [1,2,3,1,2,3]
console.log(deleteNth([1,2,3,1,2,1,2,3], 1)); // [1,2,3]
console.log(deleteNth([1,2,3,1,2,1,2,3], 5)); // [1,2,3,1,2,1,2,3]
console.log(deleteNth([1,2,3,1,2,1,2,3], 0)); // []
console.log(deleteNth([1,1,1,1,2,2,2,2,3,3,3,3], 2)); //[1,1,2,2,3,3]