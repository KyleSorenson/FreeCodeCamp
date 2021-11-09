function steamrollArray(arr) {

  (function recursiveRoll(thisArr, savedItems, thisIndex, depth, parentArr, parentIndex) {

    let thisItem = thisArr[thisIndex];

    if(thisItem !== undefined) {
    
      if(!Array.isArray(thisItem)) {
        console.log(`Item at index ${thisIndex} and depth ${depth} and is not an Array,`);
        console.log(`Item has value ${thisItem}`);
        savedItems.push(thisItem);
        console.log('"' + savedItems + '" saved');
        console.log(`Incrementing index`);
        if(parentArr !== undefined) {
          console.log('Item has a parent');
          //recursiveRoll(thisArr, savedItems, thisIndex + 1, depth, parentArr, parentIndex);
        } else {
          recursiveRoll(thisArr, savedItems, thisIndex + 1, depth);
        }
      } else {
        console.log(`Item at index ${thisIndex} and depth ${depth} and is not an Array`);
        recursiveRoll(thisItem, savedItems, 0, depth + 1, thisArr, thisIndex);
      }

    } else {

      if(parentArr !== undefined) {
        console.log('Item has a parent');
        recursiveRoll(parentArr, savedItems, parentIndex, depth - 1);
      }

    }

    //console.log(savedItems);

  }(arr, [], 0, 0));



  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);