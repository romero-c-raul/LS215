/*
input: string
output: boolean

RULES
  Explicit rules:
    - Implement a function that checks whether an email address is valid
      - There must be one @ sign
      - The local part must contain one or more letters and or digits
      - The domain part must contain two or more components with a single dot between each component
        - Each component must conatin one or more letters

PROBLEM DOMAIN
  - An email address has two parts:
    - Local and domain:
      - Local: everything before @
      - Domain: Everything after @

DATA STRUCTURES
  - Strings
  - Arrays

ALGORITHM
  - Separate email into local part and domain part
  - For local part, check that only letters or digits are present
  - For domain part
    - Identify different components, check if they are separated properly, and separate
    - Check if different components are made up of only letters
*/

function specialCharsPresent(string) {
  return !string.match(/^[A-Za-z0-9]+$/);
}

function consecutiveDots(string) {
  return string.match(/\.{2,}/);
}

function validDomainComponent(string) {
  return string.match(/^[A-Za-z]+$/);
}

function isValidEmail(email) {
  let emailParts = email.split('@');
  let localPart = emailParts[0];
  let domainPart = emailParts[1];

  if (specialCharsPresent(localPart) || consecutiveDots(domainPart)) {
    return false;
  }

  let splitDomain = domainPart.split('.');

  if (splitDomain.length < 2) return false;

  return splitDomain.every(word => validDomainComponent(word));
}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false