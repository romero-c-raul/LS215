/*
PROBLEM
  - Write a method that takes an array of letters as input and returns the missing letter in the array
  - Example: ["a","b","c","d","f"] -> "e"

Inputs: array (of letters)
Outputs: string (single letter)

RULES
  - Explicit Rules
    - Given an array of letters, and we need to return that is missing
      - ['a', 'c'] -> missing letter is 'b'
  - Implicit Rules
    - Elements are either all upper case or all lower case
    - Only letters will be present
    - Arrays will not be in any order
    - There will be no duplicate elements in array
    - Empty arrays return an empty string
    - Empty input returns an empty string as well
  
CLARIFYING QUESTIONS
  - Consider upper and lower case?  
    - The array is either all in upper case or all in lower case
  - Does the array include mixed case letters?
    - No
  - Will we always have letters or do we need to handle special characters?
    - Assume only letters will be present
  - Array elements always in ascending order?
    - Array elements may or may not be in ascending order
  - Will duplicates be present in the array?
    - Assume no duplicates
  - How do we handle empty arrays or empty input?
    - Empty arrays return an empty string
    - Empty input returns an empty string as well
  - Is there only one letter missing for all cases?
    - There will always be exactly one letter missing
  - Do we need to handle other data types?
    - No, assume either array or empty argument
  - What do we return if there's no missing letters?
    
EXAMPLES 
  - BASE CASE
    - array in all lower case (sorted)
    - array in all upper case (sorted)
    - array with all lower case (not sorted)
    - no missing letters
    - Single array elements
    - Double array elements
    
  - Edge Cases
    - empty array
    - empty argument (undefined instead of array)
    
ALGORITHM
  - Given an array of letters
  - Sort that array in ascending order
  - Iterate through the sorted array of letters, and for every letter and index
    - Obtain the code of the current letter and add 1 to it
      - This should give us the next letter in the alphabet
    - We compare the next letter in the alphabet vs the next letter in the array
      - If they are the same, we continue
      - If they are not the same, we return the next letter in the alphabet, since that
        is the missing letter
  
*/

function missingLetter(array) {
  if (!Array.isArray(array) || array.length < 1) {
    return '';
  }
  
  array.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  })
  
  for(let index = 0; index < array.length - 1; index += 1) {
    let nextAlphabetCharCode = array[index].charCodeAt(0) + 1;
    let nextAlphabetChar = String.fromCharCode(nextAlphabetCharCode);
    let nextArrayElement = array[index + 1]
    
    if (nextAlphabetChar !== nextArrayElement) {
      return nextAlphabetChar;
    }
  }
  
  return 'There are no missing letters in this array!';
}

console.log(missingLetter(['a', 'b', 'c', 'd', 'f'])); // 'e'
console.log(missingLetter(['A', 'B', 'C', 'D', 'F'])); // 'E'
console.log(missingLetter(['F', 'A', 'C', 'D', 'B'])); // 'E'
console.log(missingLetter([])); // ''
console.log(missingLetter()); // ''
console.log(missingLetter(['a', 'b', 'c', 'd', 'e'])); // ''
console.log(missingLetter(['a', 'c'])); // ''
console.log(missingLetter(['x', 'z'])); // ''