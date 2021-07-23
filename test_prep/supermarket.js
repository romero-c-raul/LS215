// There is a queue for the self-checkout tills at the supermarket. Your task is
// write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer
// represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.

// output
// The function should return an integer, the total time required.



queueTime([5,3,4], 1)
queueTime([10,2,3,3], 2)
queueTime([10,2,3,3,5], 3)
/*
- 
*/

/*
RULES
  - Explicit Rules:
    - If you have one till, the total time is the sum of all array elements
    - If you have two tills, first two elements of the array will decrease simultaneously
    - If you have 3 tills, the first three elements will decrease simultaneously
    - When one of those elements reaches 0, the next element that is not in a till starts
      to decrease

CLARIFYING QUETIONS
  - Is 0 a valid array element?
  - Do we need to expect negative numbers on array?
  - How do we deal with wrong data type or empty argument?

EXAMPLES
  - Base Cases
    - One till available
    - two tills available
    - three tills available
    - Elements in array are not in order
    - Equal or more tills than elements in array
  
  - Edge Cases
    - Empty array
    - Empty argument

ALGORITHM
  - Given an array of integers(customers) and an integer(tills)
  - Create a variable called timer
  - Create a loop that keeps going until the customer array is empty (length = 0)
    - If there are any elements in the array that are zero, remove them
    - Transform the first (tills) elements in the array by subtracting 1
    - Increase timer by 1

  - return timer
*/

function queueTime(customers = [], tills = 1) {
  let timer = 0
  
  do {
    customers = customers.filter(currentCustomer => {
      if (currentCustomer > 0) return true;
    })

    if (customers.length < 1) break;

    customers = customers.map((currentCustomer, index) => {
      if (index + 1 <= tills) {
        return currentCustomer - 1;
      } else {
        return currentCustomer;
      }
    })

    timer += 1

  } while (true);

  return timer;
}

console.log(queueTime([5,3,4], 1));     // 12
console.log(queueTime([10,2,3,3], 2));  // 10
console.log(queueTime([2,3,10], 2));    // 12
console.log(queueTime([], 2));          // 0
console.log(queueTime());               // 0
console.log(queueTime([2,3,10], 3));    // 10
console.log(queueTime([2,3,10], 10));    // 10
console.log(queueTime([2,3], 10));    // 3

