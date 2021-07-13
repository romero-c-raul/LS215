/*
input: array
output: array

RULES
  Explicit rules
    - Write a function that can process the input data and returns an array with fixed info
      - All bands should have Canada as a country
      - All band name's should be capitalized
      - Remove all dots from band names

DATA STRUCTURES
  - Strings
  - Arrays

ALGORITHM
  - Iterate through every band object
    - Change all country values to 'Canada'
    - Remove dots from all band names
    - Capitalize all words

*/

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function updateCountry(band) {
  band.country = 'Canada'
}

function capitalizeBandName(band) {
  band.name = band.name.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

function removeDotsInBandName(band) {
  band.name = band.name.replace(/\./g, '');
}

function processBands(data) {
  // This mutates each object in the array
  data.forEach(band => {
    updateCountry(band);
    removeDotsInBandName(band);
    capitalizeBandName(band);
  })

  return data;
}

processBands(bands);

// should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]