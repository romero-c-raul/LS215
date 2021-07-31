/*
PROBLEM
- You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy"

Input: array, integer
Output: string

RULES
  - Given an array and integer k
  - Return the first longest string consisting of:
    - K consecutive strings
      - ['a', 'b', 'c', 'd', 'e']
        - k = 1 'a', 'b', 'c', 'd', 'e'
        - k = 2 'ab', 'bc', 'cd', 'e'
        - k = 3 'abc', 'bcd', 'cde', 'de', 'e'
  - If you cannot concatenate strings evenly, the last one(s) concatenate
    with whatever is left

CLARIFYING QUESTIONS
  - K is zero?
    - Assume k will be greater than 0
  - Handle empty array as input?
    - Yes, return empty string
  - We only consider strings that were concatenate by 3 k elements

EXAMPLES 
  - Base Case
    - Array with strings of different lengths, k is 1
    - Array with strings of different lengths, k is 2
    - Array with strings of different lengths, k is 4
    - Array with strings of diff lengths, where k is greater than the length of
      the array
    -Array with strings of digg lengths, where k is equal to the length of the
      array
      
  - Edge Case
    - Empty array
    - Empty second arg

DATA STRUCTURE
  - Arrays
    - To store all the consecutive elements together before concatenating
    
ALGORITHM
  - Given an array (array), an integer (k)
  - I want to obtain all the subtrings that are created by concatenating k elements
    in the array
  - At this point, should have an array of all substrings
  - Choose the longest string that appears first

SUBPROCESS - Obtain the leading subarrays of length K
  - Create a new array to store subarrays
  - Given an array, iterate through every index of the array
  - Slice the array from the current index, to the next k subarrays
    - slice(currentIndex, currentIndex + k)
    - if the slice array is of length k
      - join slice array with no spaces
      - push to final array
*/

function obtainAllSubstrings(array, k) {
  let finalArray = [];
  
  for(let index = 0; index < array.length; index += 1) {
    let currentSubArray = array.slice(index, index + k)
    
    if (currentSubArray.length === k) {
      finalArray.push(currentSubArray.join(''));
    }
    
  }
  
  return finalArray;
}

function longestConsec(array, k) {  
  if (!k || array.length < 1) {
    return '';
  }
  
  let allValidSubstrings = obtainAllSubstrings(array, k);
  let longestString = '';
  
  allValidSubstrings.forEach(substring => {
    if (substring.length > longestString.length) {
      longestString = substring;
    }
  })
  
  return longestString;
}

console.log(longestConsec(['a', 'bb', 'cc', 'd', 'eee'], 1)); // 'eee'
console.log(longestConsec(['a', 'bb', 'cc', 'd', 'eee'], 2)); // 'bbcc'
console.log(longestConsec(['a', 'bb', 'cc', 'd', 'eee'], 4)); // 'bbccdeee'
console.log(longestConsec(['a', 'bb', 'cc', 'd', 'eee'], 5)); // 'abbccdeee'
console.log(longestConsec(['a', 'bbb', 'cc', 'd', 'eee'], 2)); // 'bbbcc'
console.log(longestConsec(['a', 'bb', 'cc', 'd', 'eee'], 6)); // ''
console.log(longestConsec([], 1)); // ''
console.log(longestConsec(['a', 'b', 'c'])); // ''