let firstName = 'Raul';
let lastName = 'Romero';

let fullName = `${firstName} ${lastName}`;

console.log(fullName);
console.log(firstName.concat(lastName));

let splitName = fullName.split(' ');
console.log(splitName);

let language = 'JavaScript';

let idx = language.indexOf('S');
console.log(idx);

let charCode = language.charCodeAt(idx);
console.log(charCode);

console.log(String.fromCharCode(charCode));

console.log(language.lastIndexOf('a'));

let a = 'a';
let b = 'b';
console.log(a > b);

b = 'B';
console.log(a > b);


let aIndex = language.indexOf('a');
let vIndex = language.indexOf('v');

console.log(language.substr(aIndex, 4));
console.log(language.substr(vIndex, 4));

console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));

let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';

let compoundSentence = fact1 + ' and ' + fact2[0].toLowerCase() + fact2.slice(1);
console.log(compoundSentence);

console.log(fact1[0]);
console.log(fact2[0]);

let pi = (22 / 7).toString();
console.log(pi.lastIndexOf('14'));

let boxNumber = (356).toString();
console.log(boxNumber);

boxNumber = parseInt(boxNumber, 10);
console.log(typeof boxNumber);

boxNumber = boxNumber.toString();
console.log(typeof boxNumber)



let rlSync = require('readline-sync');

let name = rlSync.question('What is your name? ');

if (name.endsWith('!')) {
  name = name.slice(0, name.length - 1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}`);
}