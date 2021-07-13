/*
Problem:
  - Write a program that takes a word problem and returns the answer as an integer

Input: String that includes both letters and digits as characters
Output: Number, integer

RULES
  - Explicit rules
    - Take a word problem as an input
    - Return an integer as an answer
  - Implicit rules
    - From the string, we will obtain both of our operands as well as 
      the operation to be performed
    - Dealing with addition, subtraction, multiplication, division
    - Dealing with integers, positive and negative

EXAMPLES / TEST CASES
  input: 'What is 5 plus 13?'
  output: 18

  input: 'What is 7 minus 5?'
  output: 2

  input: 'What is 33 divided by -3?'
  output: -11

  input: 'What is -3 multiplied by 25?'
  output: -75

  Edge Cases:
    - Empty string
    - Empty argument

    - String does not include two numbers
    - String does not include desired operation
    - String includes only one number

  input: ''
  output:  0

  input: undefined
  output: 0

DATA STRUCTURES
  - Strings
  - Arrays
    - Filter out operands as well as keywords that represent the desired operation

ALGORITHM
  - Identify all words and numbers in the string
  - Filter out the first and second operands
  - Filter out word that represents the desired operation
  - Take the first and second operands (should be numbers) and perform either a sum, 
    subtraction, division, or multiplication based on the keyword identified in the array
  - Return result of that operation

  - SUBPROCESS - Identify all words
    - Split string by spaces, and return an array of only words and numbers
  
  - SUBPROCESS - Filter our the first and second operands
    - Iterate through the array and pick out the two numbers:
      - Convert string to number then back to string
      - If that converted string is equal to the original string, that is a number
      - Assign those numbers to a first operand and second operand variables

  - SUBPROCESS - Filter out words that represents the desired operation
    - Iterate through array and select the word that matches sum, plus, minus, divided, 
      multiply
*/

function performOperation(string) {
  const operationKeywords = ['plus', 'minus', 'multiplied', 'divided']
  let operands = [];
  let operation;
  
  string = string.replace('?', '');
  
  string.split(' ').forEach(element => {
    if (element === Number(element).toString()) {
      operands.push(Number(element));
    } else if (operationKeywords.includes(element)) {
      operation = element;
    }
  })
  
  switch (operation) {
    case 'plus':
      return operands[0] + operands[1];
    case 'minus':
      return operands[0] - operands[1];
    case 'multiplied':
      return operands[0] * operands[1];
    case 'divided':
      return operands[0] / operands[1];
  }
}

console.log(performOperation('What is 5 plus 13?'));
console.log(performOperation('What is 7 minus 5?'));
console.log(performOperation('What is 33 divided by -3?'));
console.log(performOperation('What is -3 multiplied by 25?'));