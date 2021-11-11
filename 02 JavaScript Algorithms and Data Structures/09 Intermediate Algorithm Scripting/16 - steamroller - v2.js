// My original, unassisted solution to this problem.

// My goal was (again) to practice writing a recursive function.
// (Recursion may in fact be required to solve this?)
// The algorithm checks each value in the parent array. If the
// value is not an array, then it is pushed to the saved items
// array. If the value is an array then the same function is
// called again on the child array, and each value in THAT array
// is test for being an array or not, etc...

function steamrollArray(arr) {

  return (function recursiveRoll(thisArray, savedItems) {

    for(let i = 0; i < thisArray.length; i++) {
      if(!Array.isArray(thisArray[i])) {
        savedItems.push(thisArray[i]);
      } else {
        recursiveRoll(thisArray[i], savedItems);
      }
    }

    return savedItems;

  }(arr, []));

}