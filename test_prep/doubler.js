/*
PROBLEM
  - Write a function called doubler that doubles every value in an array

Inputs: Array
Outputs: Array where every element is "doubled"

RULES
  - Explicit rules
    - Double every value in the array
    - For numbers simply mutliply by 2
    - For strings, we repeat the string and concatenate with original string
    - For arrays, concatenate the same array to the original array
    - For objects, double the value of each property
      - That value can be number, string, array, or even an object

CLARIFYING QUESTIONS
  - What do we mean by doubling?
    - Numbers -> 5 * 2, -3 * 2, -10 *2, etc...
      - Basically just multiply number by 2
      - Assume integer always?
    - Strings
      - 'a' -> 'aa'
      - 'aaa' -> 'aaaaaa'
      - 'abcde' -> 'abcdeabcde'
      - '3.5547' -> '3.55473.5547'
    - Arrays
      - [1, 2, 3, 4] -> [1, 2, 3, 4, 1, 2, 3, 4]
    - Do we need to deal with arrays or objects?
      - Deal with arrays
      - Assume no objects
      
EXAMPLES
  - Base Case
    - For numbers: Single, double digits, negative numbers
    - For strings: single, double, triple digit strings, number representation of strings
    - For arrays: arrays of varying numbers of elements
    - Array of all of these mixed
  - Edge Cases
    - Always expect an array? If not how should we handle that?
    - Empty input (no argument passed to function === undefined)?
    - 
    
ALGORITHM -- Main Function
- Given an array of elements of various types
- Map through each element, and for every element:
  - Double the element
- Return the array with doubled elements

SUB-PROCESS -- duplicate
  - Given an integer, string, or array
  - If the input is an integer
    - Multiply integer by 2 and return that value
  - If the input is a string
    - Concatenate the string with itself
  - If the input is an array
    - concatenate the array with itself
  - If the input is an object
    - Duplicate every value in the object
*/

function duplicateValues(object) {
  let allKeys = Object.keys(object);
  
  allKeys.forEach(currentKey => {
    object[currentKey] = duplicate(object[currentKey]);
  })
  
  return object;
}

function duplicate(element) {
  let elementType = typeof element;
  
  if (elementType === 'number') {
    return element * 2;
  } else if (elementType === 'string' || Array.isArray(element)){
    return element.concat(element);
  } else {
    return duplicateValues(element);
  }
}

function doubler(array) {
  let duplicatedElements;
  
  duplicatedElements = array.map(currentElement => {
    return duplicate(currentElement);
  })
  
  return duplicatedElements;
}

console.log(doubler([1, 2, 3, 4, 5])); // [1, 4, 6, 8, 10] 
console.log(doubler([10, 20, 30]));    // [20, 40, 60]
console.log(doubler(['a', 'ab', 'abcde'])); // ['aa', 'abab', 'abcdeabcde']
console.log(doubler([[4, 5, 6], ['a', 'b', 'c']])); // [[4, 5, 6, 4, 5, 6], ['a', 'b', 'c', 'a', 'b', 'c']]
console.log(doubler(['a', 'ab', 'abcde', ['a', 'b']])); // ['aa', 'abab', 'abcdeabcde', ['a', 'b', 'a', 'b']]

console.log(doubler([{a: 2, b: 4}]));  // [{a:4, b:8}]

console.log(doubler([{a: 2, b: 4}]));  // [{a:4, b:8}]
console.log(doubler([{a:2, b:4, c: 'abc', d: [1, 2, 3] }]));  // [{a:4, b:8, c: 'abcabc', d: [1, 2, 3, 1, 2, 3] }]
console.log(doubler([]));


