/*
ALGORITHM
  - Identify different words in string
    - Words are separated by spaces and compound words count as separate words
  - Iterate through words and use the first letter of every word to
    build an acronym
  - Final string should be all caps and returned
*/

function acronym(string) {
  let allWords = string.split(/[ -]/);
  return allWords.map(word => word[0].toUpperCase()).join('');
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"