// My unassisted, original solution to this problem.

// Passes the first item in the provided array to the
// provided function. If the function returns false,
// the first item of the array is removed, resulting
// in the second item becoming the new first item.
// Process is repeated until the function returns true,
// at which point the now-shifted array is returned.

function dropElements(arr, func) {

  let arrFax = [...arr];
  let i = 0;

  while(!func(arrFax[i]) && arrFax.length > 0){
    arrFax.shift();
  }

  return arrFax;
}

// Solution is essentially identical to FCC's Solution 1.
// They don't bother to copy the array, and it turns out
// defining i is entirely unnecessary, since it's never
// iterated.

// function dropElements(arr, func) {
//   while (arr.length > 0 && !func(arr[0])) {
//     arr.shift();
//   }
//   return arr;
// }