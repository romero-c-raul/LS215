/*
input: array
output: array

RULES
  - Explicit rules
    - Write a function that generates an array of objects that contain only the id and title
      key/value pairs
    - Assume that id and title, when existing, is an integer greater than 0 and non-empty string
      respectively
    - Keep only releases that have both id and title properly present
    - Keep only the id and title data for each release

DATA STRUCTURES
  - Arrays

ALGORITHM
  - Iterate through array of releases, and for each release
    - Check if both title and id exist in the object
      - If they dont, continue to next object
      - If they do, create a new object with title and id key/value pairs only, and push
        this object to an array previously created
  - Return the array
*/

// function processReleaseData(data) {
//   let filteredReleases = [];

//   for(let index = 0; index < data.length; index += 1) {
//     let currentRelease = data[index];
    
//     if (currentRelease.id && currentRelease.title) {
//       filteredReleases.push({id: currentRelease.id, title: currentRelease.title});
//     }
//   }

//   return filteredReleases;
// }

function processReleaseData(data) {
  return data.filter(release => {
    if ((release.id || release.id === 0) && release.title) { // if conditional takes FE into account
      return true;
    }
  }).map(release => {
    return {id: release.id, title: release.title};
  });
}

let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

console.log(processReleaseData(newReleases));

// should return:
[{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];