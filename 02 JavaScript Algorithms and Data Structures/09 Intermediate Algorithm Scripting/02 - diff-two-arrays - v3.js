// Third attempt to write an algorithm to solve this problem,
// this time using the free code camp hints to go about it
// a different way.

// Use of Array.prototype.includes(), 
// Array.prototype.filter(), Array.prototype.concat()
// are recommended.

// Hint 1: Merge the list to make it easy to compare functions.

// Hint 2: Use filter to get the new array,
// you will need to create a callback function.

// Hint 3: The best way to go about the callback function 
// is to check if the number from the new merged array is
// not in both original arrays and return it.

function diffArray(arr1, arr2) {
  
  // Array tha merges the two arrays and removes
  // duplicate values.
  const mergedArr = [...new Set([...arr1, ...arr2])];

  // Filters merged array by any value that is not included
  // in one or the other array
  const newArr = mergedArr.filter( i => !arr1.includes(i) || !arr2.includes(i) );
  return newArr;
}

// Notes: this is much, much less code than my unassisted solution.

// Generally matches fcc's solution 2, though they accomplish the 
// same task exclusively through method chaining.

// FCC's SOLUTION 2:

// function diffArray(arr1, arr2) {
//   return arr1
//     .concat(arr2)
//     .filter(item => !arr1.includes(item) || !arr2.includes(item));
// }