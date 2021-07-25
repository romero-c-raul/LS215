/*
Inputs: Array of objects (An object with 2 or 3 properties)
Outputs: Array of nested arrays, where every subarray represents a bit for a specific material

RULES
  - Explicit Rules
    - Sort the given objects across the four recycle bins, based on their properties
    - If an object has two properties, it should be listed in both bins
    - The order of the types in each bin should be the same as the order of their respective object 
      in the input list 
    - All bins should be in the output, even if some are empty
    - All the bins contain only the type of the object as elements
      - Meaning, the output contains an array of nested arrays, where the elements of said nested 
      arrays may or may not be strings

CLARIFYING QUESTIONS
  - Within the input array, can an object be repeated? If so how would we handle that?
    - For example, can we have wine bottle twice in the array?
  - Is 3 the max number of properties an object can have?
  - Will all inputs be valid? Is there any previous validation we need to perform?
    - What if we are given an empty array (no objects)?
    - What if we are given an array with empty objects?
  - Can an object have a property that does not correspond to the bin?
  - In the output, the nested arrays subarrays should be in the order of paper, glass,
    organic, and plastic?
  - Will the type property ever be missing?
  - Will we ever have objects with no material properties at all? Or no properties at all?

EXAMPLES
  - Base Cases
    - An array with objects, where the objects have only one material property
    - An array with objects, where some of the objects have two properties
    - An array with objects, there is a property missing from all objects (empty bin will be left)
  - Edge Cases
    - Empty array as input
    - Array with some empty objects as inputs
    
ALGORITHM
  - Given an array with objects as elements
  - Create a collection that will store all the types of objects (allBins)
  - Iterate through the given array, and for every element (an object)
    - We want to iterate through all the values of said object
      - If one of those values exists in the bin
        - Depending of what the value of the obejct is, its type will be added to "allBins"
        - We do this for all the properties in the object that represent a material
        
  - Return all the values that are present in allBins as nested arrays
*/

function recycle(array = []) {
  let allBins = {
                 'paper': [], 
                 'glass': [], 
                 'organic': [], 
                 'plastic': [],
                };
  
  if (array.length < 1) {
    return Object.values(allBins);
  }
  
  array.forEach(currentObject => {
    let allObjectValues = Object.values(currentObject);
    allObjectValues.forEach(currentValue => {
      if (allBins[currentValue]) {
        allBins[currentValue].push(currentObject.type);
      }
    })    
  })
  
  return Object.values(allBins);
}

let input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

// output = [
//   ["wine bottle", "amazon box", "beer bottle"],
//   ["wine bottle", "beer bottle"],
//   ["rotten apples", "out of date yogurt"],
//   ["out of date yogurt"]
// ]

let input2 = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "plastic"},
  {"type": "wine bottle", "material": "glass"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass"}
]

// // output = [
// //   [""amazon box"],    //
// //   ["wine bottle", "beer bottle"],
// //   ["rotten apples"],
// //   ["out of date yogurt"]
// // ]


let input3 = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic"},
  {"type": "wine bottle", "material": "glass"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass"}
]

// // output = [
// //   [""amazon box"],    //
// //   ["wine bottle", "beer bottle"],
// //   ["rotten apples", "out of date yogurt"],
// //   []
// // ]

let input4 = [
  {"type": "rotten apples", "material": "glass"},
  {"type": "out of date yogurt", "material": "glass"},
  {"type": "wine bottle", "material": "glass"},
  {"type": "amazon box", "material": "glass"},
  {"type": "beer bottle", "material": "glass"}
]

// // output = [
// //   [],    
// //   ["rotten apples", "out of date yogurt", "wine bottle", "amazon box", "beer bottle"],
// //   [],
// //   []
// // ]

let input5 = [
  {"type": "rotten apples", "material": "organic"},
  {},
  {"type": "wine bottle", "material": "glass"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass"}
]


console.log(recycle(input));
console.log(recycle(input2));
console.log(recycle(input3));
console.log(recycle(input4));
console.log(recycle([]));
console.log(recycle());
console.log(recycle(input5));