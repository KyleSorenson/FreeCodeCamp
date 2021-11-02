function findElement(arr, func) {
  let num = 0;
  let returnArray = [];
  for(let i = 0 ; i < arr.length; i++) {
    if (func(arr[i])) {
      num = arr[i];
      break;
    }
  }
  if (num === 0) {
    return undefined
  } else { 
    return num;
  }
}

findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);