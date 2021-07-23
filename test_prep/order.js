/*
PROBLEM
  - Sort a given string. Each word in the string will contain a single number, this number 
    is the position the word should have in the result
  - Example: "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
    
Inputs: string
Output: string

RULES
  - Explicit rules
    - Given a string of (multiple) words
    - Each word in the string contains a single number
    - Reorder each word in the string based on the number it contains
  - Implicit rules
    - We can have multiple spaces between each word, we need to keep those spaces in its original spot
    - All words contain a number
    - All two digit numbers appear consecutively
    - No need to consider special characters, only letters and numbers
    
CLARIFYING QUESTIONS
  - Are the words always separated by a single space?
    - There can be multiple spaces separating the words
  - If there are multiple spaces separating the words, do we need to keep them
    - Yes, keep the original spaces between the words
  - Do we need to be able to handle words with no numbers
    - all words will have a number
  - How should we handle an empty string
  - How should we handle an empty argument
  - How should be handle a string with a single word
  - Are the numbers on each word, if two digits or longer, appear consecutively
    -if 22 app22le or 2apple2?
  - Do we need to consider special characters?
  

EXAMPLES
  - Base Case
    - Words with numbers separated by a single space
    - Words with numbers separated by multiple spaces
    - Words with numbers that are not consecutive
    - Single word string
    - String that has words already in order
    
  - Edge Cases
    - Empty strings
    - Empty argument

ALGORITHM
  - Given a string
  - Iterate through the given string and identify the indexes of all spaces
    - Save these indexes in an array
  
  - Split the given string by spaces, to have only multiple words
  - Sort the array of multiple words:
    - Extract the number that appears in the current word and the next word
    - return current number - next number
  
  - Insert back the spaces into our sorted array
  
  - Join the sorted array and return the string

SUBPROCESS -- Inserting back spaces 
  - Given an array on index positions
    - Iterate through every index position, and for each one
      - splice the value into the array (target index, 0 values to delete, space to insert)

// Subprocess is wrong. Had to fix it while I was working through the problem

*/

function order(words = '') {
  let spaceIndexes = [];
  let splitBySpaces = words.split(/(\s+)/g)
  
  for(let index = 0; index < splitBySpaces.length; index += 1) {
    if (splitBySpaces[index].match(/\s+/g)) {
      spaceIndexes.push([index, splitBySpaces[index]]);
    }
  }
  
  let onlyWords = words.split(/\s+/g);
    
  onlyWords.sort((currentWord, nextWord) => {
    let currentWordNumber = Number(currentWord.match(/[0-9]/)[0]);
    let nextWordNumber = Number(nextWord.match(/[0-9]/)[0]);
    
    return currentWordNumber - nextWordNumber;
  })
    
  spaceIndexes.forEach(pair => {
    onlyWords.splice(pair[0], 0, pair[1]);
  })
  
  
  return onlyWords.join('');
}

console.log(order('is2 Thi1s T4est 3a')); // "Thi1s is2 3a T4est"
console.log(order('is2  Thi1s   T4est  3a')); // "Thi1s  is2   3a  T4est"
console.log(order('is2  Thi0s   T7est  4a')); // "Thi0s  is2   4a  T7est "
console.log(order('is2')); // "is2"
console.log(order(''));  //''
console.log(order());  //''
console.log(order("Thi1s is2 3a T4est")); // "Thi1s is2 3a T4est"