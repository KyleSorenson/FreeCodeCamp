function diffArray(arr1, arr2) {
  
  // Copies both arrays and sorts them
  let arr1Sorted = [...arr1].sort();
  let arr2Sorted = [...arr2].sort();

  // Array that will contain all the different values discovered
  let diffArr = [];
  
  // Array that will conatin the leftover values from whichever
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

}