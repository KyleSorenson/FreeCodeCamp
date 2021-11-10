// My unassisted, original solution to this problem.

// Primarily an excercize in handling different numbers
// of arguments. Arrays are created for both the items
// that will be destroyed and the array that will seek
// the items to detroy. Items in both arrays are compared
// against each other, and every item that is matched 
// to both arrays is filtered out (or "destroyed").

function destroyer(arg) {
  let destArr = arguments[0];
  let seekArr = [...arguments].slice(1);

  for(let i = 0; i < seekArr.length; i++) {
    destArr = destArr.filter(j => j != seekArr[i]);
  }

  return destArr;
}