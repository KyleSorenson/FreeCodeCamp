// My unassisted, original solution to this problem.

// The function creates separate pointers for each array that increment
// independently of each other. Values at each of the pointers are compared,
// and if a difference is found, the smaller of the two is added to a
// difference array. The pointer at the smaller value is then incremented,
// while the pointers at the larger value remains static, and the process is
// repeated, ensuring that all different values are captured from lowest
// to highest.

function diffArray(arr1, arr2) {
  
  // Copies both arrays and sorts them
  let arr1Sorted = [...arr1].sort();
  let arr2Sorted = [...arr2].sort();

  // Intializes array that will contain all the different values discovered
  let diffArr = [];
  
  // Initializes array that will contain the leftover values from whichever
  // array did not complete the process of being looped through
  let remainderArr = [];

  // Creates pointers that will increment through their respective
  // arrays independently (firstPointer: arr1, secondPointer: arr2)
  let firstPointer = 0;
  let secondPointer = 0;

  // Loop that increments both pointers through arrays until one of
  // the two pointers reaches the end of its array
  while ( firstPointer < arr1Sorted.length && secondPointer < arr2Sorted.length ) {   
    
    // Checks to see if both pointers are pointing at a value
    // (If one of the pointers is pointing to undefined, that means
    // the end of that array has been reached)
    if ( arr1Sorted[firstPointer] && arr2Sorted[secondPointer]){

      // Compares values at both pointers to see if they aren't the same
      if (arr1Sorted[firstPointer] !== arr2Sorted[secondPointer]) {
        
        // If the value at pointer one is smaller, that value is added
        // to diffArr and the first pointer is incremented (the second
        // pointer stays in the same position)
        if ( arr1Sorted[firstPointer] < arr2Sorted[secondPointer]) {
          diffArr.push(arr1Sorted[firstPointer]);
          firstPointer++;
        
        // If the value at pointer two is smaller, the reverse process
        // occurs: the value of the second pointer is added to diffArr
        // and the second pointer is incremented while the first pointer
        // remains static
        } else {
          diffArr.push(arr2Sorted[secondPointer]);
          secondPointer++;
        };
      
      // If the values at both pointers are the same, nothing is added to
      // diffArray and both pointers are incremented
      } else {
        firstPointer++;
        secondPointer++;
      }
    };
  };

  // Any values that were not pointed at by either pointer are added to remainderArr
  remainderArr = arr1Sorted.slice(firstPointer).concat(arr2Sorted.slice(secondPointer));
  
  // The values of the remainderArr are added to diffArr to complete the list of values
  // that are different between the two arrays
  return diffArr.concat(remainderArr);

};

// This solution has similarities with fcc's solutions 1 & 3. Their solution was to write
// subroutines that find the unique values in the first of two arrays provided, then
// run that routine once for the first array, and once for the second array. My solution
// looped through both arrays simultaneously.



// FCC's SOLUTION 1:

// NOTABLE FEATURES: They use "indexOf === -1" rather than "Array.prototype.includes()" to check
// if the array includes a given value.

// function diffArray(arr1, arr2) {
//   var newArr = [];

//   function onlyInFirst(first, second) {
//     // Looping through an array to find elements that don't exist in another array
//     for (var i = 0; i < first.length; i++) {
//       if (second.indexOf(first[i]) === -1) {
//         // Pushing the elements unique to first to newArr
//         newArr.push(first[i]);
//       }
//     }
//   }

//   onlyInFirst(arr1, arr2);
//   onlyInFirst(arr2, arr1);

//   return newArr;
// }



// FCC's SOLUTION 3:

// NOTABLE FEATURES: I replaced "indexOf === -1" with Array.prototype.includes()
// to confirm they are in fact the same action. This is a very efficient method
// of accomplishing the same task as solution 1.

// function diffArray(arr1, arr2) {
//   return [...diff(arr1, arr2), ...diff(arr2, arr1)];

//   function diff(a, b) {
//     return a.filter(item => !b.includes(item));
//   }
// }