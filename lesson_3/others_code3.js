/*
PROBLEM
  - Write a function that takes a word string as an arugment, and returns true if the word can
    be spelled using the set of blocks as an argument, or false otherwise

Input: string; a word
Ouput: boolean; true or false

RULES
  Explicit Rules:
    - Words can only be spelled using the predetermined set of blocks:
      - A collection of spelling blocks has two letters per block
      - If you use a letter in a block, the other letter is unusable
    - Return true if the word can be spelled using the sets of blocks
      - We cannot "use" a block twice
    - Return false if otherwise
    - Letters are case-insensitive

EXAMPLES
  - Happy Path/Base Cases
    isBlockWord('BATCH');      // true
    isBlockWord('BUTCH');      // false
    isBlockWord('jest');       // true
  
  - Edge cases
    - Spaces, special chars, or integers in input string? // return false
    - Empty string? // return false
    - Empty argument? // return false
    - Other data structures? // return false

DATA STRUCTURE
  - String: used to validate and clean up string if needed
  - Object: used to keep track of which blocks we have used

ALGORITHM
  - Create an object that has every letter as a key and its corresponding pair as a value
    - We will have a key value pair that represents each block

  - Iterate through every letter in the given string
    - If letter exists as key in the object
      - Return false if its value is false
      - Set it to false
    - Else
      - Return false if character does not exist in object values

    - Return true, means that you use each block only once
*/

const blockPairs = {
B:'O',   X:'K',   D:'Q',   C:'P',   N:'A',
G:'T',   R:'E',   F:'S',   J:'W',   H:'U',
V:'I',   L:'Y',   Z:'M',
}

function isBlockWord(word) {
  for(let index = 0; index < word.length; index += 1) {
    let currentChar = word[index].toUpperCase();
    let allValues = Object.values(blockPairs);

    if (blockPairs[currentChar]) {                  
      if (blockPairs[currentChar] === false) {       
        return false;
      }

      blockPairs[currentChar] = false;          
    } else if (!allValues.includes(currentChar)) {   
      return false;                                  
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true