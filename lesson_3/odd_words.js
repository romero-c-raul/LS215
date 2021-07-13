/*
Input: String
Output: String

RULES
  - Explicit rules
    - Input text consists of: 
      - One or more words, 
      - Separated from each other by one or more
      spaces, 
      - And terminated by zero or more spaces followed by a point
    
    - Input should be read from and including the first letter of the first word, up to
      and including the terminating point
    - The output text should hace successive words separated by a single space, with the
      last word being terminated by a single point
    - Odd words are copied in reverse order, while even words are merely echoed
  
  - Implicit rules
    - Odd words are words with an odd index

EXAMPLES / TEST CASES
  Happy Path: 
    input: "whats the matter with kansas."
    output: "whats eht matter htiw kansas."

  Edge Cases:
    - Function is not passed an argument
    - Input string starts with a space
    - Input string has multiple spaces between words
    - Input string is empty
    - Input string is made up of a single word


    input: " whats the matter with kansas."
    output: "whats eht matter htiw kansas."

    input: "whats   the  matter with      kansas."
    output: "whats eht matter htiw kansas."

    input: ""
    output: ""

    input: "the."
    output: "the."

    input: "kansas."
    output: kansas.

    input: undefined
    output: ''


DATA STRUCTURES
  - Strings
  - Arrays -> Store transformed words

MENTAL MODEL
  - Identify each word in the string
  - Reverse the words that have an odd length, keep words the same if they have an even
    length
  - Join these words with a single space between them

ALGORITHM
  - Extract each word from the input string
    - A word consists of one or more letters, no special characters included
  - Iterate through each word and transform if their index is odd, keep the same if 
    the index is even
  - Join words with single space, append a period at the end of the string
  - Return string

  SUB-PROCESS - Extracting words from a string
    - match -> regex = /[a-z]+/gi
    - split
*/

function oddWords(string) {
  if (string === undefined || string.length === 0) {
    return '';
  }

  let wordCollection = string.match(/[a-z]+/gi);
  
  let transformedWords = wordCollection.map((word, index) => {
    if (index % 2 === 1) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  })

  return transformedWords.join(' ') + '.';
}

oddWords("whats the matter with kansas.") === "whats eht matter htiw kansas."
oddWords(" whats the matter with kansas.") === "whats eht matter htiw kansas."
oddWords("whats   the matter  with   kansas.") === "whats eht matter htiw kansas."
oddWords("  whats   the matter  with   kansas   .") === "whats eht matter htiw kansas."
oddWords('the.') === 'the.';
oddWords('kansas   .') === 'kansas.';
oddWords('') === '';
oddWords() === '';
