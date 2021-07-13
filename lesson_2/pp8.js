/*
input: string
output: string

RULES
  - Explicit Rules
    - Write a program that determines the sentence with most words in some text:
      - Sentences may end with periods, exclamation points, or question marks
      - Sentences always begin with a word character
      - Treat any sequence of characters that are not spaces or sentence ending
        characters as a word

DATA STRUCTURES
  - Strings
  - Arrays (?)

ALGORITHM
  - Split text into separate sentences
  - Select sentence that has the longest length
  - Count the words in the sentence
  - Return result that includes the sentence itself as well as the words in sentence
*/

let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

function obtainAllWords(sentence) {
  return sentence.match(/[a-zA-Z'-]+/g);
}

function longestSentence(text) {
  let allSentences = text.match(/[a-zA-Z][a-zA-Z',\- ]+[.?!]/g);
  
  allSentences.sort((aSentence, bSentence) => {
    return obtainAllWords(bSentence).length - obtainAllWords(aSentence).length;
  })

  let longestSentenceWordCount = obtainAllWords(allSentences[0]).length;
  
  return `${allSentences[0]}\n\n`+
         `The longest sentence has ${longestSentenceWordCount} words.`;
}

console.log(longestSentence(longText));

// console output
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

// The longest sentence has 86 words.


// Assuming the last sentence is removed:

// longestSentence(longText);

// console output
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.

// The longest sentence has 30 words.