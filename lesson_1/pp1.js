/*
input: array
output: number

RULES
  - Explicit rules:
    - Write a function that takes an Array of rectangles as an argument. The function should
      return the total area covered by all the rectangles

DATA STRUCTURES
  - Arrays

ALGORITHM
  - Map each element in the array to its total area
  - Reduce the array by adding up all the areas together
*/

function totalArea(array) {
  let rectangleAreas;

  rectangleAreas = array.map(subarray => {
    return subarray[0] * subarray[1];
  })

  return rectangleAreas.reduce((total, area) => total + area);
}

// let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// console.log(totalArea(rectangles));    // 141

/*
ALGORITHM
  - Filter out rectangles that are not square
  - Map each element in the array to its total area
  - Reduce the array by adding up all the areas together

SUB-PROCESS - Filtering out non-squares
  - Squares have the same width and height
  - select only elements whose height and width are the same
*/

function onlySquares(array) {
  return array.filter(rectangle => rectangle[0] === rectangle[1]);
}

function totalSquareArea(array) {
  return totalArea(onlySquares(array));
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 121
