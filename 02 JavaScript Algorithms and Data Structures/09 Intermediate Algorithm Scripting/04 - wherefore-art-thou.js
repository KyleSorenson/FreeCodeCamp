// My unassisted, original solution to this problem.

// Uses a relatively simple logic tree to determine
// if objects in collection possess the same keys and
// values as the source object

function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line

  // Loops through each object in collection
  for (let j = 0; j < collection.length; j++) {
    
    // Defaults hasAllItems to true
    let hasAllItems = true;
    
    // Loops through every key in source object
    for (let i in source) {
      
      // if current collection object doesn't have one of
      // source object keys, hasAllItems is flagged
      // as false
      if (!collection[j].hasOwnProperty(i)) {
        hasAllItems = false;
      }
    }

    // If hasAllItems is true
    if (hasAllItems) {

      // Defaults hasSameValues to true
      let hasSameValues = true;
      
      // Loops through each key in source object
      // and compares its value to the value of the
      // same key in the current collection object 
      for (let i in source) {
        
        // If the values don't match, hasSameValues
        // is flagged as false.
        if (collection[j][i] !== source[i]) {
          hasSameValues = false;
        }
      }

      // Finally, the current collection object is
      // only pushed to the return array if all the
      // matching keys also match the same values
      // as the source object
      if (hasSameValues) {
        arr.push(collection[j]);
      }
    }
  }
  // Only change code above this line
  return arr;
}

// FCC's solution is much more compact than mine,
// though the operations are ultimately very similar.

// NOTABLE CONCEPTS: Object.keys()

// function whatIsInAName(collection, source) {
//   var srcKeys = Object.keys(source);

//   // filter the collection
//   return collection.filter(function(obj) {
//     for (var i = 0; i < srcKeys.length; i++) {
//       if (
//         !obj.hasOwnProperty(srcKeys[i]) ||
//         obj[srcKeys[i]] !== source[srcKeys[i]]
//       ) {
//         return false;
//       }
//     }
//     return true;
//   });
}