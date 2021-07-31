/*
Examples / Test Cases
  - Input / Output
  - Test cases serve two purposes:
    - help you understand the problem
    - allow you to verify your solution
  - Happy paths
    - combination of requirements; the "obvious" result
  - Edge cases
    - focus on input
    - emptiness (nil/null, "", [], {})
    - boundary conditions
      - 
    - repetition / duplication
    - upper case / lower case
    - data types
      - primitives(immutable): booleans, numbers, strings, undefined, null 
      - objects: arrays, objects, other built-in objects (dates)
    - Negative numbers
    - Zero
  - Failures / Bad Input
    - raise exceptions / report errors
    - return a special value (nil/null, 0, "", [], etc.)
  - ask questions to verify your understanding!
*/

// https://www.codewars.com/kata/5814d0efad98ccb8d100012f
/*
https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/javascript

"7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and then promptly forgets. Who doesn't like catching those one-off interesting mileage numbers?

Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).

It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.

Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.

"Interesting" Numbers
Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

Any digit followed by all zeros: 100, 90000
Every digit is the same number: 1111
The digits are sequential, incementing†: 1234
The digits are sequential, decrementing‡: 4321
The digits are a palindrome: 1221 or 73837
The digits match one of the values in the awesomePhrases array

† For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.


Input: integer, array (of integers)
Output: integer (0, 1, or 2)

Rules
  - Explicit Rules
    - Parse the given integer and return:
      - 2 if the number is already "interesting"
      - 1 if the number will become "interesting" within the next two miles
      - 0 if the number is not interesting and won't become interesting
    - Interesting number:
      - 3 or more digits long
      - Single digit followed by all zeroes
      - Every digit is the same number
        - all numbers with the same digits are palindromes
      - Digits are sequential, incrementing
        - 0 has to come after 9 to be considered incrementing
      - Digits are sequential, decrementing
        - 0 has to come after 1 to be considered decrementing
      - A repeated sequence is not considered interesting
        - 78901 is not interesting
      - Digits are a palindrome
        - Number is equivalent backwards and forwards
      - The digits match one of the values in the awesomePhrases array
        - Elements in this array are integers

CLARIFYING QUESTIONS
  - Should we always expect a "valid" mileage value?
    - Should 0000 be considered a special number?
  - Does sequential mean immediately consecutive numbers?
    - Is 890 considered an interesting number? Yes
    - Is 790 considered an interesting number? No, because 8 should be before 9 to considered a valid sequence
    - Is 543210 considered interesting?  Yes
  - Is the awesomePhrases array optional?
    - It can be empty

DATA STRUCTURE
- number => string or array of string digits
- a single digit followed by all zeros => regex
- every digit the same number => regex
- palindrome => array
- incrementing, decrementing => strings
- awesomePhrases => array


ALGORITHM
  - Given an integer (number) and an array of integers (awesomePhrases)
  - Create a string equivalent of the given number (strNumber)
  
  - Check if (number), number + 1, and number + 2 are:
    - At least three digits &&
      - Check that length of strNumber > 2
    - Matches any number in the awesomePhrases array ||
      - Use the includes method to check if strNumber exists inside awesomePhrases
    - Single digit followed by all zeroes ||
      - Regex -> /[1-9]0+/
    - A palindrome ||
      - Take strNumber, reverse & join it, and if it is equal to the original strNumber, it is a palindrome
    - Incrementing sequence ||
    - const incr = '1234567890'
      - incr.match(new Regex(str))
        - '4567'
    - Decrementing sequence
      - const decr = '9876543210'
  - If one of the above returns true during number, return 2
  - if one of the above returns true during number + 1 or number + 2, return 1
  - If you get through all of these without returning anything, return 0


*/

function isValidInteresting(num, awesomePhrases) {
  let strNumber = String(num);
  if (strNumber.length < 3) return false;
  
  const awesomePhrase = () => awesomePhrases.includes(num);
  const allZeros = () => strNumber.match(/\b[1-9]0+\b/);
  const palindrome = () => [...strNumber].reverse().join('') === strNumber;
  const incrementingSeq = () => '1234567890'.match(new RegExp(strNumber));
  const decrementingSeq = () => '9876543210'.match(new RegExp(strNumber));
  
  console.log(awesomePhrase());
  console.log(allZeros());
  console.log(palindrome());
  console.log(incrementingSeq());
  console.log(decrementingSeq());
  return awesomePhrase() || allZeros() || palindrome() || incrementingSeq() || decrementingSeq();
  
}


function isInteresting(number, awesomePhrases) {
  if (isValidInteresting(number, awesomePhrases)) {
    return 2;
  } else if (isValidInteresting(number + 1, awesomePhrases) || isValidInteresting(number + 2, awesomePhrases)) {
    return 1;
  } else {
    return 0;
  }
}

console.log(isInteresting(109, [1337, 256])); //     0
console.log(isInteresting(3, [1337, 256])); //     0
console.log(isInteresting(1336, [1337, 256])); //  1)
console.log(isInteresting(1337, [1337, 256])); //  2)
console.log(isInteresting(11208, [1337, 256])); // 0)
console.log(isInteresting(11209, [1337, 256])); // 1)
console.log(isInteresting(11211, [1337, 256])); // 2)
console.log(isInteresting(3209, [])); // 1
console.log(isInteresting(7890, [])); // 2
console.log(isInteresting(22222, [])); 
console.log(isInteresting(11207, [])); // 0
console.log(isInteresting(11208, [])); // 0
console.log(isInteresting(11209, [])); // 1
console.log(isInteresting(11210, [])); // 1
console.log(isInteresting(11211, [])); // 2