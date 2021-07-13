let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

/*
input: object
output: object

RULES
  Explicit Rules:
    - Implement a function that takes a studentScores object and returns a class record summary
      object
    - Return an object with two properties:
  Implicit Rules:
      - studentGrades, which has an array of strings as a value
      - exams, which has an array of objects as a value
        - Each object has the average, minimum, and maximum score of each test

DATA STRUCTURES
  - Arrays
  - Objects
  - Strings
  - Numbers

ALGORITHM
  - Compute each students average: grade and letter
    - Iterate through each student object
      - For each student object, obtain the exam average and the total exercise score
      - Using the exam avg and exercise score, calculate the final percent grade
        - Be sure to round the percent grade to the nearest integer
      - Lookup the letter grade
      - Combine the percent grade and letter grade

  - Computer the average, min, and max scores of each test
    - There are 4 tests total that each student took
    - Iterate through each test and obtain each students score
      - 
*/

function calculateExamAverage(student) {
  let allExamGrades = student.scores.exams;
  let examTotal = allExamGrades.reduce((total, currentValue) => total += currentValue);

  return examTotal / 4
}

function calculateExerciseScore(student) {
  let allExerciseGrades = student.scores.exercises;
  let exerciseTotal = allExerciseGrades.reduce((total, currentValue) => total += currentValue);
  
  return exerciseTotal;
}

function calculateFinalGrade(examAverage, exerciseScore) {
  return Math.round((examAverage * 0.65) + (exerciseScore * 0.35));
}

function determineLetterGrade(finalGrade) {
  if (finalGrade >= 93 && finalGrade <= 100) {
    return 'A';
  } else if (finalGrade >= 85 && finalGrade <= 92) {
    return 'B';
  } else if (finalGrade >= 77 && finalGrade <= 84) {
    return 'C';
  } else if (finalGrade >= 69 && finalGrade <= 76) {
    return 'D';
  } else if (finalGrade >= 60 && finalGrade <= 68) {
    return 'E';
  } else {
    return 'F';
  }
}

function combinePercentAndLetterGrades(finalGrade, letterGrade) {
  return `${finalGrade} (${letterGrade})`;
}

function generateGradeRecord(scores, student) {
  let examAverage = calculateExamAverage(scores[student]);
  let exerciseScore = calculateExerciseScore(scores[student]);
  let finalGrade = calculateFinalGrade(examAverage, exerciseScore);
  let letterGrade = determineLetterGrade(finalGrade);
  
  return combinePercentAndLetterGrades(finalGrade, letterGrade)
}

function obtainAllExamGrades(scores) {
  let allStudentExamGrades = [];

  Object.keys(scores).forEach(student => {
    let ExamScores = scores[student].scores.exams
    allStudentExamGrades.push(ExamScores);
  })

  return allStudentExamGrades;
}

function obtainAllExamAverages(allExamGrades) {
  let totalsForEachTest = [0, 0, 0, 0];

  allExamGrades.forEach(subarray => {
    subarray.forEach((grade, index) => {
      totalsForEachTest[index] += grade;
    })
  })

  return totalsForEachTest.map(num => num / 5);
}

function obtainAllExamMins(allExamGrades) {
  let minimumExamValues = [[], [], [], []]

  allExamGrades.forEach(subarray => {
    subarray.forEach((grade, index) => {
      minimumExamValues[index].push(grade);
    })
  })

  return minimumExamValues.map(subarray => {
    return Math.min(...subarray);
  });
}

function obtainAllExamMax(allExamGrades) {
  let maxExamValues = [[], [], [], []]

  allExamGrades.forEach(subarray => {
    subarray.forEach((grade, index) => {
      maxExamValues[index].push(grade);
    })
  })

  return maxExamValues.map(subarray => {
    return Math.max(...subarray);
  });
}

function generateExamSummary(scores) {
  let exams = [{}, {}, {}, {}];

  let allExamGrades = obtainAllExamGrades(scores);
  let allExamAverages = obtainAllExamAverages(allExamGrades);
  let allExamMins = obtainAllExamMins(allExamGrades);
  let allExamMaxs = obtainAllExamMax(allExamGrades);
  
  exams.forEach((object, index) => {
    object.average = allExamAverages[index];
    object.minimum = allExamMins[index];
    object.maximum = allExamMaxs[index];
  })

  return exams;
}

function generateStudentGrades(scores) {
  let studentGrades = [];
   
  Object.keys(scores).forEach(student => {
    studentGrades.push(generateGradeRecord(scores, student));
  })

  return studentGrades;
}

function generateClassRecordSummary(scores) {
  let studentGrades = generateStudentGrades(scores);
  let exams = generateExamSummary(scores);
  
  return {studentGrades: studentGrades, exams: exams};
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }