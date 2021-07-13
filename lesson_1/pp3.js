/*
input: string
output: number

RULES
  Explicit rules:
    - Write a function that performs octal to decimal conversion
    - When invoked on a string that contains the representation of an octal number, the Function
      returns a decimal version of that value as a Number
  
EXAMPLES
  233 - Octal
  2*8^2 + 3*8^1 + 3*8^0

DATA STRUCTURES
  - Strings
  - Arrays

ALGORITHM
  - Separate string into individual characters/numbers
  - Transform each number into its Decimal equivalent
  - Add up all transformed numbers and return the final value

 */

// function octalToDecimal(numberString) {
//   let numberCollection = numberString.split('').map(num => Number(num));
//   let total = 0;
  
//   for(let exponent = numberCollection.length - 1, index = 0; exponent >= 0; exponent -= 1, index +=1) {
//     total += numberCollection[index] * (8 ** exponent);
//   }

//   return total;
// }

function octalToDecimal(numberString) {
  let numberCollection = numberString.split('').reverse().map(num => Number(num));
  let total = 0;
  
  numberCollection.forEach((number, index) => {
    total += number * (8 ** index);
  })

  return total;
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
console.log(octalToDecimal('2047'));        // 1063
octalToDecimal('011');         // 9
