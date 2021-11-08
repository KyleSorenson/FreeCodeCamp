function diffArray(arr1, arr2) {
  
  let arr1Sorted = [...arr1].sort();
  let arr2Sorted = [...arr2].sort();
  let diffArr = [];
  let remainderArr = [];
  let firstPointer = 0;
  let secondPointer = 0;

  while ( firstPointer < arr1Sorted.length && secondPointer < arr2Sorted.length ) {   

    if ( arr1Sorted[firstPointer] && arr2Sorted[secondPointer]){

      if (arr1Sorted[firstPointer] !== arr2Sorted[secondPointer]) {
        
        if ( arr1Sorted[firstPointer] < arr2Sorted[secondPointer]) {
          diffArr.push(arr1Sorted[firstPointer]);
          firstPointer++;
        
        } else {
          diffArr.push(arr2Sorted[secondPointer]);
          secondPointer++;
        };

      } else {
        firstPointer++;
        secondPointer++;
      }
    };
  };

  remainderArr = arr1Sorted.slice(firstPointer).concat(arr2Sorted.slice(secondPointer));

  return diffArr.concat(remainderArr);

};