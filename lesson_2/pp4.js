/*
ALGORITHM
  - Go through all parenthesis
  - If first parenthesis is not '(' or if last parentesis is '(', return false
  - If you find a '(', increase a counter by 1
  - If you find a ')', decrease counter by 1
  - Return true if counter equals 0
*/

function isBalanced(string) {
  let onlyParentheses = string.replace(/[^()]/g, '');
  
  if (onlyParentheses.length === 0) {
    return true;
  } else if (onlyParentheses[0] !== '(' || onlyParentheses.slice(-1) === '(') {
    return false;
  }

  let parenthesesCounter = 0;

  for(let index = 0; index < onlyParentheses.length; index += 1) {
    let char = onlyParentheses[index];
    
    if (char === '(') {
      parenthesesCounter += 1;
    } else {
      parenthesesCounter -= 1;
    }
  }

  return parenthesesCounter === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false