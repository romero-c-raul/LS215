/*
PROBLEM
  - Write a function that takes two or more objects and returns a new object which combines
    all input objects
    
input: two objects
output: single object

RULES
  - Explicit rules
    - Combining objects has values of matching keys being "added" together
    - Return a new object that combines all input objects
      - New object has all the properties of the given objects
  - Implicit rules
    - Number + number -> simple addition
    - string + string or array + array -> simple concatenation
    - string + array -> push the string into the array
    - number + array -> push the number into the array
    - 
    
CLARIFYING QUESTIONS
  - Do we need to deal with strings and arrays?
    - What does added mean for strings? Simple concatenation
    - What does added mean for arrays? Simple concatenation
  - Can the value of a property be an object itself? What other values do we have to deal with
    - No objects as values are present
  - How do we deal with mixed data types being added?
    - String + Array
    - Number + Array
    - String + Number
  - Do we need to handle empty input?
  - Do we need to handle an empty object?
    
EXAMPLES  
  - Base Case
    - Two objects with numbers as values
    - Two objects with strings as values
    - Two objects - first one has numbers as values, second has strings as values
    - Two objects - first has strings, second has numbers
    - Two objects - first has strings, second has array
    - Two objects - first has arrays, second has strings
    - Two objects - first has numbers, second has array
    - Two objects - first has array, second has numbers
    - Three objects - Only numbers
    - Four objects - Strings, arrays, numbers
  
  - Edge Cases
    - Empty input
    - Empty object
    
ALGORITHM
  - Given two or more objects as input
  - Create an array that contains all these objects given as elements
  - Create an empty object (finalObject)
  
  - Iterate through all the objects
    - For every object, iterate through all their key-value pairs
      - For every key-value pair:
        - If it does not exist in finalObject
          - Add the key-value pair as is to finalObject
        - If it already exist in finalObject
          - "Add" the current value to the one that exists in finalObject
  
  - Return finalObject

SUB-PROCESS -- "Adding" values of different types
  - Given two arguments
    - If the two arguments are both strings, or are both numbers
      - Use the addition operator
    - If one argument is array, and the other is string/number
      - Push the string/number to the array
    - If both arguments are arrays
      - Concatenate both arrays

*/

function addValues(value1, value2) {
  if (Array.isArray(value1) && Array.isArray(value2)) {
    value1.concat(value2);
    return value1
  } else if (Array.isArray(value1) && !Array.isArray(value2)) {
    value1.push(value2);
    return value1
  } else if (!Array.isArray(value1) && Array.isArray(value2)) {
    value2.push(value1);
    return value2;
  } else {
    return value1 + value2;
  }
  
}


function combine(...allObjects) {
  console.log(allObjects.length);
  
  if (allObjects.every(object => Object.keys(object).length < 1)) {
    return {};
  }
  
  let finalObject = {};
  
  allObjects.forEach(currentObject => {
    for(let key in currentObject) {
      if (finalObject[key]) {
        finalObject[key] = addValues(finalObject[key], currentObject[key])
      } else {
        finalObject[key] = currentObject[key];
      }
    }
  }) 
  
  return finalObject;
}

console.log(combine({a: 10, b:20}, {a: 20, b: 30})); // {a: 30, b:50}
console.log(combine({a: 'hello', b:'goodbye'}, {a: 'world', b: 'universe'})); // {a: 'helloworld', b:'goodbyeuniverse'}
console.log(combine({a: 10, b:20}, {a: 'world', b: 'universe'})); // {a: '10world', b: '20universe'}
console.log(combine({a: 'world', b: 'universe'}, {a: 20, b: 30})); // {a: 'world20', b:'universe30'}
console.log(combine({a: [1, 2, 3, 4]}, {a: 20})); // {a: [1, 2, 3, 4, 20]}
console.log(combine({a: [1, 2, 3, 4]}, {a: 'hello'})); // {a: [1, 2, 3, 4, 'hello']}
console.log(combine({a: 10, b:20}, {a: 20, b: 30}, {a: 100, b: 200})); // {a: 130, b: 250}                               
console.log({}); // {}          