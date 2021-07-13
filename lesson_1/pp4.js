/*
input: string, array
output: array

RULES
  - Explicit rules
    - Write a function that takes two arguments: word and array of words
    - Your function should return an array that contains all the words from the array argument
      that are anagrams of the word argument

DATA STRUCTURES
  - Strings
  - Arrays

ALGORITHM
  - Filter the array of words by selecting only the ones that when the string characters
    are sorted in ascending order, they are equal to the word argument also with characters
    sorted in ascending order
*/

function anagram(word, list) {
  let sortedWord = word.split('').sort().join('')
  let sortedStrings;

  sortedStrings = list.filter(string => {
    return string.split('').sort().join('') === sortedWord;
  })

  return sortedStrings;
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]