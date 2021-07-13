// Low level approach -> Iterate through string in reverse and build new string
// function reverse(string) {
//   let reverseString = '';

//   for(let index = string.length - 1; index >= 0; index -= 1) {
//     reverseString += string[index];
//   }

//   return reverseString;
// }

/*
High Level Approach
- Split string by characters, reverse collection, and join characters together
 */
function reverse(string) {
  return string.split('').reverse().join('');

  // return reverseArray;
}

console.log(reverse('hello'));                  // returns "olleh"
console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"